import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const CAMERA_KEYWORDS = [
  'Failed to acquire camera feed',
  'Camera access failed',
  'Permission denied',
  'NotAllowedError',
  'requested device not found',
  'getUserMedia',
  'Could not access camera',
  'NotFoundError',
  'NotReadableError',
  'AbortError',
];

function isCameraError(message: string): boolean {
  const lower = message.toLowerCase();
  return CAMERA_KEYWORDS.some(k => lower.includes(k.toLowerCase()));
}

const originalAlert = window.alert;
window.alert = function (message?: any) {
  const msg = String(message ?? '');
  if (isCameraError(msg)) {
    console.warn('[Camera] Suppressed alert dialog:', msg);
    return;
  }
  originalAlert.call(window, message);
};

const originalConsoleError = console.error;
console.error = function (...args: any[]) {
  const message = args.map(arg => String(arg)).join(' ');
  if (isCameraError(message)) {
    console.warn('[Camera] Suppressed console.error:', ...args);
    return;
  }
  originalConsoleError.apply(console, args);
};

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const message = reason instanceof Error ? reason.message : String(reason ?? '');
  if (isCameraError(message)) {
    console.warn('[Camera] Suppressed unhandled rejection:', message);
    event.preventDefault();
  }
});

window.addEventListener('error', (event) => {
  const message = event.message || '';
  if (isCameraError(message)) {
    console.warn('[Camera] Suppressed error event:', message);
    event.preventDefault();
    return false;
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
