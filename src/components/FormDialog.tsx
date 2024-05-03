import React, { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Button,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import "./form.css";

interface AddSeatFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  content: ReactNode;
  TicketConfirm: () => void;
  isEdit: boolean;
  UpdateData: () => void;
}

const FormDialog: React.FC<AddSeatFormProps> = ({
  setOpen,
  open,
  content,
  TicketConfirm,
  isEdit,
  UpdateData,
}) => {
  return (
    <>
      <Modal onOpen={() => setOpen(true)} open={open}>
        <ModalHeader>
          {isEdit ? "Update Your Reservation" : "Book Your Reservation"}
        </ModalHeader>
        <ModalContent className="content_card">
          <ModalDescription> {content}</ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content={isEdit ? "Update" : "Save"}
            labelPosition="right"
            icon="checkmark"
            onClick={() => {
              isEdit ? UpdateData() : TicketConfirm();
              setOpen(false);
            }}
            positive
          />
        </ModalActions>
      </Modal>
    </>
  );
};

export default FormDialog;
