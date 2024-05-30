export interface IGamerStatisticsItem {
  image: string;
  number: string;
  label: string;
}
export interface IGamerStatisticsItems extends Array<IGamerStatisticsItem> {}

export interface IGamerStatisticsProps {
  details: IGamerStatisticsItem[];
}

export interface IGamerFavoriteGamesItem {
  image: string;
}
export interface IGamerFavoriteGamesItems extends Array<IGamerFavoriteGamesItem> {}

export interface IGamerAboutItem {
  label: string;
  info: string;
  type?: number;
}
export interface IGamerAboutItems extends Array<IGamerAboutItem> {}

export interface IGamerTournamentsItem {
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
export interface IGamerTournamentsItems extends Array<IGamerTournamentsItem> {}

export interface IGamerTournamentsProps {
  url: string;
}

export interface IGamerNowPlayingItem {
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
export interface IGamerNowPlayingItems extends Array<IGamerNowPlayingItem> {}

export interface IGamerNowPlayingProps {
  url: string;
}

export interface IGamerActivityProps {
  url: string;
}
