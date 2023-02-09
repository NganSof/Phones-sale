import { createSlice, current } from "@reduxjs/toolkit";
import { ListPhone } from "../../mock/ArrPhone";

// const initialState = { listPhones: listArrPhone };

export const Phone = createSlice({
  name: "phones",
  initialState: { listPhones: [] },
  reducers: {
    addQuanlity: (state, { payload }) => {
      let index = state.listPhones.findIndex(
        (ind: ListPhone) => current(ind).id === payload.id
      );
      if (index !== -1 && state.listPhones[index]["store"] !== 0) {
        let store = state.listPhones[index]["store"]--;
        let add = state.listPhones[index]["quanPhone"]++;
        if (add > store) {
          // nếu store =0 ko cộng đc nữa , không thêm đc nữa
          return;
        }
      } else {
        state.listPhones.push(payload);
      }
      console.log("listPhones", current(state.listPhones));
      return state;
    },
    reduceQuanlity: () => {},
  },
});

export const { addQuanlity, reduceQuanlity } = Phone.actions;

export const selectPhones = (state: any) => state.phones;
export default Phone.reducer;
