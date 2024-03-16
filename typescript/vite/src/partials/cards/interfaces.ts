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
