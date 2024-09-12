import { MiscFaq, MiscHelp } from "@/partials/misc";

const AllowedIPAddressesContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      {/* {{ theme.page('account/security/allowed-ip-addresses/_ip-addresses') }} */}

      <MiscFaq />
      <MiscHelp />
    </div>
  );
};

export { AllowedIPAddressesContent };
