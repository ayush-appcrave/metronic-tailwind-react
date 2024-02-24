export interface IHeadingProps {
  author: string;
  avatar: {
    image?: string;
    fallback?: string;
    icon?: string;
    iconClass?: string;
    badgeClass?: string;
    className?: string;
    imageClass?: string;
  };
  date: string;
}

export interface ITabsProps {
  postId: number;
  activeTab: string;
  setActiveTab: (newTab: string) => void;
  comments: number;
  likes: string;
  saves: number;
}

export interface ICommentsItem {
  avatar: string;
  author: string;
  date: string;
  text: string;
}
export interface ICommentsItems extends Array<ICommentsItem> {}

export interface ICommentsProps {
  items: ICommentsItem[];
  url: string;
}

export interface ILikesProps {
  items: any;
}

export interface ISavesProps {
  items: any;
}
