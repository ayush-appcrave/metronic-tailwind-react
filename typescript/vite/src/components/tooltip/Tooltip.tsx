import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

// Styled Tooltip to customize the popper and tooltip content
const StyledTooltip = styled(Tooltip)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'var(--tw-tooltip-background-color)', // Custom background
    color: 'var(--tw-tooltip-text-color)', // Custom text color
    boxShadow: 'var(--tw-tooltip-box-shadow)', // Custom shadow
    padding: '0.375rem 0.6rem', // Custom padding
    fontSize: '12px', // Custom font size
    borderRadius: '0.25rem' // Rounded corners
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'var(--tw-tooltip-background-color)' // Match arrow color with tooltip background
  }
}));

// Tooltip component that applies utility classes and custom styles
const DefaultTooltip = ({ ...props }: TooltipProps) => (
  <StyledTooltip
    {...props}
    classes={{ tooltip: '!text-white !rounded-md !text-xs !font-normal' }}
  />
);

export { DefaultTooltip };
