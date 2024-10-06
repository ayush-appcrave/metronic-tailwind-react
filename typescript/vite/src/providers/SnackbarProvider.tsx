import { styled } from '@mui/material/styles';
import { SnackbarProvider as CustomSnackbarProvider, MaterialDesignContent } from 'notistack';
import { type PropsWithChildren } from 'react';

const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const CustomVariants = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
      backgroundColor: 'var(--tw-success-light)',
      border: '1px solid var(--tw-success-clarity)',
      borderRadius: '0.65rem',
      boxShadow: 'var(--tw-default-box-shadow)',
      color: 'var(--tw-success)',
      padding: '0.375rem 0.75rem'
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: 'var(--tw-danger-light)',
      border: '1px solid var(--tw-danger-clarity)',
      borderRadius: '0.65rem',
      boxShadow: 'var(--tw-default-box-shadow)',
      color: 'var(--tw-danger)',
      padding: '0.375rem 0.75rem'
    },
    '&.notistack-MuiContent-info': {
      backgroundColor: 'var(--tw-info-light)',
      border: '1px solid var(--tw-info-clarity)',
      borderRadius: '0.65rem',
      boxShadow: 'var(--tw-default-box-shadow)',
      color: 'var(--tw-info)',
      padding: '0.375rem 0.75rem'
    },
    '&.notistack-MuiContent-warning': {
      backgroundColor: 'var(--tw-warning-light)',
      border: '1px solid var(--tw-warning-clarity)',
      borderRadius: '0.65rem',
      boxShadow: 'var(--tw-default-box-shadow)',
      color: 'var(--tw-info)',
      padding: '0.375rem 0.75rem'
    },
  }));

  return (
    <CustomSnackbarProvider
      autoHideDuration={112000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
      Components={{
        success: CustomVariants,
        error: CustomVariants,
        info: CustomVariants,
        warning: CustomVariants
      }}
    >
      {children}
    </CustomSnackbarProvider>
  );
};

export { SnackbarProvider };
