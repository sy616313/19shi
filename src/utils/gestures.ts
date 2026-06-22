import { Landmark, GestureType } from '../types';

export function getDistance(p1: Landmark, p2: Landmark): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dz = p1.z - p2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function detectGesture(landmarks: Landmark[]): GestureType {
  if (!landmarks || landmarks.length < 21) return 'none';

  const wrist = landmarks[0];
  
  // Reference scale of the hand (wrist to middle MCP joint index 9)
  const handScale = getDistance(wrist, landmarks[9]);
  if (handScale < 0.01) return 'none';

  // index (8, 6), middle (12, 10), ring (16, 14), pinky (20, 18)
  const isIndexStraight = getDistance(landmarks[8], wrist) > getDistance(landmarks[6], wrist) * 1.05;
  const isMiddleStraight = getDistance(landmarks[12], wrist) > getDistance(landmarks[10], wrist) * 1.05;
  const isRingStraight = getDistance(landmarks[16], wrist) > getDistance(landmarks[14], wrist) * 1.05;
  const isPinkyStraight = getDistance(landmarks[20], wrist) > getDistance(landmarks[18], wrist) * 1.05;

  let straightCount = 0;
  if (isIndexStraight) straightCount++;
  if (isMiddleStraight) straightCount++;
  if (isRingStraight) straightCount++;
  if (isPinkyStraight) straightCount++;

  // Robust OK gesture detection:
  // 1. Thumb (4) and Index (8) tips are pinched together.
  const pinchDist = getDistance(landmarks[4], landmarks[8]);
  const isPinched = (pinchDist / handScale) < 0.35;

  // 2. The other 3 fingers are straight
  let otherStraightCount = 0;
  if (isMiddleStraight) otherStraightCount++;
  if (isRingStraight) otherStraightCount++;
  if (isPinkyStraight) otherStraightCount++;
  const isOKState = isPinched && otherStraightCount >= 2;

  if (isOKState) return 'ok';

  // Chinese & precision digit style definitions:
  // 1. One finger: Only index is straight
  if (isIndexStraight && !isMiddleStraight && !isRingStraight && !isPinkyStraight) {
    return 'one';
  }

  // 2. Two fingers: Index and Middle are straight
  if (isIndexStraight && isMiddleStraight && !isRingStraight && !isPinkyStraight) {
    return 'two';
  }

  // 4. Open Hand: All fingers are straight
  if (isIndexStraight && isMiddleStraight && isRingStraight && isPinkyStraight) {
    return 'open';
  }

  // 5. Fist: All fingers are bent
  if (!isIndexStraight && !isMiddleStraight && !isRingStraight && !isPinkyStraight) {
    return 'fist';
  }

  return 'none';
}

/**
 * Robust filter for smooth gestural transitions
 */
export class GestureSmoother {
  private history: GestureType[] = [];
  private size: number;

  constructor(size: number = 3) { // Lower buffer size increases responsiveness!
    this.size = size;
  }

  add(gesture: GestureType): GestureType {
    this.history.push(gesture);
    if (this.history.length > this.size) {
      this.history.shift();
    }

    // Count frequencies
    const counts: Record<GestureType, number> = {
      fist: 0,
      open: 0,
      ok: 0,
      none: 0,
      one: 0,
      two: 0,
    };

    for (const g of this.history) {
      counts[g]++;
    }

    // Find majority
    let maxCount = 0;
    let majorityGesture: GestureType = 'none';

    for (const key of Object.keys(counts) as GestureType[]) {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        majorityGesture = key;
      }
    }

    return majorityGesture;
  }

  clear() {
    this.history = [];
  }
}
