export interface IWorkProps {
  image: string;
  url: string;
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

export interface INowPlayingProps {
  image: string;
  logo: string;
  title: string;
  date: string;
  statistics: Array<{ number: string; description: string }>;
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
  statistics: Array<{ total: string; description: string }>;
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
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
  };
  statistics: Array<{ total: string; description: string }>;
  progress: {
    variant: string;
    value: string;
  };
  url: string;
}

export interface IProjectExtendedRowItem {
  statistics: Array<{ total: string; description: string }>;
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
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
  };
  statistics: Array<{ total: string; description: string }>;
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
    value: string;
  };
  team: {
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
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
    value: string;
  };
  team: {
    group: Array<{ filename?: string; variant: string; fallback?: string }>;
  };
}
