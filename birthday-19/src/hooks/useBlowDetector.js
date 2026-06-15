import { useEffect, useRef, useCallback, useState } from "react";

const BLOW_THRESHOLD = 35;
const BLOW_HOLD_MS = 400;
const ANALYZER_FFT = 256;

export default function useBlowDetector(active = false) {
  const [micSupported, setMicSupported] = useState(null);
  const [blowDetected, setBlowDetected] = useState(false);
  const [micLevel, setMicLevel] = useState(0);
  const streamRef = useRef(null);
  const ctxRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);
  const blowTimerRef = useRef(null);
  const triggeredRef = useRef(false);

  const stopMic = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (blowTimerRef.current) {
      clearTimeout(blowTimerRef.current);
      blowTimerRef.current = null;
    }
    if (ctxRef.current?.state !== "closed") {
      ctxRef.current?.close().catch(() => {});
    }
    ctxRef.current = null;
    analyserRef.current = null;
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!active) {
      stopMic();
      setBlowDetected(false);
      setMicLevel(0);
      triggeredRef.current = false;
      setMicSupported(null);
      return;
    }

    triggeredRef.current = false;
    setBlowDetected(false);

    const startMic = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false,
          },
        });
        streamRef.current = stream;
        setMicSupported(true);

        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        ctxRef.current = ctx;

        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = ANALYZER_FFT;
        analyser.smoothingTimeConstant = 0.3;
        source.connect(analyser);
        analyserRef.current = analyser;

        const buffer = new Uint8Array(analyser.frequencyBinCount);

        const detect = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(buffer);

          let sum = 0;
          for (let i = 0; i < buffer.length; i++) {
            sum += buffer[i];
          }
          const avg = sum / buffer.length;
          setMicLevel(Math.round(avg));

          if (!triggeredRef.current) {
            if (avg > BLOW_THRESHOLD) {
              if (!blowTimerRef.current) {
                blowTimerRef.current = setTimeout(() => {
                  if (!triggeredRef.current) {
                    triggeredRef.current = true;
                    setBlowDetected(true);
                    stopMic();
                  }
                }, BLOW_HOLD_MS);
              }
            } else {
              if (blowTimerRef.current) {
                clearTimeout(blowTimerRef.current);
                blowTimerRef.current = null;
              }
            }
          }

          if (!triggeredRef.current) {
            rafRef.current = requestAnimationFrame(detect);
          }
        };

        detect();
      } catch {
        setMicSupported(false);
      }
    };

    startMic();

    return () => {
      stopMic();
    };
  }, [active, stopMic]);

  return { micSupported, blowDetected, micLevel };
}
