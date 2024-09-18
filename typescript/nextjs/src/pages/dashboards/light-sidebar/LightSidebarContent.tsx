import { Helmet } from 'react-helmet';
import { Fragment } from 'react';
import { Container } from '@/components/container';
import { useMenu } from '@/providers';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/layouts/demo1/toolbar';
import Link from 'next/link';
import {
  ChannelStatsBlock,
  EarningsChartBlock,
  EntryCalloutBlock,
  HighlightsBlock,
  TeamMeetingBlock
} from './';

const LightSidebarContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
            <ChannelStatsBlock />
          </div>
        </div>

        <div className="lg:col-span-2">
          <EntryCalloutBlock className="h-full" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <HighlightsBlock limit={3} />
        </div>

        <div className="lg:col-span-2">
          <EarningsChartBlock />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="lg:col-span-1">
          <TeamMeetingBlock />
        </div>

        <div className="lg:col-span-2">{/* {{ theme.page('_teams') }} */}</div>
      </div>
    </div>
  );
};

export default  LightSidebarContent ;
