export type KeenIconsStyleType = 'duotone' | 'solid' | 'outline';

export interface IKeenIconProps {
  icon: string;
  style?: KeenIconsStyleType;
  className?: string;
}