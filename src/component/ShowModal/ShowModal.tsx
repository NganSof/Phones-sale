import { Modal } from "antd";
import { FC, useState } from "react";
import { TablePhone } from "../TablePhone/TablePhone";

export const ShowModal: FC = () => {
  const [open, setOpen] = useState(true);

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="List card"
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      okText="OK"
      cancelText="CANCEL"
    >
      <TablePhone />
    </Modal>
  );
};
