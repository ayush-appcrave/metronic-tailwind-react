/* eslint-disable prettier/prettier */
import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { DataGrid, KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';

import { CurrentSessionsData, ICurrentSessionsData } from '.';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';


const CurrentSessions = () => {
  const columns = useMemo<ColumnDef<ICurrentSessionsData>[]>(
    () => [
      {
        accessorFn: (row) => row.user,
        id: 'user',
        header: () => 'Person',
        enableSorting: true,
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <div className="shrink-0">
              <img
                src={toAbsoluteUrl(`/media/avatars/${info.row.original.user.avatar}`)}
                className="h-9 rounded-full"
                alt=""
              />
            </div>
            <a className="leading-none font-semibold text-gray-900 hover:text-primary" href="#">
              {info.row.original.user.name}
            </a>
          </div>
        ),
        meta: {
          className: 'min-w-[300px]'
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
        cell: (info) => info.getValue(),
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
            <img
              src={toAbsoluteUrl(`/media/flags/${info.row.original.location.flag}`)}
              className="h-4 rounded-full"
              alt=""
            />
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

  const data: ICurrentSessionsData[] = useMemo(() => CurrentSessionsData, []);

  return (
    <div className="card card-grid min-w-full">
      <div className="card-header py-5 flex-wrap">
        <h3 className="card-title">Current Sessions</h3>

        <div className="flex gap-5">
          <label className="switch switch-sm">
            <span className="switch-label">
              Only Active Users
            </span>
            <input name="check" type="checkbox" value="1" readOnly />
          </label>
          <div className="flex gap-3">
            <Select defaultValue="1">
              <SelectTrigger className="min-w-32" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="min-w-32">
                <SelectItem value="1">All Browsers</SelectItem>
                <SelectItem value="2">Chrome</SelectItem>
                <SelectItem value="3">Firefox</SelectItem> 
                <SelectItem value="4">Edge</SelectItem> 
                <SelectItem value="5">Safari</SelectItem> 
                <SelectItem value="6">Brave</SelectItem> 
              </SelectContent>
            </Select>  

            <Select defaultValue="1">
              <SelectTrigger className="min-w-32" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="min-w-32">
                <SelectItem value="1">All Locations</SelectItem>
                <SelectItem value="2">London</SelectItem>
                <SelectItem value="3">USA</SelectItem> 
                <SelectItem value="4">Japan</SelectItem> 
                <SelectItem value="5">Malaysia</SelectItem>  
              </SelectContent>
            </Select>   
          </div>
        </div>
      </div>

      <div className="card-body">
        <DataGrid 
          columns={columns} 
          data={data} 
          rowSelect={true} 
          pagination={{ size: 10 }}
          sorting={[{ id: 'user', desc: false }]} 
        />
      </div>
    </div>
  );
};

export { CurrentSessions };
