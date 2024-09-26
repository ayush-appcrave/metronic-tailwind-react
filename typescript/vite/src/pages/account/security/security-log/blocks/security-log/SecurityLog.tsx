/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { DataGrid, KeenIcon } from '@/components';
// import { toAbsoluteUrl } from '@/utils';
import { ColumnDef } from '@tanstack/react-table';

import { SecurityLogData, ISecurityLogData } from '.';

const SecurityLog = () => {
  const columns = useMemo<ColumnDef<ISecurityLogData>[]>(
    () => [
      {
        accessorFn: (row) => row.user,
        id: 'user',
        header: () => 'Timestamp',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              {/* <img
                src={toAbsoluteUrl({`/media/avatars/${info.row.original.user.avatar}`})}
                className="h-9 rounded-full"
                alt=""
              /> */}
            </div>
            <a className="leading-none font-semibold text-gray-900 hover:text-primary" href="#">
              {info.row.original.user.name}
            </a>
          </div>
        ),
        meta: {
          className: 'min-w-[200px]'
        },
      },
      {
        accessorFn: (row) => row.browser,
        id: 'browser',
        header: () => 'Browser',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-2">
            <KeenIcon icon={info.row.original.browser.icon} className='text-gray-700 text-lg' />
            <span className="text-gray-700">{info.row.original.browser.name}</span>
          </div>
        ),
        meta: {
          className: 'min-w-[240px]',
        },
      },
      {
        accessorFn: (row) => row.ipAddress,
        id: 'ipAddress',
        header: () => 'IP Address',
        enableSorting: true,
        meta: {
          className: 'w-[240px]',
        },
      },
      {
        accessorFn: (row) => row.location,
        id: 'location',
        header: () => 'Location',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-1.5">
            {/* <img
              src={toAbsoluteUrl({`/media/flags/${info.row.original.location.flag}`})}
              className="h-4 rounded-full"
              alt=""
            /> */}
            <span className="leading-none text-gray-700">{info.row.original.location.name}</span>
          </div>
        ),
        meta: {
          className: 'w-[200px]',
        },
      },
      {
        id: 'click',
        header: () => '',
        enableSorting: false,
        cell: ({ row }) => (
          <button 
            className="btn btn-icon btn-light btn-clear btn-sm" 
            onClick={() => alert(`Clicked on action button for row ${row.original.user.name}`)}
          >
            <KeenIcon icon="dots-vertical" />
          </button>
        ),
        meta: {
          className: 'w-[60px]',
        },
      },
    ],
    []
  );

  const data: ISecurityLogData[] = useMemo(() => SecurityLogData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Security Log</h3>
        <label className="switch switch-sm">
          <input name="check" type="checkbox" value="1" defaultChecked className="order-2" readOnly />
          <span className="switch-label order-1">
            Push Alerts
          </span>
        </label>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          paginationSize={10}
          initialSorting={[{ id: 'security-log', desc: false }]} 
          saveState={true} 
          saveStateId='security-log-grid'
        />
      </div>
    </div>
  );
};

export { SecurityLog };
