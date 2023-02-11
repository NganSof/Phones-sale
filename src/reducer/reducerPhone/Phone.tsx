import { createSlice, current } from "@reduxjs/toolkit";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";

export const Phone = createSlice({
  name: "phones",
  // oriListPhons: listArrPhone
  initialState: { listPhones: [], total: 0 },
  reducers: {
    addQuanlity: (state, { payload }) => {
      let index = state.listPhones.findIndex(
        (ind: ListPhone) => current(ind).id === payload.id
      );
      let store: number = 0;
      let add: number = 0;
      if (index !== -1 && state.listPhones[index]["store"] !== 0) {
        store = state.listPhones[index]["store"]--;
        add = state.listPhones[index]["quanPhone"]++;
        if (add >= store) {
          store = 0;
        }
        return;
      }
      if (index !== -1 && state.listPhones[index]["store"] === 0) {
        return;
      } else {
        state.listPhones.push(payload);
        payload.quanPhone++;
        payload.store--;
      }
      return state;
    },
    reduceQuanlity: (state, { payload }) => {
      let index = state.listPhones.findIndex(
        (ind: ListPhone) => current(ind).id === payload.id
      );
      if (index !== -1 && state.listPhones[index]["quanPhone"] > 0) {
        state.listPhones[index]["store"]++;
        state.listPhones[index]["quanPhone"]--;
      } else {
        state.listPhones.splice(payload, 1);
      }
      return state;
    },
    updateListArrPhone: (state, { payload }) => {
      console.log("payload", payload);
    },
  },
});

export const { addQuanlity, reduceQuanlity, updateListArrPhone } =
  Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
