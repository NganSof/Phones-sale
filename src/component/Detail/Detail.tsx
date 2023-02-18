import { Avatar } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ListPhone } from "../../mock/ArrPhone";
import { selectPhones } from "../../reducer/reducerPhone/Phone";
import "./Detail.css";

export const Detail: FC = () => {
  const { id } = useParams();
  const { listPhones } = useSelector(selectPhones);
  let objDetail: ListPhone = {
    id: "",
    name: "",
    type: "",
    store: "",
    quanPhone: "",
    price: "",
  };

  listPhones.filter((item: ListPhone) => {
    if (item.id === Number(id)) {
      return (objDetail = item);
    }
  });

  return (
    <div className="center">
      <h1>This is content Cart {objDetail.name}</h1>
      <Avatar
        size={64}
        src={
          <img
            style={{ padding: 0, width: 250, height: 250 }}
            src={`https://picsum.photos/seed/${objDetail.id}/1500/1500`}
            alt="avatar"
          />
        }
      />
      <div className="contentDetail">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sed enim
        reiciendis fugiat odit pariatur quasi nisi dignissimos architecto, atque
        assumenda fuga quis magni voluptatum! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Alias sed enim reiciendis fugiat odit
        pariatur quasi nisi dignissimos architecto, atque assumenda fuga quis
        magni voluptatum! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Alias sed enim reiciendis fugiat odit pariatur quasi nisi
        dignissimos architecto, atque assumenda fuga quis magni voluptatum!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sed enim
        reiciendis fugiat odit pariatur quasi nisi dignissimos architecto, atque
        assumenda fuga quis magni voluptatum!
      </div>
    </div>
  );
};
