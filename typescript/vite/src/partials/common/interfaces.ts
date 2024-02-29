export interface IAvatarsItem {
  filename?: string;
  fallback?: string;
  variant?: string;
}
export interface IAvatarsItems extends Array<IAvatarsItem> {}

export interface IAvatarsProps {
  group: IAvatarsItem[];
  more?: { variant: string; number: number };
  className?: string;
}

export interface IAvatarProps {
  image?: string;
  fallback?: string;
  icon?: string;
  iconClass?: string;
  badgeClass?: string;
  className?: string;
  imageClass?: string;
}

export interface IRatingProps {
  className?: string;
  rating: number;
  round?: number;
}
