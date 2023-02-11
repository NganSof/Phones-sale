import { FC, useMemo } from "react";
import "./TablePhone.css";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ListPhone } from "../../mock/ArrPhone";
import {
  addQuanlity,
  reduceQuanlity,
  selectPhones,
  updateListArrPhone,
} from "../../reducer/reducerPhone/Phone";
import { useDispatch, useSelector } from "react-redux";

export const TablePhone: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  const dispatch = useDispatch();

  // check handleUpdateListPhone
  // const handleUpdateListPhone = () => {};
  const handleAddQuan = (record: any) => {
    dispatch(addQuanlity(record));
  };
  const handleReduQuan = (record: any) => {
    dispatch(reduceQuanlity(record));
  };
  // dispatch(updateListArrPhone(listPhones));

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
        dataSource={listPhones}
        footer={() => "Total : "}
        pagination={false}
        rowKey="id"
      />
    </>
  );
};
