import { FC, Fragment } from "react";
import { CardPhone } from "../../component/CardPhone/CardPhone";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";
import "./Telephone.css";

export const Telephone: FC = () => {
  const handleList = (listArrPhone: ListPhone[]) => {
    return listArrPhone?.map((item, index) => {
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
      <div className="boderCard">{handleList(listArrPhone)}</div>
    </>
  );
};
