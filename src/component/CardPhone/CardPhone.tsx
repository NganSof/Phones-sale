import { Button, Card, Modal } from "antd";
import { FC, useState } from "react";
import { ListPhone } from "../../mock/ArrPhone";
import picture from "../../asset/samsung.png";
import "./CardPhone.css";
import { Link } from "react-router-dom";
import { TablePhone } from "../TablePhone/TablePhone";
import { useDispatch } from "react-redux";
import { addQuanlity } from "../../reducer/reducerPhone/Phone";

export const CardPhone: FC<{ phone: ListPhone }> = ({ phone }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleAddStore = () => {
    dispatch(addQuanlity(phone));
  };
  return (
    <>
      <Card.Grid className="bgCard">
        <div className="imgPhone" title={phone.name}>
          <img src={picture} alt="imagePhone" />
        </div>
        <div className="bottomBut">
          <Button type="primary">
            <Link to="" target={"_blank"}>
              Detail
            </Link>
          </Button>
          <Button
            danger
            type="primary"
            onClick={() => {
              showModal();
              handleAddStore();
            }}
          >
            Add
          </Button>
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
      </Card.Grid>
    </>
  );
};
