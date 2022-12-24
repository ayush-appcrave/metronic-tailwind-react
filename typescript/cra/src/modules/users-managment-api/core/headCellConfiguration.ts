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
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'position',
        numeric: false,
        disablePadding: false,
        label: 'Position',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'online',
        numeric: false,
        disablePadding: false,
        label: 'Verified',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    { id: null, hideSortIcon: true },
];

export { headCells, type HeadCell }