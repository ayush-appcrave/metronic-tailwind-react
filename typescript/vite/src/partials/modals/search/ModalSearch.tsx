import React, { FC, forwardRef } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/components';

interface ModalSearchProps {
  open: boolean;
  onClose: () => void;
}

const ModalSearch: FC<ModalSearchProps> = forwardRef<HTMLDivElement, ModalSearchProps>(({ open, onClose }, ref) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent className="max-w-[500px] top-5 lg:top-[15%]">
        <ModalHeader className="pe-2.5">
          <ModalTitle className="pe-2.5">
            Search
          </ModalTitle>
          <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
            <KeenIcon icon="cross"/>
          </button>
        </ModalHeader>
        <ModalBody className="grid gap-5 px-0 py-5">
          Modal content
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export { ModalSearch };