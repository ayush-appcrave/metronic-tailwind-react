import clsx from 'clsx';
import { Children, cloneElement, createContext, isValidElement, memo, useContext } from 'react';

import { IMenuProps } from './';

const initalProps: IMenuProps = {
  highlight: true  
};

// Create a Menu Context
const MenuContext = createContext(initalProps);

// Custom hook to use the Menu Context
const useMenuProps = () => useContext(MenuContext);

const MenuComponent = ({className, children, highlight = true}: IMenuProps) => {
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      // Return the child with modified props
      return cloneElement(child);
    }

    return child;
  });

  return (
    <MenuContext.Provider value={{highlight}}>
      <div className={clsx('menu', className && className)}>
        {modifiedChildren}
      </div>
    </MenuContext.Provider>
  );
};

const Menu = memo(MenuComponent);
export { Menu, useMenuProps };
