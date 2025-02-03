export const companyTypes = {
  CompanyType: {
    1: 'Client',
    2: 'Vendor',
  },
  ModeOfOperations: {
    1: 'Contract-to-Contract (C2C)',
    2: 'Contract-to-Hire (C2H)',
    3: 'Full-Time Employment (FTE)',
  },
};
export const companyStatus = {
  1: 'Request Pending',
  2: 'Introductory Connect',
  3: 'Not Interested',
  4: 'In Pipeline / In Discussion',
  5: 'NDA Received',
  6: 'NDA Signed',
  7: 'MSA Received',
  8: 'MSA Signed',
  9: 'Onboarded',
};

export const companyDocumentType = {
  1: 'Non-Disclosure Agreement (NDA)',
  2: 'Master Service Agreement (MSA)',
  5: 'Other',
};

export const companyStatusColors = {
  1: 'warning', // Request Pending
  2: 'info', // Introductory Connect
  3: 'danger', // Not Interested
  4: 'primary', // In Pipeline
  5: 'info', // NDA Received
  6: 'primary', // NDA Signed
  7: 'info', // MSA Received
  8: 'primary', // MSA Signed
  9: 'success', // Onboarded
};
