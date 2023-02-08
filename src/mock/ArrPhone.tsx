export interface ListPhone {
  id: number;
  name: string;
  type: string;
  store: number;
  quanPhone: number;
}

export const listArrPhone: ListPhone[] = [
  { id: 1, name: "samsung A71", type: "Samsung", store: 12, quanPhone: 0 },
  { id: 2, name: "samsung A1", type: "Samsung", store: 10, quanPhone: 0 },
  { id: 3, name: "oppo Neo7", type: "Oppo", store: 6, quanPhone: 0 },
  {
    id: 4,
    name: "iphone 13",
    type: "Iphone",
    store: 2,
    quanPhone: 0,
  },
];
