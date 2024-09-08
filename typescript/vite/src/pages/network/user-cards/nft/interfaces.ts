interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

interface IStatistic {
  total: string;
  description: string;
}

export interface INetworkNFTContentItem {
  name: string;
  info: string;
  avatar: IAvatar;
  email: string;
  statistics: IStatistic[];
  bgImage: string;
}
export interface INetworkNFTContentItems extends Array<INetworkNFTContentItem> {}
