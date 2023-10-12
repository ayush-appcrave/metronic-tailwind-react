import { type SxProps } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { type ReactNode } from 'react';
import { type Props } from 'simplebar-react';

export interface ScrollbarProps extends Props {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  styles?: any;
}
