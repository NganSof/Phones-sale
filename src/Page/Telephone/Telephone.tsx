import { FC, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardPhone } from "../../component/CardPhone/CardPhone";
import { ListPhone } from "../../mock/ArrPhone";
import { selectPhones } from "../../reducer/reducerPhone/Phone";
import "./Telephone.css";

export const Telephone: FC = () => {
  const { listPhones } = useSelector(selectPhones);

  useEffect(() => {
    handleList(listPhones);
  }, [listPhones]);

  const handleList = (listPhones: ListPhone[]) => {
    return listPhones?.map((item, index) => {
      return (
        <Fragment key={index}>
          <CardPhone phone={item} />
        </Fragment>
      );
    });
  };

  return (
    <>
      <p className="textList">lits phone</p>
      <div className="boderCard">{handleList(listPhones)}</div>
    </>
  );
};
