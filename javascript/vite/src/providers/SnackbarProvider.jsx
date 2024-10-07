import { SnackbarProvider as CustomSnackbarProvider } from 'notistack';
const SnackbarProvider = ({
  children
}) => {
  return <CustomSnackbarProvider autoHideDuration={2000} anchorOrigin={{
    vertical: 'top',
    horizontal: 'right'
  }} maxSnack={3}>
      {children}
    </CustomSnackbarProvider>;
};
export { SnackbarProvider };