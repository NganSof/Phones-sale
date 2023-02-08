import { createSlice, current } from "@reduxjs/toolkit";
import { listArrPhone } from "../../mock/ArrPhone";

const initialState = { listPhones: listArrPhone };

export const Phone = createSlice({
  name: "phones",
  initialState,
  reducers: {
    addQuanlity: (state, { payload }) => {
      const crrState = current(state);
      let indAdd = crrState.listPhones?.filter((item) => {
        return item.id === payload;
      });

      let [item] = indAdd;
      item.quanPhone++;
      console.log("item", item);
    },
    reduceQuanlity: () => {},
  },
});

export const { addQuanlity, reduceQuanlity } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
