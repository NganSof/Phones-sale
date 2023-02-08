import { FC } from "react";
import "./TablePhone.css";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ListPhone } from "../../mock/ArrPhone";
import { addQuanlity, selectPhones } from "../../reducer/reducerPhone/Phone";
import { useDispatch, useSelector } from "react-redux";

export const TablePhone: FC = () => {
  const { listPhones, quanPhone } = useSelector(selectPhones);
  const dispatch = useDispatch();
  const handleAddQuan = (record: any) => {
    dispatch(addQuanlity(record.id));
  };
  const columns: ColumnsType<ListPhone> = [
    { title: " ", dataIndex: "id", key: "id" },
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
          <span>{quanPhone}</span>
          <Button>-</Button>
        </>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={listPhones}
        footer={() => "TOTAL : "}
        pagination={false}
        rowKey="id"
      />
    </>
  );
};
