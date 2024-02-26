export interface IAvatarsProps {
  group: Array<{ filename?: string; fallback?: string; variant: string }>;
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
