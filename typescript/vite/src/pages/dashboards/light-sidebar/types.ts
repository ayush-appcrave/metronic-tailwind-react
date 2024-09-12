export interface IChannelStatsItem {
  logo: string;
  logoDark?: string;
  info: string;
  desc: string;
  path: string;
}
export interface IChannelStatsItems extends Array<IChannelStatsItem> {}

export interface IEntryCalloutProps {
  className: string;
}

export interface IHighlightsRow {
  icon: string;
  text: string;
  total: number;
  stats: number;
  increase: boolean;
}

export interface IHighlightsRows extends Array<IHighlightsRow> {}

export interface IHighlightsItem {
  badgeColor: string;
  lebel: string;
}

export interface IHighlightsItems extends Array<IHighlightsItem> {}

export interface IHighlightsProps {
  limit?: number;
}

export interface IApexEarningsChartOptions {
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
    colors: string | string[];
  };
  xaxis: {
    categories: string[];
    axisBorder: {
      show: boolean;
    };
    maxTicks: number;
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
      formatter: (defaultValue: number) => string;
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
    discrete: any[];
    shape: string;
    radius: number;
    offsetX: number;
    offsetY: number;
    onClick?: undefined;
    onDblClick?: undefined;
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
