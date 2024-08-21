import { Faq, Help } from "@/partials/misc";

const AllowedIPAddressesContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('account/security/allowed-ip-addresses/_ip-addresses') }} */}

      <Faq />
      <Help />
    </div>
  );
};

export { AllowedIPAddressesContent };
