import { Item } from "@/components/Item/Item";

import cls from "./about.module.scss";
import axios from "axios";
import { resetGame } from "@/shared/http";
import { defaultMatrix } from "./data";
import { useMainStore } from "@/shared/zustand/useMainStore";

interface MyType {
  id: number;
  value: number;
}

export const getServerSideProps = () => {
  return { props: {} };
};

const About = () => {
  // const matrix: number[][] = Array.from({ length: 20 }, (_, rowIndex) =>
  //   Array.from({ length: 20 }, (_, colIndex) => rowIndex * 20 + colIndex + 1)
  // );

  const { matrix } = useMainStore();

  return (
    <>
      <div
        onClick={async () => console.log(await resetGame())}
        style={{
          border: "2px solid yellow",
          width: "200px",
          height: "80px",
          fontFamily: "Inter",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        click here
      </div>
      <div
        style={{
          display: "flex",
          left: "50%",
          flexDirection: "column",
          position: "absolute",
          top: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        }}
        // className={cls.field}
      >
        {matrix.map((matrixItem, firstIndex) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // border: "3px solid yellow",
            }}
            key={firstIndex}
          >
            {matrixItem.map((item, secondIndex) => (
              <Item
                point={item}
                coordinate={{ x: firstIndex, y: secondIndex }}
                index={firstIndex === 19 || secondIndex === 19}
                key={secondIndex}
                // key={item}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
