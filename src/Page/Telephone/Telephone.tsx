import { FC, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardPhone } from "../../component/CardPhone/CardPhone";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";
import { selectPhones } from "../../reducer/reducerPhone/Phone";
import "./Telephone.css";

export const Telephone: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  let oriObject: ListPhone = {
    id: "",
    name: "",
    type: "",
    store: "",
    quanPhone: "",
  };
  let cloneList = [...listArrPhone, ...listPhones];

  const handleList = (cloneList: ListPhone[]) => {
    let newListPhones: ListPhone[] = [];
    cloneList.findIndex((item) => {
      if (item.id === oriObject.id) {
        newListPhones.pop();
        return newListPhones.push(item);
      } else {
        oriObject = { ...item };
        newListPhones.push(item);
      }
    });
    console.log("new", cloneList, newListPhones);

    if (newListPhones.length) {
      return newListPhones?.map((item, index) => {
        return (
          <Fragment key={index}>
            <CardPhone phone={item} />
          </Fragment>
        );
      });
    }
  };

  return (
    <>
      <p className="textList">lits phone</p>
      <div className="boderCard">{handleList(cloneList)}</div>
    </>
  );
};
