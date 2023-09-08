import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { IPoint, PointType } from "../types";
import { defaultMatrix } from "@/shared/consts.ts/data";

interface MainStoreState {
  matrix: IPoint[][];
  setMatrix: (newMatrix: IPoint[][]) => void;
  resetMatrix: () => void;
  makePlayerMove: (X: number, Y: number) => void;
  isBlocked: boolean;
  setIsBlock: (condition: boolean) => void;
}

export const useMainStore = create<MainStoreState>()(
  immer((set) => ({
    matrix: defaultMatrix,
    isBlocked: false,
    setIsBlock: (condition: boolean) =>
      set((state: MainStoreState) => {
        state.isBlocked = condition;
      }),

    setMatrix: (matrix: IPoint[][]) =>
      set((state: MainStoreState) => {
        state.matrix = matrix;
      }),

    resetMatrix: () =>
      set((state: MainStoreState) => {
        state.matrix = defaultMatrix;
      }),

    makePlayerMove: (X: number, Y: number) =>
      set((state: MainStoreState) => {
        state.matrix[Y][X].type = PointType.player;
      }),
  }))
);
