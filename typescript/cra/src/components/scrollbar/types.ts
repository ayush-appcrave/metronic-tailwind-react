import { type ReactNode } from 'react';
import { type Props } from 'simplebar-react';
import { type Theme } from '@mui/material/styles';
import { type SxProps } from '@mui/material';

export interface ScrollbarProps extends Props {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  styles?: any;
}
