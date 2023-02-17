import {User} from "./_models";

interface HeadCell {
    disablePadding?: boolean;
    id: keyof User | null;
    label?: string;
    numeric?: boolean;
    hideSortIcon?: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'first_name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'last_name',
        numeric: false,
        disablePadding: false,
        label: 'Surname',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'two_steps_auth',
        numeric: false,
        disablePadding: false,
        label: 'Two Steps Auth',
    },
    {
        id: 'created_at',
        numeric: false,
        disablePadding: false,
        label: 'Created At',
    },
    { id: null, hideSortIcon: true },
];

export { headCells, type HeadCell }