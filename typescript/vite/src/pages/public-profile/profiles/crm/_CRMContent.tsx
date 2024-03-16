import { DefaultConnections, DefaultTags } from '../default';
import {
  CRMActivity,
  CRMApiCredentials,
  CRMAttributes,
  CRMDeals,
  CRMGeneralInfo,
  CRMRecentInvoices
} from '.';

const CRMContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <CRMGeneralInfo />
          <CRMAttributes url="#" />
          <CRMApiCredentials url="#" />
          <DefaultTags title="Skills" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex flex-col gap-5 lg:gap-7.5">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            <CRMDeals />
            <CRMActivity url="#" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
              <DefaultConnections title="Connections" url="#" />
              <CRMRecentInvoices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CRMContent };
