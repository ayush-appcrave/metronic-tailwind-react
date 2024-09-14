import clsx from 'clsx';
import { Children, cloneElement, createContext, isValidElement, memo, useContext, useState } from 'react';
import { IMenuItemProps, IMenuProps } from './';

const initalProps: IMenuProps = {
  highlight: true,
  multipleAccordion: false,
  setOpenAccordion: (level: number, id: number) => {},
  isOpenAccordion: (level: number, id: number) => false
};

// Create a Menu Context
const MenuContext = createContext(initalProps);

// Custom hook to use the Menu Context
const useMenu = () => useContext(MenuContext);

const MenuComponent = ({className, children, highlight = true, multipleAccordion = false}: IMenuProps) => {
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: number | null }>({});

  // Function to handle the accordion toggle
  const setOpenAccordion = (level: number, id: number) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [level]: prevState[level] === id ? null : id, // Toggle the current item and collapse others at the same level
    }));
  };

  const isOpenAccordion = (level: number, id: number) => {
    return openAccordions[level] === id;
  }

  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {      
      if (child.type === MenuItem) {
        const modifiedProps: IMenuItemProps = {
          level: 1,
          index     
        };

        return cloneElement(child, modifiedProps);
      } else {
        return cloneElement(child);
      }
    }

    return child;
  });

  return (
    <MenuContext.Provider value={{highlight, multipleAccordion, setOpenAccordion, isOpenAccordion}}>
      <div className={clsx('menu', className && className)}>
        {modifiedChildren}
      </div>
    </MenuContext.Provider>
  );
};

const Menu = memo(MenuComponent);
export { Menu, useMenu };
