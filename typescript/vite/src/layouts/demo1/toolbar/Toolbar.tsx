import { Drawer } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface IToolbarProps {
  children?: ReactNode;
}

const Toolbar = ({ children }: IToolbarProps) => {
  return (
    <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
      {children}
    </div>
  );
};

export { Toolbar };
