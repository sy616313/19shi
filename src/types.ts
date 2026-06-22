export interface Landmark {
  x: number;
  y: number;
  z: number;
}

export type GestureType = 'fist' | 'open' | 'ok' | 'none' | 'one' | 'two';

export interface ColorScheme {
  name: string;
  cakeBody: string; // Hex color array or main hex
  frosting: string;
  cherry: string;
  decorations: string[];
}

export interface ImageGrabConfig {
  scaleRange: [number, number];
  fadeOutDuration: number; // ms
  maxActiveImages: number;
  followHand: boolean;
}

export interface DebugSettings {
  debugMode: boolean;
  showSkeleton: boolean;
  manualProgress: boolean;
  progressValue: number;
  particleCount: number;
  colorScheme: string;
  explosionMode: string;
  pinchScale: number;
}
