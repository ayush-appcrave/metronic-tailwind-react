import { MiscFaq, MiscHelp2, MiscStarter } from "@/partials/misc";
import { toAbsoluteUrl } from "@/utils";

const TeamsStarterContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <MiscStarter
        image={
          <>
            <img src={toAbsoluteUrl('/media/illustrations/32.svg')} className="dark:hidden max-h-[230px]" alt="" />
            ||
            <img src={toAbsoluteUrl('/media/illustrations/32-dark.svg')} className="light:hidden max-h-[230px]" alt="" />
          </>
        }
        title='Swift Setup for New Teams'
        subTitle={
          <>
            Enhance team formation and management with easy-to-use tools for communication,
            <br />
            task organization, and progress tracking, all in one place.
          </>
        }
        engage={{
          path: '/public-profile/teams',
          label: 'Create New Team',
          btnColor: 'btn-primary'
        }}
      />

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export { TeamsStarterContent };
