import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
const DarkTooltip = styled(({
  className,
  ...props
}) => <Tooltip {...props} classes={{
  popper: className
}} />)(({
  theme
}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black
  }
}));
export { DarkTooltip };