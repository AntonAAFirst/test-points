import axios from "axios";
import { MoveResposneType } from "../types";

export const makeMove = async (X: number, Y: number) => {
  const { data } = await axios.post<MoveResposneType>(
    "http://m130.ru:8011/game/move",
    {
      position: { x: X, y: Y },
    }
  );

  return data.payload;
};

export const resetGame = async () => {
  const { data } = await axios.post("http://m130.ru:8011/game/reset");

  return data;
};
