import {
  DashboardChannelStatsBlock,
  DashboardEarningsChartBlock,
  DashboardEntryCalloutBlock,
  DashboardHighlightsBlock,
  DashboardTeamMeetingBlock,
  DashboardTeamsBlock
} from './blocks';

const LightSidebarContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <DashboardChannelStatsBlock />
          </div>
        </div>

        <div className="lg:col-span-2">
          <DashboardEntryCalloutBlock className="h-full" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <DashboardHighlightsBlock limit={3} />
        </div>

        <div className="lg:col-span-2">
          <DashboardEarningsChartBlock />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <DashboardTeamMeetingBlock />
        </div>

        <div className="lg:col-span-2">
          <DashboardTeamsBlock />
        </div>
      </div>
    </div>
  );
};

export { LightSidebarContent };
