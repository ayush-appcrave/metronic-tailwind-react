

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
  image: React.ReactNode;
  title: string;
  subTitle: React.ReactNode;
  engage: {
    path: string;
    btnColor: string;
    label: string;
  };
}
