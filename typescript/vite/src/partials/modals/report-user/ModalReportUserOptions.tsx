import { KeenIcon } from '@/components'; 
import React from 'react'; 
import { Link } from 'react-router-dom'; 

const ModalReportUserOptions = () => {
  const items = [
    {
      name: 'Impersonation',
      description: 'It looks like this profile might be impersonating someone else'
    },
    {
      name: 'Off bumble behavior',
      description: 'This person has engaged in behavior that is abusive, bullying'
    },
    {
      name: 'Something else',
      description: 'None of the reasons listed above are suitable'
    }
  ];

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="text-2sm text-gray-900 font-semibold">Let us know why you’re reporing this person</div>
      <div className="flex flex-col gap-3.5">
        {items.map((item, index) => (
          <label className="form-label flex items-center gap-2.5">
            <input className="radio radio-sm" name="report-option" type="radio" value="{{ loop.index }}" checked/>
            <div className="flex flex-col gap-0.5">
              <div className="text-sm font-semibold text-gray-900">${item.name }</div>
              <div className="text-2sm font-medium text-gray-600">${item.description }</div>
            </div>
          </label>	
        ))}
      </div>
    </div>
  );
};

export { ModalReportUserOptions };