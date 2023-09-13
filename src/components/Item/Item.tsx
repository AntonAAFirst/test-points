import axios from "axios";
import cls from "./item.module.scss";
import cn from "classnames";
import { makeMove, resetGame } from "@/shared/http";
import { IPoint, PointStatus, PointType } from "@/shared/types";
import { useMainStore } from "@/shared/zustand/useMainStore";

interface ItemProps {
  index: boolean;
  point: IPoint;
  coordinate: { x: number; y: number };
}

export const Item = ({ index, coordinate, point }: ItemProps) => {
  const { setMatrix, makePlayerMove, matrix, setIsBlock, isBlocked } =
    useMainStore();

  console.log("updated", JSON.stringify(coordinate));

  const request = async () => {
    if (point.type === PointType.empty && !isBlocked) {
      makePlayerMove(coordinate.x, coordinate.y);

      setIsBlock(true);
      const answer = (await makeMove(coordinate.x, coordinate.y))
        .matrixAfterOpponentMoved;

      console.log("that's matrix - ", matrix);

      setMatrix(answer);
      setIsBlock(false);
    } else if (!isBlocked) {
      alert("Поле занято");
    }
  };

  return (
    <div
      onClick={request}
      className={cn(cls.testClass, {
        [cls.reset]: index,
        [cls.playerType]: point.type === PointType.player,
        [cls.opponentType]: point.type === PointType.opponent,
        [cls.emptyType]: point.type === PointType.empty,
        [cls.blockedType]: isBlocked && point.type !== PointType.empty,
      })}
    >
      <div
        className={cn(cls.f, {
          [cls.capturingBottomRight]:
            matrix[coordinate.y][coordinate.x].status ===
              PointStatus.capturing &&
            matrix[coordinate.y + 1][coordinate.x + 1].status ===
              PointStatus.capturing,
        })}
      ></div>

      <div
        className={cn(cls.f, {
          [cls.capturingBottomLeft]:
            matrix[coordinate.y][coordinate.x].status ===
              PointStatus.capturing &&
            matrix[coordinate.y + 1][coordinate.x - 1].status ===
              PointStatus.capturing,
        })}
      ></div>
    </div>
  );
};
