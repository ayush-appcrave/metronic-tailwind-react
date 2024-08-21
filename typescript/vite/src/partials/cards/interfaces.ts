export interface IWorkProps {
  image: string;
  url: string;
  title: string;
  authorAvatar: string;
  authorName: string;
  likes: number;
  comments: number;
}

export interface IWorkRowProps {
  image: string;
  description: string;
  title: string;
  authorAvatar: string;
  authorName: string;
  likes: number;
  comments: number;
}

export interface ILocationProps {
  image: string;
  title: string;
  description: string;
}

export interface INFTProps {
  image: string;
  title: string;
  id: number;
  info: string;
  date: string;
}

export interface IPostProps {
  image: string;
  label: string;
  description: string;
  time: string;
}

export interface ITournamentProps {
  image: string;
  logo: string;
  title: string;
  time: string;
  labels: string[];
  progress: {
    variant: string;
    value: number;
    slotNumber: number;
    leftNumber: number;
  };
}

export interface INowPlayingItem {
  number: string;
  description: string;
}
export interface INowPlayingItems extends Array<INowPlayingItem> {}

export interface INowPlayingProps {
  image: string;
  logo: string;
  title: string;
  date: string;
  statistics: INowPlayingItem[];
  label: number;
  team: {
    group: Array<{ filename: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
}

export interface IProjectExtendedItem {
  total: string;
  description: string;
}
export interface IProjectExtendedItems extends Array<IProjectExtendedItem> {}

export interface IProjectExtendedProps {
  status: {
    variant: string;
    label: string;
  };
  logo: string;
  title: string;
  description: string;
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
  };
  statistics: IProjectExtendedItem[];
  progress: {
    variant: string;
    value: number;
  };
  url: string;
}

export interface IProjectExtendedRowItem {
  total: string;
  description: string;
}
export interface IProjectExtendedRowItems extends Array<IProjectExtendedRowItem> {}

export interface IProjectExtendedRowProps {
  status: {
    variant: string;
    label: string;
  };
  logo: string;
  title: string;
  description: string;
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
  };
  statistics: IProjectExtendedRowItem[];
  url: string;
}

export interface IProjectProps {
  logo: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  status: {
    variant: string;
    label: string;
  };
  progress: {
    variant: string;
    value: number;
  };
  team: {
    size?: string,
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      variant?: string;
      number?: number;
    };
  };
}

export interface IProjectRowProps {
  logo: string;
  name: string;
  description: string;
  status: {
    variant: string;
    label: string;
  };
  progress: {
    variant: string;
    value: number;
  };
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      variant?: string;
      number?: number;
    };
  };
}

export interface ITeamProps {
  icon: string;
  title: string;
  description: string;
  labels: string[];
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
    className?: string;
  };
  connected: boolean;
  rating: {
    value: number;
    round: number;
  };
}

export interface IConnectionItem {
  total: string;
  description: string;
}
export interface IConnectionItems extends Array<IConnectionItem> {}

export interface IConnectionProps {
  name: string;
  info: string;
  avatar: {
    className: string;
    fallback?: string;
    image?: string;
    imageClass?: string;
    badgeClass: string;
  };
  email: string;
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
  statistics: IConnectionItem[];
  connected: boolean;
}

export interface ICampaignItem {
  total: string;
  description: string;
}
export interface ICampaignItems extends Array<ICampaignItem> {}

export interface ICampaignProps {
  logo: string;
  logoSize?: string;
  logoDark?: string;
  title: string;
  description: string;
  status: {
    variant: string;
    label: string;
  };
  statistics: ICampaignItem[];
  progress: {
    variant: string;
    value: number;
  };
  url: string;
}

export interface ICampaignRowItem {
  total: string;
  description: string;
}
export interface ICampaignRowItems extends Array<ICampaignRowItem> {}

export interface ICampaignRowProps {
  logo: string;
  logoSize?: string;
  logoDark?: string;
  title: string;
  description: string;
  status: {
    variant: string;
    label: string;
  };
  statistics: ICampaignRowItem[];
  url: string;
}

export interface IAddNewProps {
  path: string;
  size: string;
  iconSize: string;
  title: string;
  subTitle: string;
}

export interface IAuthorItem {
  title: string;
  id: string;
  image: string;
}
export interface IAuthorItems extends Array<IAuthorItem> {}

export interface IAuthorProps {
  bgImage: string;
  name: string;
  location: string;
  works: IAuthorItem[];
}

export interface IIntegrationProps {
  logo: string;
  path: string;
  name: string;
  description: string;
}

export interface INFT2Item {
  total: string;
  description: string;
}
export interface INFT2Items extends Array<INFT2Item> {}

export interface INFT2Props {
  bgImage: string;
  name: string;
  email: string;
  info: string;
  statistics: INFT2Item[];
}

export interface INotificationProps {
  icon: string;
  description: string;
}

export interface IRoleProps {
  path: string;
  title: string;
  subTitle: string;
  description: string;
  team: string;
  badge: React.ReactNode;
}
