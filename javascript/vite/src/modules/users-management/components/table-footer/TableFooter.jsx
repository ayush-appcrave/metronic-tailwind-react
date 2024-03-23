import { Box, FormControlLabel, Switch } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { TablePaginationWrapper } from '../pagination/TablePaginationWrapper';
function TableFooter(props) {
  const location = useLocation();
  const locationPart = location.pathname.split('/').join('_');
  const pageLSKey = `DENSE_DEFAULT_${locationPart}_TABLE`;
  useEffect(() => {
    props.setDense(localStorage.getItem(pageLSKey) === 'true');
  }, []);
  const handleChangeDense = event => {
    localStorage.setItem(pageLSKey, event.target.checked.toString());
    props.setDense(event.target.checked);
  };
  return <Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: {
      sm: 1,
      lg: 2
    },
    px: {
      sm: 1,
      lg: 3
    }
  }}>
      <FormControlLabel label="Dense" control={<Switch checked={props.dense} onChange={handleChangeDense} />} />
      <TablePaginationWrapper />
    </Box>;
}
export { TableFooter };