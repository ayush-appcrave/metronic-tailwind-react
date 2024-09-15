import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useMenu } from '@/providers';
import { useMenuCurrentItem } from '@/components';
import { useLocation } from 'react-router';

export interface IToolbarHeadingProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
}

const ToolbarHeading = ({ title = '', description }: IToolbarHeadingProps) => {
  const { getMenuConfig } = useMenu();
  const { pathname } = useLocation();
  const currentMenuItem = useMenuCurrentItem(pathname, getMenuConfig('primary'));

  return (
    <div className="flex flex-col justify-center gap-2">
      <h1 className="text-xl font-medium leading-none text-gray-900">
        {title || currentMenuItem?.title}
      </h1>
      {description && (
        <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
          {description}
        </div>
      )}
    </div>
  );
};

export { ToolbarHeading };
