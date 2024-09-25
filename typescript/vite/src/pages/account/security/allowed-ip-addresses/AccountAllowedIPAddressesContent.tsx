import { MiscFaq, MiscHelp } from '@/partials/misc';
import { IpAddresses } from './blocks/invoicing';

const AccountAllowedIPAddressesContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <IpAddresses />

      <MiscFaq />

      <MiscHelp />
    </div>
  );
};

export { AccountAllowedIPAddressesContent };
