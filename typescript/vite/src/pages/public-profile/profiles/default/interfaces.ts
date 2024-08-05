export interface IDefaultCommunityBadgesItem {
  stroke: string;
  fill: string;
  icon: string;
  iconColor: string;
}
export interface IDefaultCommunityBadgesItems extends Array<IDefaultCommunityBadgesItem> {}

export interface IDefaultCommunityBadgesProps {
  title: string;
}

export interface IDefaultUnlockPartnershipsProps {
  url: string;
}

export interface IDefaultAboutTable {
  status: string;
  info: string;
}
export interface IDefaultAboutTables extends Array<IDefaultAboutTable> {}

export interface IDefaultTagsProps {
  title: string;
  className?: string;
}

export interface IDefaultTagsItem {
  label: string;
}
export interface IDefaultTagsItems extends Array<IDefaultTagsItem> {}

export interface IDefaultWorkExperienceProps {
  url: string;
}

export interface IDefaultWorkExperienceItem {
  image?: string;
  title?: string;
  desc?: string;
  date?: string;
  heading?: string;
}
export interface IDefaultWorkExperienceItems extends Array<IDefaultWorkExperienceItem> {}

export interface IDefaultConnectionsProps {
  title: string;
  url: string;
}
export interface IDefaultConnectionsItem {
  avatar: string;
  name: string;
  connections: number;
  connected: boolean;
}
export interface IDefaultConnectionsItems extends Array<IDefaultConnectionsItem> {}

export interface IDefaultContributionsProps {
  title: string;
}

export interface IDefaultRecentUploadsProps {
  title: string;
  url: string;
}

export interface IDefaultProjectsItem {
  name: string;
  team: {
    group: Array<{ filename?: string, fallback?: string, variant?: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
  dueDate: string;
  progress: {
    variant: string;
    value: number;
  };
}
export interface IDefaultProjectsItems extends Array<IDefaultProjectsItem> {}

export interface IDefaultRecentUploadsItem {
  image: string;
  desc: string;
  date: string;
}
export interface IDefaultRecentUploadsItems extends Array<IDefaultRecentUploadsItem> {}

export interface IApexContributionsOptions {
  colors: string[];
  series: number[];
  labels: string[];
  dataLabels: {
    enabled: boolean;
  };
}

type CurveType = 'smooth' | 'straight' | 'stepline' | 'monotoneCubic';

export interface IApexMediaUploadsOptions {
  chart: {
    toolbar: {
      show: boolean;
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  markers: {
    size: number;
    colors: string;
    strokeColor: string;
    hover: {
      sizeOffset: number;
    };
  };
  stroke: {
    width: number;
    curve: CurveType;
    colors: string[];
  };
  fill: {
    type: string;
    gradient: {
      shadeIntensity: number;
      opacityFrom: number;
      opacityTo: number;
    };
  };
  xaxis: {
    categories: string[];
    axisBorder: {
      show: boolean;
    };
    axisTicks: {
      show: boolean;
    };
    labels: {
      style: {
        colors: string[];
        fontSize: string;
      };
    };
  };
  yaxis: {
    labels: {
      style: {
        colors: string[];
        fontSize: string;
      };
    };
  };
  series: Array<{
    name: string;
    data: number[];
  }>;
  grid: {
    borderColor: string;
    strokeDashArray: number;
  };
}
