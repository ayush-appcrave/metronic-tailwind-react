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
  series: any[];
  labels: string[];
  colors: string[];
  fill: {
    colors: string[];
  };
  chart: {
    type: 'donut';
  };
  stroke: {
    show: boolean;
    width: number;
    colors: string | string[];
  };
  dataLabels: {
    enabled: boolean;
  };
  plotOptions: {
    pie: {
      expandOnClick: boolean;
    };
  };
  legend: {
    offsetY: number;
    offsetX: number;
    fontSize: string;
    fontWeight: string;
    itemMargin: {
      vertical: number;
    };
    labels: {
      colors: string;
      useSeriesColors: boolean;
    };
    markers: {
      width: number;
      height: number;
    };
  };
  responsive: {
    breakpoint: number;
    options: {
      chart: {
        width: number;
      };
      legend: {
        position: string;
      };
    };
  }[];
}

export interface IApexMediaUploadsOptions {
  series: {
    name: string;
    data: number[];
  }[];
  chart: {
    height: number;
    type: 'area';
    toolbar: {
      show: boolean;
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  legend: {
    show: boolean;
  };
  stroke: {
    curve: 'smooth';
    show: boolean;
    width: number;
    colors: string[];
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
        colors: string;
        fontSize: string;
      };
    };
    crosshairs: {
      position: string;
      stroke: {
        color: string;
        width: number;
        dashArray: number;
      };
    };
    tooltip: {
      enabled: boolean;
      formatter?: undefined;
      offsetY: number;
      style: {
        fontSize: string;
      };
    };
  };
  yaxis: {
    min: number;
    max: number;
    tickAmount: number;
    axisTicks: {
      show: boolean;
    };
    labels: {
      style: {
        colors: string;
        fontSize: string;
      };
      formatter: (value: number) => string;
    };
  };
  tooltip: {
    enabled: boolean;
    custom: ({ series, seriesIndex, dataPointIndex, w }: any) => string;
  };
  markers: {
    size: number;
    colors: string;
    strokeColors: string;
    strokeWidth: number;
    strokeOpacity: number;
    strokeDashArray: number;
    fillOpacity: number;
    shape: ApexMarkerShape;
    radius: number;
    showNullDataPoints: boolean;
    hover: {
      size: number;
      sizeOffset: number;
    };
  };
  fill: {
    gradient: {
      enabled: boolean;
      opacityFrom: number;
      opacityTo: number;
    };
  };
  grid: {
    borderColor: string;
    strokeDashArray: number;
    clipMarkers: boolean;
    yaxis: {
      lines: {
        show: boolean;
      };
    };
    xaxis: {
      lines: {
        show: boolean;
      };
    };
  };
}
