import { Drawer } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export interface IToolbarProps {
  children?: ReactNode;
}

const ToolbarActions = ({children}: IToolbarProps) => {

  return (
    <div className="flex items-center gap-2.5">
      {children}
    </div>
  );
};

export { ToolbarActions };
