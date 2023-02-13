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
        state.listPhones.reduce((total, item: any) => {
          total += current(item).quanPhone * current(item).price;
          return (state.total = total);
        }, 0);
        if (add >= store) {
          store = 0;
        }
        return;
      }
      if (index !== -1 && state.listPhones[index]["store"] === 0) {
        return;
      } else {
        state.listPhones.push(payload as never);
        state.total += (payload.quanPhone + 1) * payload.price;
        console.log("total", payload["quanPhone"], payload["price"]);
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
        state.total -=
          state.listPhones[index]["quanPhone"] *
          state.listPhones[index]["price"];
        if (state.listPhones[index]["quanPhone"] === 0) {
          state.total =
            current(state.listPhones[index])["quanPhone"] *
            current(state.listPhones[index])["price"];
          // lỗi có 1 sp ra khỏi giỏ total=0
          // lỗi xóa khỏi giỏ hàng không cập nhật đc listArrPhone mới
          state.listPhones.splice(index, 1);
          console.log("listArr", listArrPhone[index]);
        }
      }
      return state;
    },
  },
});

export const { addQuanlity, reduceQuanlity } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
