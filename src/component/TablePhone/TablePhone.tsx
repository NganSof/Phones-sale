import { FC, useMemo } from "react";
import "./TablePhone.css";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ListPhone } from "../../mock/ArrPhone";
import {
  addQuanlity,
  reduceQuanlity,
  selectPhones,
} from "../../reducer/reducerPhone/Phone";
import { useDispatch, useSelector } from "react-redux";

export const TablePhone: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  const dispatch = useDispatch();
  let total: number = 0;
  let list = listPhones.filter((item: ListPhone) => {
    total += +item.quanPhone * +item.price;
    return item.quanPhone > 0;
  });

  const handleAddQuan = (record: ListPhone) => {
    dispatch(addQuanlity(record));
  };
  const handleReduQuan = (record: ListPhone) => {
    dispatch(reduceQuanlity(record));
  };

  const columns: ColumnsType<ListPhone> = useMemo(
    () => [
      { title: " ", key: "id" },
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Type Phone",
        dataIndex: "type",
      },
      {
        title: "Store",
        dataIndex: "store",
      },
      {
        title: "Quanlity",
        render: (record) => (
          <>
            <Button
              onClick={() => {
                handleAddQuan(record);
              }}
            >
              +
            </Button>
            <span>{record.quanPhone}</span>
            <Button
              onClick={() => {
                handleReduQuan(record);
              }}
            >
              -
            </Button>
          </>
        ),
      },
    ],
    []
  );
  return (
    <>
      <Table
        columns={columns}
        dataSource={list}
        footer={() => `Total : ${total}`}
        pagination={false}
        rowKey="id"
      />
    </>
  );
};
