import { Fragment } from 'react';
import { MiscFaq, MiscHelp2, MiscStarter } from '@/partials/misc';
import { toAbsoluteUrl } from '@/utils';

const AccountMembersStarterContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <MiscStarter
        image={
          <img
            src={toAbsoluteUrl('/media/illustrations/22.svg')}
            className="dark:hidden max-h-[230px]"
            alt=""
          />
        }
        title="New Member Onboarding and Registration"
        subTitle={
          <Fragment>
            A streamlined process to welcome and integrate new members into the team,
            <br />
            ensuring a smooth and efficient start.
          </Fragment>
        }
        engage={{
          path: '/account/home/user-profile',
          label: 'Add New Member',
          btnColor: 'btn-primary'
        }}
      />

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export { AccountMembersStarterContent };
