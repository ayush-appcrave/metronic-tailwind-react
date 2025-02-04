import { DataGrid, DataGridColumnHeader, KeenIcon } from '@/components';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { requirementStatus, requirementPriority, requirementContractType } from '@/constants/requirement';
import { StatusColorBadge } from '@/constants/badgeColor';

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const RequirementTable = ({ onStatsUpdate }) => {
    const [requirements, setRequirements] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [contractFilter, setContractFilter] = useState('all');
    const [companyFilter, setCompanyFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState({ totalPages: 1, totalRecords: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const [companies, setCompanies] = useState([]);

    const debouncedSearch = debounce((value) => {
        setSearchTerm(value);
        setCurrentPage(1);
    }, 500);

    useEffect(() => {
        fetchCompanies();
        fetchRequirements();
    }, [statusFilter, priorityFilter, contractFilter, companyFilter, searchTerm, currentPage]);

    useEffect(() => {
        const activeRequirements = requirements.filter((req) => req.status === 1).length;
        onStatsUpdate(pagination.totalRecords, activeRequirements);
    }, [requirements, pagination.totalRecords]);

    const fetchCompanies = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/company`, {
                params: {
                    type: 1
                },
            });
            setCompanies(response.data.data.data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    const fetchRequirements = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${API_BASE_URL}/requirement`, {
                params: {
                    status: statusFilter === 'all' ? '' : statusFilter,
                    priority: priorityFilter === 'all' ? '' : priorityFilter,
                    contract_type: contractFilter === 'all' ? '' : contractFilter,
                    requirement_by: companyFilter === 'all' ? '' : companyFilter,
                    search: searchTerm.trim(),
                    page: currentPage,
                    limit: 10,
                },
            });

            if (response.data?.data) {
                setRequirements(response.data.data.data);
                setPagination({
                    totalPages: response.data.data.totalPages,
                    totalRecords: response.data.data.totalRecords,
                });
            }
        } catch (error) {
            console.error('Error fetching requirements:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetFilters = () => {
        setSearchTerm('');
        setStatusFilter('all');
        setPriorityFilter('all');
        setContractFilter('all');
        setCompanyFilter('all');
        setCurrentPage(1);
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: 'requirement_title',
                header: ({ column }) => <DataGridColumnHeader title="Title" column={column} />,
                cell: (info) => {
                    const requirementId = info.row.original._id;
                    return (
                        <Link
                            to={`/requirement/detail/${requirementId}`}
                            className="text-sm font-medium text-gray-900 hover:text-primary-active"
                        >
                            {info.getValue()}
                        </Link>
                    );
                },
                meta: { className: 'min-w-[200px]' },
            },
            {
                accessorKey: 'requirement_by',
                header: ({ column }) => <DataGridColumnHeader title="Company" column={column} />,
                cell: (info) => <span className="text-sm text-gray-700">{info.getValue()}</span>,
            },

            {
                accessorKey: 'assigned_to',
                header: ({ column }) => <DataGridColumnHeader title="Assigned To" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue() || 'N/A'}</span>,
            },
            {
                accessorKey: 'budget',
                header: ({ column }) => <DataGridColumnHeader title="Budget" column={column} />,
                cell: (info) => <span className="text-sm">₹{info.getValue()}</span>,
            },
            {
                accessorKey: 'priority',
                header: ({ column }) => <DataGridColumnHeader title="Priority" column={column} />,
                cell: (info) => {
                    const color = StatusColorBadge[info.getValue()] || 'primary';
    
                    return (
                        <span className={`badge badge-${color} badge-outline rounded-full`}>
                            <span className={`size-1.5 rounded-full bg-${color} me-1.5`}></span>
                            {requirementPriority[info.getValue()]}
                        </span>
                    );
                },
                meta: { className: 'min-w-[150px]' },
            },
            {
                accessorKey: 'status',
                header: ({ column }) => <DataGridColumnHeader title="Status" column={column} />,
                cell: (info) => {
                    const color = StatusColorBadge[info.getValue()] || 'primary';
    
                    return (
                        <span className={`badge badge-${color} badge-outline rounded-full`}>
                            <span className={`size-1.5 rounded-full bg-${color} me-1.5`}></span>
                            {requirementStatus[info.getValue()]}
                        </span>
                    );
                },
                meta: { className: 'min-w-[150px]' },
            },
            {
                accessorKey: 'contract_type',
                header: ({ column }) => <DataGridColumnHeader title="Contract Type" column={column} />,
                cell: (info) => <span className="text-sm">{requirementContractType[info.getValue()]}</span>,
            },
            {
                accessorKey: 'skills',
                header: ({ column }) => <DataGridColumnHeader title="Skills" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue()}</span>,
            },
            {
                accessorKey: 'experience',
                header: ({ column }) => <DataGridColumnHeader title="Experience" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue()} Years</span>,
            },
            {
                accessorKey: 'number_of_positions',
                header: ({ column }) => <DataGridColumnHeader title="Positions" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue()}</span>,
            },
            {
                accessorKey: 'location',
                header: ({ column }) => <DataGridColumnHeader title="Location" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue()}</span>,
            },
            {
                accessorKey: 'job_description',
                header: ({ column }) => <DataGridColumnHeader title="Job Description" column={column} />,
                cell: (info) => <span className="text-sm text-gray-700">{info.getValue()}</span>,
                meta: { className: 'min-w-[250px]' },
            },
            {
                accessorKey: 'payroll',
                header: ({ column }) => <DataGridColumnHeader title="Payroll" column={column} />,
                cell: (info) => <span className="text-sm">{info.getValue()}</span>,
            },
            {
                accessorKey: 'remarks',
                header: ({ column }) => <DataGridColumnHeader title="Remarks" column={column} />,
                cell: (info) => <span className="text-sm text-gray-700">{info.getValue() || 'N/A'}</span>,
            },
            {
                accessorKey: 'updatedAt',
                header: ({ column }) => <DataGridColumnHeader title="Last Updated" column={column} />,
                cell: (info) => {
                    const date = new Date(info.getValue());
                    return <span className="text-sm">{date.toLocaleDateString()}</span>;
                },
                meta: { className: 'min-w-[150px]' },
            },
        ],
        []
    );    

    const Toolbar = () => {
        return (
            <div className="card-header flex-wrap gap-2 border-b-0 px-5">
                <h3 className="card-title font-medium text-sm">
                    Showing {pagination.totalRecords} Requirements
                </h3>

                <div className="flex flex-wrap gap-2 lg:gap-5">
                    <div className="flex">
                        <label className="input input-sm">
                            <KeenIcon icon="magnifier" />
                            <input
                                type="text"
                                placeholder="Search requirements"
                                onChange={(e) => debouncedSearch(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        <select className="select select-sm w-28" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="all">All Status</option>
                            {Object.entries(requirementStatus).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>

                        <select className="select select-sm w-28" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                            <option value="all">All Priorities</option>
                            {Object.entries(requirementPriority).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>

                        <select className="select select-sm w-28" value={contractFilter} onChange={(e) => setContractFilter(e.target.value)}>
                            <option value="all">All Contracts</option>
                            {Object.entries(requirementContractType).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>

                        <select className="select select-sm w-40" value={companyFilter} onChange={(e) => setCompanyFilter(e.target.value)}>
                            <option value="all">All Companies</option>
                            {companies.map((company) => (
                                <option key={company._id} value={company._id}>{company.CompanyName}</option>
                            ))}
                        </select>

                        <button onClick={resetFilters} className="btn btn-icon btn-sm btn-light-primary">
                            <KeenIcon icon="arrows-circle" className="fs-6" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <DataGrid columns={columns} data={requirements} toolbar={<Toolbar />} pagination={{ currentPage, totalPages: pagination.totalPages, onPageChange: setCurrentPage, size: 10 }} layout={{ card: true }} loading={isLoading} />
    );
};

export { RequirementTable };
