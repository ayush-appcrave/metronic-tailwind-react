import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/components';
import { Tab, TabPanel, Tabs, TabsList } from '@/components/tabs';
import { DropdownCrud2 } from '@/partials/dropdowns/general';
import { useViewport } from '@/hooks';
import {
  ModalReportUserNotice,
  ModalReportUserOptions, 
  ModalReportUserFooter,
} from './';

interface ModalReportUserProps {
  open: boolean;
  onClose: () => void;
}

const ModalReportUser = forwardRef<HTMLDivElement, ModalReportUserProps>(({ open, onClose }, ref) => {
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
        <ModalHeader className="">
          <ModalTitle>
            Report User
          </ModalTitle>
          
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="cross" />
          </button>
        </ModalHeader>
        <ModalBody className="grid gap-5 px-0 py-5">
          <ModalReportUserNotice/>
          <div className="border-b border-b-gray-200"></div>
          <ModalReportUserOptions/>
          <div className="border-b border-b-gray-200"></div>
          <ModalReportUserFooter/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export { ModalReportUser };