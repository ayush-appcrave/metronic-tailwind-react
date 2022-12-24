import {Data} from "./users";

interface HeadCell {
    disablePadding?: boolean;
    id: keyof Data | null;
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
        id: 'company',
        numeric: false,
        disablePadding: false,
        label: 'Company',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role',
    },
    {
        id: 'verified',
        numeric: false,
        disablePadding: false,
        label: 'Verified',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    { id: null, hideSortIcon: true },
];

export { headCells, type HeadCell }