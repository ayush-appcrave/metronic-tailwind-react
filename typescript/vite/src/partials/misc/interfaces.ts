export interface IHighlightedPostsItem {
  icon: string;
  title: string;
  summary: string;
  path: string;
}
export interface IHighlightedPostsItems extends Array<IHighlightedPostsItem> {}

export interface IHighlightedPostsProps {
  posts: IHighlightedPostsItem[];
}

export interface ICreateTeamProps {
  className?: string;
  image: string;
  title: string;
  subTitle: string;
  engage: {
    path: string;
    btnColor: string;
    label: string;
  };
}

export interface IEngageProps {
  title: string;
  description: string;
  image: any;
  more: {
    url: string;
    title: string;
  };
}

export interface IFaqItem {
  title: string;
  text: string;
}
export interface IFaqItems extends Array<IFaqItem> {}

export interface IStarterProps {
  image: string;
  title: string;
  subTitle: string;
  engage: {
    path: string;
    btnColor: string;
    label: string;
  };
}
