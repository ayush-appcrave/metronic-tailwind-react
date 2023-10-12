import { HeadCell } from "@/components/table";

import { type User } from "./_models";

type UserTableHeadCellsConfiguration = HeadCell<User>;

const headCells: UserTableHeadCellsConfiguration[] = [
  {
    id: "first_name",
    numeric: false,
    disablePadding: true,
    label: "Name",
    width: "20%",
  },
  {
    id: "last_name",
    numeric: false,
    disablePadding: false,
    label: "Surname",
    width: "15%",
  },
  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: "Role",
    width: "10%",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
    width: "10%",
  },
  {
    id: "two_steps_auth",
    numeric: false,
    disablePadding: false,
    label: "TSA",
    width: "10%",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Created At",
    width: "20%",
  },
  { id: null, hideSortIcon: true, width: "10%" },
];

export { type HeadCell, headCells };
