export interface IGetStartedContentItem {
  icon: string;
  title: string;
  desc: string;
  path: string;
}
export interface IGetStartedContentItems extends Array<IGetStartedContentItem> {}

export interface IGetStartedOptionsProps {
  items: IGetStartedContentItem[];
  dropdown: boolean;
}
