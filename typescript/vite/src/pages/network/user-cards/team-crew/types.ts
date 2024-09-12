interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

interface ITeamGroup {
  filename: string;
}

interface ITeam {
  size: string;
  group: ITeamGroup[];
  more?: {
    number: number;
    variant: string;
  };
}

interface IStatistic {
  total: string;
  description: string;
}

export interface INetworkTeamCrewContentItem {
  name: string;
  info: string;
  avatar: IAvatar;
  email: string;
  team: ITeam;
  statistics: IStatistic[];
  connected: boolean;
}
export interface INetworkTeamCrewContentItems extends Array<INetworkTeamCrewContentItem> {}
