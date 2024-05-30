import { KeenIcon } from '@/components';
import { Avatars } from '@/partials/common';

import { IDefaultProjectsItem, IDefaultProjectsItems } from './interfaces';

const DefaultProjects = () => {
  const items: IDefaultProjectsItems = [
    {
      name: 'Acme software development',
      team: {
        group: [{ filename: '300-9.png' }, { filename: '300-2.png' }, { filename: '300-3.png' }],
        more: {
          number: 3,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      },
      dueDate: '24 Aug, 2024',
      progress: {
        variant: 'progress-primary',
        value: 60
      }
    },
    {
      name: 'Strategic Partnership Deal',
      team: {
        group: [
          { filename: '300-11.png' },
          { filename: '300-13.png' },
          { filename: '300-21.png' },
          { filename: '300-1.png' }
        ]
      },
      dueDate: '10 Sep, 2024',
      progress: {
        variant: '',
        value: 100
      }
    },
    {
      name: 'Client Onboarding',
      team: {
        group: [{ filename: '300-2.png' }, { filename: '300-7.png' }, { filename: '300-9.png' }],
        more: {
          number: 1,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      },
      dueDate: '19 Sep, 2024',
      progress: {
        variant: 'progress-primary',
        value: 20
      }
    },
    {
      name: 'Widget Supply Agreement',
      team: {
        group: [{ filename: '300-15.png' }, { filename: '300-10.png' }, { filename: '300-30.png' }],
        more: {
          number: 4,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
      },
      dueDate: '5 May, 2024',
      progress: {
        variant: 'progress-success',
        value: 100
      }
    },
    {
      name: 'Project X Redesign',
      team: {
        group: [
          { filename: '300-1.png' },
          { filename: '300-4.png' },
          { filename: '300-3.png' },
          { filename: '300-14.png' }
        ]
      },
      dueDate: '1 Feb, 2025',
      progress: {
        variant: 'progress-primary',
        value: 80
      }
    }
  ];

  const renderItem = (item: IDefaultProjectsItem, index: number) => {
    return (
      <tr key={index}>
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

        <td className="flex justify-end shrink-0">
          <Avatars group={item.team.group} more={item.team.more} />
        </td>

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
              return renderItem(item, index);
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
