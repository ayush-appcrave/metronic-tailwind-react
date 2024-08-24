import {
  LightSidebarChannelStats,
  LightSidebarEarningsChart,
  LightSidebarEntryCallout,
  LightSidebarHighlights,
  LightSidebarTeamMeeting
} from ".";

const LightSidebarContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <LightSidebarChannelStats />
          </div>  
        </div>

        <div className="lg:col-span-2">
          <LightSidebarEntryCallout className="h-full" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <LightSidebarHighlights limit={3} />
        </div>

        <div className="lg:col-span-2">
          <LightSidebarEarningsChart />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <LightSidebarTeamMeeting />
        </div>

        <div className="lg:col-span-2">
          {/* {{ theme.page('_teams') }} */}
        </div>
      </div>
    </div>
  );
};

export { LightSidebarContent };
