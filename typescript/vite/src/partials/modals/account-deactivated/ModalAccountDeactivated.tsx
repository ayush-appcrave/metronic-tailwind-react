import React, { forwardRef } from 'react';
import { Modal, ModalContent, ModalBody, ModalHeader, ModalTitle } from '@/components/modal'; // Import your custom Modal component
import { KeenIcon } from '@/components';

interface IModalReportUserProps {
  open: boolean;
  onClose: () => void;
}
export interface IModalReportUserdDocsItem {
  image: string;
  desc: string;
  date: string;
}

const ModalAccountDeactivated = forwardRef<HTMLDivElement, IModalReportUserProps>(
  ({ open, onClose }, ref) => {
    return (
      <Modal open={open} onClose={onClose} ref={ref}>
        <ModalContent className="max-w-[600px] top-[15%]">
          <ModalHeader className="">
            <ModalTitle>Report User</ModalTitle>

            <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
              <KeenIcon icon="cross" />
            </button>
          </ModalHeader>
          <ModalBody className="grid gap-5 px-0 py-5">Hello world!!!</ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);

export { ModalAccountDeactivated };
