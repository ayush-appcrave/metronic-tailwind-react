import { KeenIcon } from '@/components';
import { Avatars } from '@/partials/common';

import { IDefaultProjectsItem, IDefaultProjectsItems } from './interfaces';
import { Link } from 'react-router-dom';
import { DropdownCrud1, DropdownCrudItem1 } from '@/partials/dropdowns/general';

const DefaultProjects = () => {
  const items: IDefaultProjectsItems = [
    {
      name: 'Acme software development',
      team: {
        group: [{ filename: '300-4.png' }, { filename: '300-1.png' }, { filename: '300-2.png' }],
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
          { filename: '300-1.png' },
          { filename: '300-2.png' },
          {
            fallback: 'M',
            variant: 'text-danger-inverse ring-danger-light bg-danger'
          }
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
        group: [{ filename: '300-20.png' }, { filename: '300-7.png' }],
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
        group: [{ filename: '300-6.png' }, { filename: '300-23.png' }, { filename: '300-12.png' }],
        more: {
          number: 1,
          variant: 'text-primary-inverse ring-primary-light bg-primary'
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
          { filename: '300-2.png' },
          { filename: '300-15.png' },
          { filename: '300-18.png' }
        ],
        more: {
          number: 2,
          variant: 'text-success-inverse ring-success-light bg-success'
        }
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
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-primary">
            {item.name}
          </a>
        </td>

        <td>
          <div className={`progress ${item.progress.variant}`}>
            <div className="progress-bar" style={{ width: `${item.progress.value}%` }}></div>
          </div>
        </td>

        <td>
          <div className="flex justify-end shrink-0">
            <Avatars group={item.team.group} more={item.team.more} />
          </div>
        </td>

        <td className="text-sm font-medium text-gray-700">{item.dueDate}</td>

        <td className="text-left">
          <div className="menu" data-menu="true">
            <div
              className="menu-item"
              data-menu-item-trigger="click"
              data-menu-item-toggle="dropdown"
              data-menu-item-placement="bottom-end"
            >
              <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                <KeenIcon icon="dots-vertical" />
              </button>

              <DropdownCrudItem1 />
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
            <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </button>

            <DropdownCrud1 />
          </div>
        </div>
      </div>

      <div className="card-table scrollable-x-auto">
        <table className="table text-right">
          <thead>
            <tr>
              <th className="text-left min-w-52">Project Name</th>
              <th className="min-w-40">Progress</th>
              <th className="min-w-32">People</th>
              <th className="min-w-32">Due Date</th>
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
        <Link to="/public-profile/projects/3-columns" className="btn btn-link">All Projects</Link>
      </div>
    </div>
  );
};

export { DefaultProjects };
