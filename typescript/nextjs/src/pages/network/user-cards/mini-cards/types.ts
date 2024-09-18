interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

export interface INetworkMiniCardsContentItem {
  avatar: IAvatar;
  name: string;
  email: string;
  verify: boolean;
}
export interface INetworkMiniCardsContentItems extends Array<INetworkMiniCardsContentItem> {}
