import axios from "axios";
import cls from "./item.module.scss";
import cn from "classnames";
import { makeMove, resetGame } from "@/shared/http";
import { IPoint, PointType } from "@/shared/types";
import { useMainStore } from "@/shared/zustand/useMainStore";

interface ItemProps {
  index: boolean;
  point: IPoint;
  coordinate: { x: number; y: number };
}

export const Item = ({ index, coordinate, point }: ItemProps) => {
  const { setMatrix } = useMainStore();

  const request = async () => {
    const answer = (await makeMove(coordinate.x, coordinate.y))
      .matrixAfterOpponentMoved;

    setMatrix(answer);
  };

  return (
    <div
      onClick={request}
      className={cn(cls.testClass, {
        [cls.reset]: index,
        [cls.playerType]: point.type === PointType.player,
        [cls.opponentType]: point.type === PointType.opponent,
        [cls.emptyType]: point.type === PointType.empty,
      })}
    ></div>
  );
};
