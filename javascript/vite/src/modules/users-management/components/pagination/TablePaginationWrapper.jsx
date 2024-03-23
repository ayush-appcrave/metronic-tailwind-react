import { TablePagination } from '@mui/material';
import { useQueryRequest, useQueryResponsePagination } from '../../core';
function TablePaginationWrapper() {
  const pagination = useQueryResponsePagination();
  const {
    updateState
  } = useQueryRequest();
  const handleChangePage = (event, newPage) => {
    updateState({
      page: newPage + 1
    }, true);
  };
  const handleChangeRowsPerPage = event => {
    updateState({
      items_per_page: event.target.value
    }, true);
  };
  return <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={pagination.total ? pagination.total : 0} rowsPerPage={Number(pagination.items_per_page)} page={pagination.current_page ? pagination.current_page - 1 : 0} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />;
}
export { TablePaginationWrapper };