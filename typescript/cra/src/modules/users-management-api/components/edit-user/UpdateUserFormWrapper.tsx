import { Box } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material/styles';

import { UpdateUserGeneralInfoAccordion } from './UpdateUserGeneralInfoAccordion';
import { UpdateUserPasswordAccordion } from './UpdateUserPasswordAccordion';

interface UpdateUserFormWrapperProps {
  userId: string;
  handleExit: () => void;
  sx?: SxProps<Theme>;
}

function UpdateUserFormWrapper(props: UpdateUserFormWrapperProps) {
  return (
    <Box sx={[...(Array.isArray(props.sx) ? props.sx : [props.sx])]}>
      <UpdateUserGeneralInfoAccordion
        userId={props.userId}
        exitHandler={props.handleExit}
      ></UpdateUserGeneralInfoAccordion>
      <UpdateUserPasswordAccordion userId={props.userId}></UpdateUserPasswordAccordion>
    </Box>
  );
}

export { UpdateUserFormWrapper };
