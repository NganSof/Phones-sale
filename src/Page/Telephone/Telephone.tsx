import { FC, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardPhone } from "../../component/CardPhone/CardPhone";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";
import { selectPhones } from "../../reducer/reducerPhone/Phone";
import "./Telephone.css";

export const Telephone: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  let cloneList = [...listArrPhone, ...listPhones];

  useEffect(() => {
    handleList(cloneList);
  }, [listPhones]);

  const handleList = (cloneList: ListPhone[]) => {
    // handle remove object duplication
    let cachedObject: any = {};
    cloneList.map((item) => (cachedObject[item.id] = item));
    cloneList = Object.values(cachedObject);

    return cloneList?.map((item, index) => {
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
      <div className="boderCard">{handleList(cloneList)}</div>
    </>
  );
};
