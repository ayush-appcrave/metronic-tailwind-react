import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/components';
import { useViewport } from '@/hooks';
import { ModalShareProfileViaLink, ModalShareProfileViaEmail, ModalShareProfileUsers, ModalShareProfileSettings } from './';
const ModalShareProfile = forwardRef(({
  open,
  onClose
}, ref) => {
  const [scrollableHeight, setScrollableHeight] = useState(0);
  const [viewportHeight] = useViewport();
  const offset = 300;
  useEffect(() => {
    setScrollableHeight(viewportHeight - offset);
  }, [viewportHeight]);
  const handleSearchInput = () => {
    // handle search input
  };
  return <Modal open={open} onClose={onClose}>
        <ModalContent className="max-w-[600px] top-[15%]">
          <ModalHeader className="">
            <ModalTitle>Share Profile</ModalTitle>

            <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
              <KeenIcon icon="cross" />
            </button>
          </ModalHeader>
          <ModalBody className="grid gap-5 px-0 py-5">
            <ModalShareProfileViaLink />
            <div className="border-b border-b-gray-200"></div>
            <ModalShareProfileViaEmail />
            <div className="border-b border-b-gray-200"></div>
            <ModalShareProfileUsers />
            <div className="border-b border-b-gray-200"></div>
            <ModalShareProfileSettings />
          </ModalBody>
        </ModalContent>
      </Modal>;
});
export { ModalShareProfile };