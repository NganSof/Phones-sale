import { Button, Card, Modal } from "antd";
import { FC, useState } from "react";
import { ListPhone } from "../../mock/ArrPhone";
import "./CardPhone.css";
import { TablePhone } from "../TablePhone/TablePhone";
import { useDispatch } from "react-redux";
import { HeartTwoTone } from "@ant-design/icons";
import { addQuanlity } from "../../reducer/reducerPhone/Phone";
import { useNavigate } from "react-router-dom";

export const CardPhone: FC<{ phone: ListPhone }> = ({ phone }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <img
            src={`https://picsum.photos/seed/${phone.id}/1500/1500`}
            alt="imagePhone"
          />
        </div>
        <div className="contentCard">
          <p>{phone.name}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            incidunt fuga animi dicta accusantium id cumque minus ad deserunt
            nam!
          </p>
        </div>
        <div className="bottomCard">
          <div className="bottomLeft">
            <div>
              <HeartTwoTone title="store" />
              <span>{phone.store}</span>
            </div>
            <div>
              <HeartTwoTone title="Cart Quanlity" twoToneColor="#eb2f96" />
              <span>{phone.quanPhone}</span>
            </div>
          </div>
          <div className="bottomRight">
            <Button
              className="desDetail"
              type="primary"
              onClick={() => {
                if (!localStorage.getItem("login")) {
                  navigate("/user");
                  return;
                } else {
                  navigate(`/detail/${phone.id}`);
                  return;
                }
              }}
            >
              <span className="sizeDetail">Detail</span>
            </Button>
            <Button
              className="desAdd"
              onClick={() => {
                showModal();
                handleAddStore();
              }}
            >
              <span className="sizeAdd">+</span>
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
        </div>
      </Card.Grid>
    </>
  );
};
