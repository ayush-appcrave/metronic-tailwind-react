import React, { forwardRef, useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/components';
import { useViewport } from '@/hooks';
const ModalGiveAward = forwardRef(({
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
        <ModalHeader className="py-4 px-5">
          <ModalTitle>
            Give Award
          </ModalTitle>
          
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="black-left" />
          </button>
        </ModalHeader>
        <ModalBody className="p-0 pb-5">
          Test
        </ModalBody>
      </ModalContent>
    </Modal>;
});
export { ModalGiveAward };