import React, { Dispatch, SetStateAction } from "react";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Icon,
  Modal,
} from "semantic-ui-react";

interface deleteProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  deleteData: (id: number) => void;
  deleteId: number;
}
const DeleteDilaloge: React.FC<deleteProps> = ({
  open,
  setOpen,
  deleteData,
  deleteId,
}) => {
  return (
    <>
      <Modal size={"mini"} open={open}>
        <ModalHeader>Delete Your Account</ModalHeader>
        <ModalContent>
          <p>Are you sure you want to delete your account</p>
        </ModalContent>
        <ModalActions>
          <Button negative onClick={() => setOpen(false)}>
            No
          </Button>
          <Button
            positive
            onClick={() => {
              setOpen(false);
              deleteData(deleteId);
            }}
          >
            Yes
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

export default DeleteDilaloge;
