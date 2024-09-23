import { MiscFaq, MiscHelp2 } from '@/partials/misc';
import { InvitePeople, InviteWithLink } from './blocks';

const TeamMembersContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_members') }} */}

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <InvitePeople />

        <InviteWithLink />
      </div>

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export { TeamMembersContent };
