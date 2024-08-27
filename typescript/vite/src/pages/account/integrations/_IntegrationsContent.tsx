import { Faq, Help2, Starter } from "@/partials/misc";
import { toAbsoluteUrl } from "@/utils";
import { Integrations } from ".";

const IntegrationsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <Integrations />

      <Starter
        image={
          <>
            <img src={toAbsoluteUrl('/media/illustrations/28.svg')} className="dark:hidden max-h-[230px]" alt="" />
            ||
            <img src={toAbsoluteUrl('/media/illustrations/28-dark.svg')} className="light:hidden max-h-[230px]" alt="" />
          </>
        }
        title='Add New Integration'
        subTitle={
          <>
            Explore New Integration: Expand Your Toolkit with Cutting-Edge,
            <br />
            User-Friendly Solutions Tailored for Efficient and Innovative Project Management.
          </>
        }
        engage={{
          path: '/network/user-cards/mini-cards',
          label: 'Start Now',
          btnColor: 'btn-primary'
        }}
      />

      <Faq />

      <Help2 />
    </div>
  );
};

export { IntegrationsContent };
