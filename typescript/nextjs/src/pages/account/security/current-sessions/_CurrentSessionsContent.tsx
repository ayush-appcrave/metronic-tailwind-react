import { MiscFaq, MiscHelp } from '@/partials/misc';

const CurrentSessionsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_current-sessions') }} */}

      <MiscFaq />
      <MiscHelp />
    </div>
  );
};

export default  CurrentSessionsContent ;
