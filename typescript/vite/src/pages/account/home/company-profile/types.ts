export interface ICompanyProfileMembersProps {
  url: string;
}

export interface ICompanyProfileMembersItem {
  avatar: string;
  name: string;
  connections: number;
  label: string;
  joined: string;
  disabled: boolean;
}
export interface ICompanyProfileMembersItems extends Array<ICompanyProfileMembersItem> {}
