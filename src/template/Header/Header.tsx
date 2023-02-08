import { Button, Modal } from "antd";
import { FC, useState } from "react";
import { TablePhone } from "../../component/TablePhone/TablePhone";
import "./Header.css";

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <div className="menu">
      <div className="menuButton">
        <Button type="dashed" size="large" onClick={showModal} ghost>
          Store
        </Button>
        <Button type="dashed" size="large" ghost>
          User
        </Button>
      </div>
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
    </div>
  );
};
