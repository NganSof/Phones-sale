import { Badge, Button, Modal } from "antd";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TablePhone } from "../../component/TablePhone/TablePhone";
import { ListPhone } from "../../mock/ArrPhone";
import { selectPhones } from "../../reducer/reducerPhone/Phone";
import "./Header.css";

export const Header: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let Ncount = listPhones.reduce(
      (setCount: number, currentValue: ListPhone) => {
        if (currentValue.quanPhone > 0) {
          setCount += +currentValue.quanPhone;
        }
        return setCount;
      },
      0
    );

    setCount(Ncount);
  }, [listPhones]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <div className="menu">
      <div className="menuButton">
        <Badge showZero count={count} style={{ marginRight: 25, marginTop: 4 }}>
          <Button type="dashed" size="large" onClick={showModal} ghost>
            Store
          </Button>
        </Badge>
        <Button type="dashed" size="large" ghost>
          <Link to={"/user"} style={{ color: "black" }}>
            User
          </Link>
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
