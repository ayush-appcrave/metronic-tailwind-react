import { Close } from '@mui/icons-material';
import { Box, Button, Drawer, Typography } from '@mui/material';
import { UpdateUserFormWrapper } from './UpdateUserFormWrapper';
function UpdateUserDrawer(props) {
  return <Drawer open={props.open} onClose={props.handleClose} anchor="right" PaperProps={{
    sx: {
      width: '40%'
    }
  }}>
      <Button onClick={() => {
      props.handleClose();
    }} sx={{
      position: 'absolute',
      right: 5,
      top: 5
    }}>
        <Close></Close>
      </Button>
      <Box sx={{
      marginTop: '40px'
    }}>
        <Typography>Update User Info Page</Typography>
        <UpdateUserFormWrapper userId={props.userId} handleExit={props.handleClose}></UpdateUserFormWrapper>
      </Box>
    </Drawer>;
}
export { UpdateUserDrawer };