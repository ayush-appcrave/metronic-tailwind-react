import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
const LightTooltip = styled(({
  className,
  ...props
}) => <Tooltip {...props} classes={{
  popper: className
}} />)(({
  theme
}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey['700'],
    boxShadow: theme.customShadows.tooltip,
    fontSize: 11
  }
}));
export { LightTooltip };