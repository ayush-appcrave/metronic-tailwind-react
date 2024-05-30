const DefaultAbout = () => {
  const tables = [{
    status: 'Age',
    info: '32'
  }, {
    status: 'City:',
    info: 'Amsterdam'
  }, {
    status: 'State:',
    info: 'North Holland'
  }, {
    status: 'Country:',
    info: 'Netherlands'
  }, {
    status: 'Postcode:',
    info: '1092 NL'
  }, {
    status: 'Phone:',
    info: '+31 6 1234 56 78'
  }, {
    status: 'Email:',
    info: 'jenny@ktstudio.com'
  }];
  const renderTable = table => {
    return <tr>
        <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">{table.status}</td>
        <td className="text-sm font-medium text-gray-800 pb-3.5">
          <a href="#" className="text-gray-800 hover:text-primary-active">
            {table.info}
          </a>
        </td>
      </tr>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">About</h3>
      </div>
      <div className="card-body pt-4 pb-3">
        <table className="table-auto">
          <tbody>
            {tables.map((table, index) => {
            return renderTable(table);
          })}
          </tbody>
        </table>
      </div>
    </div>;
};
export { DefaultAbout };