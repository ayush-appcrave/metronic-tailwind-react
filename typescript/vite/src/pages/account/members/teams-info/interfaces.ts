export interface ITeamInfoConnectedProfilesItem {
  user: {
    name: string;
    tasks: number;
    avatar: string;
  };
  socialLogo: string;
  socialLogoDark?: string;
}
export interface ITeamInfoConnectedProfilesItems extends Array<ITeamInfoConnectedProfilesItem> {}

export interface ITeamInfoItem {
  label: string;
}
export interface ITeamInfoItems extends Array<ITeamInfoItem> {}
