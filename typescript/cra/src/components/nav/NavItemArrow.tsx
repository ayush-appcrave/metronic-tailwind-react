import { Box } from '@mui/material';
import { memo } from 'react';

import { type NavItemArrowType } from './types';

const NavItemArrowComponent = ({
  variant = 'inline',
  direction = 'vertical',
  active = false,
  here = false,
  hover = false,
  open = false,
  disabled = false,
  collapse = false,
  expand = false,
  icon = null
}: NavItemArrowType) => {
  let rotateInitial: string = '';
  let rotateToggle: string = '';

  if (variant === 'inline' && direction === 'vertical') {
    rotateInitial = 'rotate(0)';
    rotateToggle = 'rotate(-180deg)';
  } else if (variant === 'inline' && direction === 'horizontal') {
    rotateInitial = 'rotate(0)';
    rotateToggle = 'rotate(180deg)';
  }

  const transform: string = open ? rotateToggle : rotateInitial;

  return (
    <Box
      sx={{
        transform,
        transition: 'transform 0.3s ease',
        height: 16,
        width: 16,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: (theme) => theme.palette.grey['500'],
        ...(active && {
          color: (theme) => theme.palette.primary.main
        }),
        ...(here && {
          color: (theme) => theme.palette.grey['700']
        }),
        'i ': {
          fontSize: '13px'
        }
      }}
    >
      {icon}
    </Box>
  );
};

const NavItemArrow = memo(NavItemArrowComponent);
export { NavItemArrow };
