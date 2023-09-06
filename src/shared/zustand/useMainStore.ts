import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IPoint } from "../types";
import { defaultMatrix } from "@/pages/data";

interface MainStoreState {
  matrix: IPoint[][];
  setMatrix: (newMatrix: IPoint[][]) => void;
}

export const useMainStore = create<MainStoreState>()(
  immer((set) => ({
    matrix: defaultMatrix,

    setMatrix: (matrix: IPoint[][]) =>
      set((state: MainStoreState) => {
        state.matrix = matrix;
      }),
  }))
);
