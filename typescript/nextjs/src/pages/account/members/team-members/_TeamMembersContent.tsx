import { MiscFaq, MiscHelp2 } from '@/partials/misc';
import { TeamMembersInvitePeople, TeamMembersInviteWithLink } from '.';

const TeamMembersContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('_members') }} */}

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <TeamMembersInvitePeople />

        <TeamMembersInviteWithLink />
      </div>

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export default  TeamMembersContent ;
