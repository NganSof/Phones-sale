import { createSlice } from "@reduxjs/toolkit";
import { listArrPhone } from "../../mock/ArrPhone";

const initialState = { listPhones: listArrPhone, quanPhone: 0 };

export const Phone = createSlice({
  name: "phones",
  initialState,
  reducers: {
    addQuanlity: (state, { payload }) => {
      let indAdd = state.listPhones?.filter((item) => {
        return item.id === payload;
      });
      console.log("indAdd", indAdd);

      if (indAdd.length >= 0) {
        state.quanPhone++;
      }
      console.log("state", state);
    },
    reduceQuanlity: () => {},
  },
});

export const { addQuanlity, reduceQuanlity } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
