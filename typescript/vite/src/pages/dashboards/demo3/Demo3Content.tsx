import { BlockList, ReportSettings } from '@/pages/account/security/privacy-settings';
import { Integrations } from './blocks';

const Demo3Content = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-1">
            <ReportSettings className="h-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
          <div className="lg:col-span-2">
            <Integrations />
          </div>

          <div className="lg:col-span-1">
            <BlockList
              className="h-full"
              text="Users on the block list are unable to send chat requests or messages to you anymore, ever, or again"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Demo3Content };
