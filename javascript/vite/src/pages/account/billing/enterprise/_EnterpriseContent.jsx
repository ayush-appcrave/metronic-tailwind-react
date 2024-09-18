import { MiscHelp } from '@/partials/misc';
import { EnterpriseBillingInvoicing, EnterpriseCompanyProfile, EnterpriseLatestPayment, EnterpriseNextPayment, EnterpriseUpgrade } from '.';
import { BasicPaymentMethods } from '../basic';
const EnterpriseContent = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-2">
        <EnterpriseUpgrade />
      </div>
      <div className="col-span-2">
        <EnterpriseCompanyProfile />
      </div>

      <div className="col-span-2 lg:col-span-1 flex">
        <EnterpriseLatestPayment />
      </div>
      <div className="col-span-2 lg:col-span-1 flex">
        <EnterpriseNextPayment />
      </div>

      <div className="col-span-2 lg:col-span-1 flex">
        <BasicPaymentMethods icon="credit-cart" />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <EnterpriseBillingInvoicing />
      </div>

      <div className="col-span-2">
        <MiscHelp />
      </div>
    </div>;
};
export { EnterpriseContent };