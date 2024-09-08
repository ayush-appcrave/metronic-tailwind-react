interface IAvatar {
  className: string;
  image: string;
  imageClass: string;
  badgeClass: string;
}

interface IWork {
  image: string;
  title: string;
  id: number;
}

export interface INetworkAuthorContentItem {
  avatar: IAvatar;
  bgImage: string;
  name: string;
  location: string;
  url?: string;
  works: IWork[];
}
export interface INetworkAuthorContentItems extends Array<INetworkAuthorContentItem> {}
