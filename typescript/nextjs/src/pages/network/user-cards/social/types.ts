interface IAvatar {
  className: string;
  image?: string;
  imageClass?: string;
  fallback?: string;
  badgeClass: string;
}

export interface INetworkSocialContentItem {
  avatar: IAvatar;
  name: string;
  description: string;
  verify: boolean;
}
export interface INetworkSocialContentItems extends Array<INetworkSocialContentItem> {}
