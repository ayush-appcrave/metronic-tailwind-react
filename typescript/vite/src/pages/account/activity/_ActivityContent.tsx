import { Activity } from '@/pages/public-profile/activity';
import { MiscEngage } from '@/partials/misc';
import { toAbsoluteUrl } from '@/utils';

const ActivityContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Activity />

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
        <MiscEngage
          title="Contact Support"
          description="Need assistance? Contact our support team for prompt, personalized help your queries & concerns."
          image={
            <>
              <img
                src={toAbsoluteUrl('/media/illustrations/31.svg')}
                className="dark:hidden max-h-[150px]"
                alt="image"
              />
              <img
                src={toAbsoluteUrl('media/illustrations/31-dark.svg')}
                className="light:hidden max-h-[150px]"
                alt="image"
              />
            </>
          }
          more={{
            title: 'Contact Support',
            url: ''
          }}
        />

        <MiscEngage
          title="Questions"
          description="Visit our Help Center for detailed assistance on billing, payments, and subscriptions."
          image={
            <>
              <img
                src={toAbsoluteUrl('/media/illustrations/29.svg')}
                className="dark:hidden max-h-[150px]"
                alt="image"
              />
              <img
                src={toAbsoluteUrl('/media/illustrations/29-dark.svg')}
                className="light:hidden max-h-[150px]"
                alt="image"
              />
            </>
          }
          more={{
            title: 'Go to Help Center',
            url: ''
          }}
        />
      </div>
    </div>
  );
};

export { ActivityContent };
