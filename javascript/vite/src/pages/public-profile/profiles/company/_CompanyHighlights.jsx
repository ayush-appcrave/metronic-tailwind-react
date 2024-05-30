const CompanyHighlights = () => {
  const items = [{
    label: 'Locations:',
    info: '79',
    type: 1
  }, {
    label: 'Founded:',
    info: '2011',
    type: 2
  }, {
    label: 'Status:',
    info: '<span class="badge badge-sm badge-success badge-outline">Subscribed</span>'
  }, {
    label: 'Area:',
    info: 'Worldwide'
  }, {
    label: 'CEO:',
    info: '<a href="#" class="text-primary hover:text-primary-active">Luis von Ahn</a>'
  }, {
    label: 'Sector:',
    info: 'Online Education'
  }];
  const renderItems = item => {
    return <>
        <tr>
          <td className="text-sm font-medium text-gray-500 pb-3 pe-4 lg:pe-10">{item.label}</td>
          <td className="text-sm font-medium text-gray-800 pb-3">
            {item.type === 1 ? <span>{item.info}</span> : item.type === 2 ? <span>{item.info}</span> : <span dangerouslySetInnerHTML={{
            __html: item.info
          }}></span>}
          </td>
        </tr>
      </>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Highlights</h3>
      </div>

      <div className="card-body pt-3.5 pb-3.5">
        <table className="table-auto">
          <tbody>
            {items.map((item, index) => {
            return renderItems(item);
          })}
          </tbody>
        </table>
      </div>
    </div>;
};
export { CompanyHighlights };