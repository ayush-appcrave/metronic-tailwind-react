import { MiscFaq, MiscHelp } from '@/partials/misc';
import { CurrentSessions } from './blocks/current-sessions';

const AccountCurrentSessionsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <CurrentSessions />

      <MiscFaq />

      <MiscHelp />
    </div>
  );
};

export { AccountCurrentSessionsContent };
