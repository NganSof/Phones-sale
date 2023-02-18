import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";

export const Phone = createSlice({
  name: "phones",
  initialState: { listPhones: listArrPhone, total: 0 },
  reducers: {
    addQuanlity: (state, action: PayloadAction<ListPhone>) => {
      state.listPhones.filter((item: ListPhone) => {
        if (item.id === action.payload.id && item.store > 0) {
          item.quanPhone = +item.quanPhone + 1;
          item.store = +item.store - 1;
          return item;
        }
        if (item.store <= 0) {
          return item;
        }
      });
    },
    reduceQuanlity: (state, action: PayloadAction<ListPhone>) => {
      state.listPhones.filter((item: ListPhone, index: number) => {
        if (item.id === action.payload.id && item.quanPhone > 0) {
          item.quanPhone = +item.quanPhone - 1;
          item.store = +item.store + 1;
          return item;
        }
        if (item.quanPhone <= 0) {
          return item;
        }
      });
    },
  },
});

export const { addQuanlity, reduceQuanlity } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
