import { useMemo } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { UsersData } from './UsersData';
import { KeenIcon, DataGrid } from '@/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface IUsersData {
  user: {
    avatar: string;
    name: string;
    email: string;
  };
  labels: string[];
  license: {
    type: string;
    left: string;
  };
  payment: string;
  enforce: boolean;
}

const EnforceSwitch = ({ enforce }: { enforce: boolean }) => {
  return (
    <label className="switch switch-sm">
      <input type="checkbox" checked={enforce} value="1" readOnly />
    </label>
  );
};

const Users = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row: IUsersData) => row.user,
        id: 'user',
        header: () => <span className="text-gray-700 font-normal">Subscriber</span>,
        enableSorting: true,
        cell: (info: any) => (
          <div className="flex items-center gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/avatars/${info.row.original.user.avatar}`)}
              className="size-7 rounded-full shrink-0"
              alt=""
            />
            <div className="flex flex-col">
              <a className="font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                {info.row.original.user.name}
              </a>
              <a className="text-2sm text-gray-700 hover:text-primary-active" href="#">
                {info.row.original.user.email}
              </a>
            </div>
          </div>
        ),
        meta: {
          className: 'min-w-[300px]'
        }
      },
      {
        accessorFn: (row: IUsersData) => row.labels,
        id: 'labels',
        header: () => <span className="text-gray-700 font-normal">Products</span>,
        enableSorting: true,
        cell: (info: any) => (
          <div className="flex gap-1.5">
            {info.row.original.labels.map((label: string, index: number) => (
              <span key={index} className="badge badge-sm">
                {label}
              </span>
            ))}
          </div>
        ),
        meta: {
          className: 'min-w-[200px]'
        }
      },
      {
        accessorFn: (row: IUsersData) => row.license,
        id: 'license',
        header: () => <span className="text-gray-700 font-normal">License</span>,
        enableSorting: true,
        cell: (info: any) => (
          <div className="flex flex-col">
            <span className="text-sm text-gray-800 font-medium">
              {info.row.original.license.type}
            </span>
            <span className="text-xs text-gray-600">{info.row.original.license.left}</span>
          </div>
        ),
        meta: {
          className: 'min-w-[175px]'
        }
      },
      {
        accessorFn: (row: IUsersData) => row.payment,
        id: 'payment',
        header: () => <span className="text-gray-700 font-normal">Latest Payment</span>,
        enableSorting: true,
        cell: (info: any) => info.row.original.payment,
        meta: {
          className: 'min-w-[175px]',
          cellClassName: 'text-gray-800 font-medium'
        }
      },
      {
        accessorFn: (row: IUsersData) => row.enforce,
        id: 'enforce',
        header: () => <span className="text-gray-700 font-normal">Enforce 2FA</span>,
        enableSorting: true,
        cell: (info: any) => <EnforceSwitch enforce={info.row.original.enforce} />,
        meta: {
          className: 'min-w-[137px]'
        }
      },
      {
        id: 'actions',
        header: () => <span className="text-gray-700 font-normal">Invoices</span>,
        enableSorting: true,
        cell: () => <button className="btn btn-link">Download</button>,
        meta: {
          className: 'w-28'
        }
      }
    ],
    []
  );

  const data: IUsersData[] = useMemo(() => UsersData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header flex-wrap gap-2">
        <h3 className="card-title font-medium text-sm">Showing 10 of 49,053 users</h3>

        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input placeholder="Search users" type="text" value="" readOnly />
            </label>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Select defaultValue="active">
              <SelectTrigger className="w-28" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="w-32">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="latest">
              <SelectTrigger className="w-28" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="w-32">
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="older">Older</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>

            <button className="btn btn-sm btn-outline btn-primary">
              <KeenIcon icon="setting-4" /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <DataGrid
          columns={columns}
          data={data}
          rowSelect={true}
          pagination={{ size: 5 }}
          sorting={[{ id: 'user', desc: false }]}
        />
      </div>
    </div>
  );
};

export { Users };
