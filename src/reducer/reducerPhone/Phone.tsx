import { createSlice, current } from "@reduxjs/toolkit";
import { listArrPhone, ListPhone } from "../../mock/ArrPhone";

export const Phone = createSlice({
  name: "phones",
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
        state.listPhones.push(payload as never);
        // add lại bị lỗi
        payload.quanPhone++;
        payload.store--;
      }
      return state;
    },
    reduceQuanlity: (state, { payload }) => {
      let index = state.listPhones.findIndex(
        (ind: ListPhone) => current(ind).id === payload.id
      );

      if (state.listPhones[index]["quanPhone"] > 0) {
        state.listPhones[index]["store"]++;
        state.listPhones[index]["quanPhone"]--;

        if (state.listPhones[index]["quanPhone"] <= 0) {
          // lỗi xóa khỏi giỏ hàng không cập nhật đc listArrPhone mới
          state.listPhones.splice(index, 1);
          console.log("Stotal", state.total);
        }
      }
      return state;
    },
    updateTotalTable: (state) => {
      state.listPhones.reduce((total, item: any) => {
        total += current(item).quanPhone * current(item).price;
        return (state.total = total);
      }, 0);
    },
  },
});

export const { addQuanlity, reduceQuanlity, updateTotalTable } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
