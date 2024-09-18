import Link from 'next/link';
import { ICRMAttributesItem, ICRMAttributesItems } from './types';

const CRMAttributes = () => {
  const items: ICRMAttributesItems = [
    { label: 'customer_id:', info: 'CUST567' },
    { label: 'c_name:', info: 'jenny' },
    { label: 'license_id:', info: 'LIC123' },
    { label: 'log_id:', info: 'CUST567' },
    { label: 'resv_code:', info: 'CS345' },
    { label: 'orders_io:', info: 'JENNYTIME ' }
  ];

  const renderItem = (item: ICRMAttributesItem, index: number) => {
    return (
      <tr key={index}>
        <td className="text-sm font-medium text-gray-500 pb-3.5 pe-4 lg:pe-6">{item.label}</td>
        <td className="text-sm font-medium text-gray-800 pb-3">{item.info}</td>
      </tr>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Attributes</h3>
      </div>

      <div className="card-body pt-3.5 pb-1">
        <table className="table-auto">
          <tbody>
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </tbody>
        </table>
      </div>

      <div className="card-footer justify-center">
        <Link to="/network/user-table/store-clients" className="btn btn-link">
          All Attributes
        </Link>
      </div>
    </div>
  );
};

export default  CRMAttributes ;
