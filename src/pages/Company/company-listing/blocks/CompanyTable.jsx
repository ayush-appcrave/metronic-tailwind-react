import { DataGrid, DataGridColumnHeader, KeenIcon } from '@/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { companyStatus, companyTypes } from '@/constants/company';
import { StatusColorBadge } from '@/constants/badgeColor';

import axios from 'axios';
import debounce from 'lodash/debounce';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const CompanyTable = ({ type, onStatsUpdate }) => {
  const [companies, setCompanies] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1, totalRecords: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [assignedFilter, setAssignedFilter] = useState('all');
  const [users, setUsers] = useState([]);

  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setStatusFilter('all');
  }, 500);
  useEffect(() => {
    fetchCompanies();
  }, [statusFilter, searchTerm, currentPage, type, assignedFilter]);

  useEffect(() => {
    const onboardedCompanies = companies.filter((company) => company.CompanyStatus === 9).length;
    onStatsUpdate(pagination.totalRecords, onboardedCompanies);
  }, [companies, pagination.totalRecords]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  const fetchCompanies = async () => {
    try {
      setIsLoading(true);
      const companyType = type === 'Client' ? 1 : 2;
      const response = await axios.get(`${API_BASE_URL}/company`, {
        params: {
          type: companyType,
          status: statusFilter === 'all' ? '' : statusFilter,
          assigned: assignedFilter === 'all' ? '' : assignedFilter, // This is the key change
          search: searchTerm.trim(),
          page: currentPage,
          limit: 10,
        },
      });

      if (response.data?.data) {
        const filteredCompanies =
          assignedFilter === 'all'
            ? response.data.data.data
            : response.data.data.data.filter((company) => company.AssignedTo === assignedFilter);

        setCompanies(filteredCompanies);
        setPagination({
          totalPages: response.data.data.totalPages,
          totalRecords: response.data.data.totalRecords,
        });
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
    setSearchTerm('');
  };
  const resetFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCurrentPage(1);
    setAssignedFilter('all');
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: 'CompanyName',
        header: ({ column }) => <DataGridColumnHeader title="Company" column={column} />,
        cell: (info) => {
          const companyId = info.row.original._id; // Assuming 'id' is the unique identifier

          return (
            <div className="flex flex-col gap-0.5">
              <Link
                to={`/company/client/detail/${companyId}`} // Adjust this based on your routing setup
                className="text-sm font-medium text-gray-900 hover:text-primary-active"
              >
                {info.getValue()}
              </Link>
              <span className="text-2sm text-gray-700 font-normal">
                {info.row.original.CompanyEmail}
              </span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[250px]',
        },
      },
      {
        accessorKey: 'ModeOfOperations',
        header: ({ column }) => <DataGridColumnHeader title="Mode of Operations" column={column} />,
        cell: (info) => (
          <ul className="list-disc list-inside">
            {info.getValue().map((mode) => (
              <li key={mode} className="text-sm text-gray-700">
                {companyTypes.ModeOfOperations[mode]}
              </li>
            ))}
          </ul>
        ),
        meta: {
          className: 'min-w-[250px]',
        },
      },
      {
        accessorKey: 'CompanyAddress',
        header: ({ column }) => <DataGridColumnHeader title="Location" column={column} />,
        cell: (info) => {
          const state = info.row.original.CompanyAddress?.State || 'N/A';
          const city = info.row.original.CompanyAddress?.City || 'N/A';
          return (
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{state}</span>
              <span className="text-2sm text-gray-700">{city}</span>
            </div>
          );
        },
        meta: {
          className: 'min-w-[180px]',
        },
      },
      {
        accessorKey: 'CompanyStatus',
        header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
        cell: (info) => {
          const color = StatusColorBadge[info.getValue()] || 'primary';

          return (
            <span className={`badge badge-${color} badge-outline rounded-full`}>
              <span className={`size-1.5 rounded-full bg-${color} me-1.5`}></span>
              {companyStatus[info.getValue()]}
            </span>
          );
        },
        meta: {
          className: 'min-w-[150px]',
        },
      },
      {
        accessorKey: 'PocName',
        header: ({ column }) => <DataGridColumnHeader title="POC Details" column={column} />,
        cell: (info) => (
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">{info.getValue() || 'N/A'}</span>
            <span className="text-2sm text-gray-700">{info.row.original.PocEmail || 'N/A'}</span>
            <span className="text-2sm text-gray-700">{info.row.original.PocContact || 'N/A'}</span>
          </div>
        ),
        meta: {
          className: 'min-w-[200px]',
        },
      },
      {
        accessorKey: 'AssignedTo',
        header: ({ column }) => <DataGridColumnHeader title="Assigned To" column={column} />,
        cell: (info) => {
          const assignedUser = users.find((user) => user._id === info.getValue());
          return <span>{assignedUser?.FullName || 'N/A'}</span>;
        },
      },
    ],
    [users]
  );

  const Toolbar = () => {
    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">
          Showing {pagination.totalRecords} {type}
        </h3>

        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input
                type="text"
                placeholder="Search companies"
                onChange={(e) => debouncedSearch(e.target.value)}
              />
            </label>
          </div>
          <Select value={assignedFilter} onValueChange={setAssignedFilter}>
            <SelectTrigger className="w-40" size="sm">
              <SelectValue placeholder="Assigned To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {users.map((user) => (
                <SelectItem key={user._id} value={user._id}>
                  {user.FullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-wrap gap-2.5">
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-28" size="sm">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {Object.entries(companyStatus).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button onClick={resetFilters} className="btn btn-icon btn-sm btn-light-primary">
              <KeenIcon icon="arrows-circle" className="fs-6" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DataGrid
      columns={columns}
      data={companies}
      toolbar={<Toolbar />}
      pagination={{
        currentPage,
        totalPages: pagination.totalPages,
        onPageChange: setCurrentPage,
        size: 10,
      }}
      sorting={[{ id: 'CompanyName', desc: false }]}
      layout={{ card: true }}
      loading={isLoading}
    />
  );
};

export { CompanyTable };
