import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { Tab, TabPanel, Tabs, TabsList } from '@/components/tabs';
import { DropdownCrud2 } from '@/partials/dropdowns/general';
import { useViewport } from '@/hooks';
import {
  ModalSettings, 
} from './';

interface ModalShareProfileProps {
  open: boolean;
  onClose: () => void;
}

const ModalShareProfile = forwardRef<HTMLDivElement, ModalShareProfileProps>(({ open, onClose }, ref) => {
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const [viewportHeight] = useViewport();
  const offset = 300;

  useEffect(() => {
    setScrollableHeight(viewportHeight - offset);
  }, [viewportHeight]);

  const handleSearchInput = () => {
    // handle search input
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent className="max-w-[600px] top-[15%]">
        <ModalHeader className="py-4 px-5">
          <ModalTitle>
            Share Profile
          </ModalTitle>
          
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="black-left" />
          </button>
        </ModalHeader>
        <ModalBody className="p-0 pb-5">
          <ModalSettings/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export { ModalShareProfile };