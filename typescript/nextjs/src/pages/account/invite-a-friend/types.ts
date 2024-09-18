interface IMember {
  avatar: string;
  name: string;
  tasks: string;
}

interface ILocation {
  name: string;
  flag: string;
}

interface IStatus {
  label: string;
  variant: string;
}

export interface IInvitesItem {
  member: IMember;
  location: ILocation;
  status: IStatus;
  recentlyActivity: string;
}
export interface IInvitesItems extends Array<IInvitesItem> {}

export interface IInvitesProps {
  title?: string;
}
