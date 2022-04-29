import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: "landing",
});
