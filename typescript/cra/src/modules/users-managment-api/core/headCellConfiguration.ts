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
        id: 'two_steps',
        numeric: false,
        disablePadding: false,
        label: 'Verified',
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