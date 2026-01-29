import { Spacing } from '@/constants/theme';
import { useWindowDimensions } from 'react-native';

export enum ScreenOrientationType {
  portrait = 'portrait',
  landscape = 'landscape',
}

export type ScreenDimensionsResult = {
  width: number;
  height: number;
  scale: number;
  orientation: string;
  spacing: typeof Spacing;
};

export function useScreenDimensions(): ScreenDimensionsResult {
  const { width, height } = useWindowDimensions();
  const scale = width > height ? width / 1000 : height / 1000;
  return {
    width,
    height,
    scale,
    orientation: width > height ? 'landscape' : 'portrait',
    spacing: {
      half: Spacing.half * scale,
      one: Spacing.one * scale,
      two: Spacing.two * scale,
      three: Spacing.three * scale,
      four: Spacing.four * scale,
      five: Spacing.five * scale,
      six: Spacing.six * scale,
    },
  };
}
