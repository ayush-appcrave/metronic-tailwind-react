import { ReactNode } from 'react';

export interface IAccordionProps {
  className?: string;        // Optional className for custom styling
  children: ReactNode;
  allowMultiple?: boolean;   // Allow multiple items to be open at the same time
}

export interface IAccordionItemProps {
  title: string;             // Title of the accordion item
  indicator?: ReactNode;     // Optional indicator, like an icon
  children: ReactNode;       // Content of the accordion item
  isOpen?: boolean;          // To control open/close state of the item
  onClick?: () => void;      // Function to handle click event on the item
}
