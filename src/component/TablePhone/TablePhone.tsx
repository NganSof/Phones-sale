import { FC, useMemo } from "react";
import "./TablePhone.css";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ListPhone } from "../../mock/ArrPhone";
import { addQuanlity, selectPhones } from "../../reducer/reducerPhone/Phone";
import { useDispatch, useSelector } from "react-redux";

export const TablePhone: FC = () => {
  const { listPhones } = useSelector(selectPhones);
  console.log("tableListPhone", listPhones);

  const dispatch = useDispatch();
  const handleAddQuan = (record: any) => {
    dispatch(addQuanlity(record));
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
            <span>{record.quanPhone > 0 ? record.quanPhone : 0}</span>
            <Button>-</Button>
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
