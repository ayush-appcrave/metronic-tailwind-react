import { SnackbarProvider as CustomSnackbarProvider } from 'notistack';
import { type PropsWithChildren } from 'react';

const SnackbarProvider = ({ children }: PropsWithChildren) => {
  return (
    <CustomSnackbarProvider
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
    >
      {children}
    </CustomSnackbarProvider>
  );
};

export { SnackbarProvider };
