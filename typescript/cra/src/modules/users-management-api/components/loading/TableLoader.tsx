import {LinearProgress, TableCell, TableRow} from "@mui/material";
import { PaginationState } from "../../helpers";

type Props = {
    pagination: PaginationState,
    rowHeight: number,
}

const TableLoader = (props: Props) => {
    return <TableRow sx={{
        height: `${props.rowHeight * props.pagination.items_per_page!}px`,
        position: "relative"
    }}>
        <TableCell colSpan={8} rowSpan={props.pagination.items_per_page} sx={{
            textAlign: "center",
            display: "table-cell",
            verticalAlign:"middle",
        }}><LinearProgress sx={{ marginLeft: "auto", marginRight: "auto", width: '30%' }} /></TableCell>
    </TableRow>
}

export { TableLoader };