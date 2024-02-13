import { KeenIcon } from '@/components';

import { IDefaultProjectsItem, IDefaultProjectsItems } from './interfaces';

const DefaultProjects = () => {
  const items: IDefaultProjectsItems = [
    {
      name: 'Acme software development',
      team: partial('common/users', {
        users: [{ filename: '300-9.jpg' }, { filename: '300-2.jpg' }, { filename: '300-3.jpg' }],
        more: {
          number: 3,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }),
      dueDate: '24 Aug, 2024',
      progress: {
        variant: 'progress-primary',
        value: '60'
      }
    },
    {
      name: 'Strategic Partnership Deal',
      team: partial('common/users', {
        users: [
          { filename: '300-11.jpg' },
          { filename: '300-13.jpg' },
          { filename: '300-21.jpg' },
          { filename: '300-1.jpg' }
        ]
      }),
      dueDate: '10 Sep, 2024',
      progress: {
        variant: '',
        value: '100'
      }
    },
    {
      name: 'Client Onboarding',
      team: partial('common/users', {
        users: [{ filename: '300-2.jpg' }, { filename: '300-7.jpg' }, { filename: '300-9.jpg' }],
        more: {
          number: 1,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }),
      dueDate: '19 Sep, 2024',
      progress: {
        variant: 'progress-primary',
        value: '20'
      }
    },
    {
      name: 'Widget Supply Agreement',
      team: partial('common/users', {
        users: [{ filename: '300-15.jpg' }, { filename: '300-10.jpg' }, { filename: '300-30.jpg' }],
        more: {
          number: 4,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      }),
      dueDate: '5 May, 2024',
      progress: {
        variant: 'progress-success',
        value: '100'
      }
    },
    {
      name: 'Project X Redesign',
      team: partial('common/users', {
        users: [
          { filename: '300-1.jpg' },
          { filename: '300-4.jpg' },
          { filename: '300-3.jpg' },
          { filename: '300-14.jpg' }
        ]
      }),
      dueDate: '1 Feb, 2025',
      progress: {
        variant: 'progress-primary',
        value: '80'
      }
    }
  ];

  const renderItem = (item: IDefaultProjectsItem) => {
    return (
      <tr>
        <td className="text-left">
          <a href="#" className="text-sm font-semibold text-gray-800 hover:text-primary">
            {item.name}
          </a>
        </td>

        <td>
          <div className={`progress ${item.progress.variant}`}>
            <div className="progress-bar" style={{ width: `${item.progress.value}%` }}></div>
          </div>
        </td>

        <td className="float-right">{item.team | safe}</td>

        <td className="text-sm font-normal text-gray-700">{item.dueDate}</td>

        <td>
          <div className="menu" data-menu="true">
            <div
              className="menu-item" 
              data-menu-item-trigger="click" 
              data-menu-item-toggle="dropdown" 
              data-menu-item-placement="bottom-end"
            >
              <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
                <KeenIcon icon="dots-vertical" className="!text-xl" />
              </button>

              <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
                Menu content
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Projects</h3>

        <div className="menu" data-menu="true">
          <div
            className="menu-item" 
            data-menu-item-trigger="click" 
            data-menu-item-toggle="dropdown" 
            data-menu-item-placement="bottom-end"
          >
            <button className="btn btn-icon btn-light btn-clear btn-xs menu-toggle">
              <KeenIcon icon="dots-vertical" className="!text-xl" />
            </button>

            <div className="menu-dropdown w-[175px] text-gray-700 px-3 py-3 text-2xs">
              Menu content
            </div>
          </div>
        </div>
      </div>
      <div className="card-table scrollable-x-auto">
        <table className="table table-auto text-right">
          <thead>
            <tr>
              <th className="text-left min-w-[150px]">Project Name</th>
              <th className="min-w-[100px]">Progress</th>
              <th className="min-w-[100px]">People</th>
              <th className="min-w-[110px]">Due Date</th>
              <th className="w-[30px]"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return renderItem(item);
            })}
          </tbody>
        </table>
      </div>
      <div className="card-footer justify-center">
        <a href="#" className="btn btn-link">
          All Projects
        </a>
      </div>
    </div>
  );
};

export { DefaultProjects };
