import { Box } from '@mui/material';
import { UpdateUserGeneralInfoAccordion } from './UpdateUserGeneralInfoAccordion';
import { UpdateUserPasswordAccordion } from './UpdateUserPasswordAccordion';
function UpdateUserFormWrapper(props) {
  return <Box sx={[...(Array.isArray(props.sx) ? props.sx : [props.sx])]}>
      <UpdateUserGeneralInfoAccordion userId={props.userId} exitHandler={props.handleExit}></UpdateUserGeneralInfoAccordion>
      <UpdateUserPasswordAccordion userId={props.userId}></UpdateUserPasswordAccordion>
    </Box>;
}
export { UpdateUserFormWrapper };