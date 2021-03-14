import { useParams } from "react-router-dom";
import { getAppropriateCarList } from "./utils";

export const CarDetails = () => {
  const { carname } = useParams();

  return (
    <div>
      {" "}
      {getAppropriateCarList(carname).map((item) => {
        return (
          <div style={{ display: "block" }}>
            <img src={"/images/bmw/" + item} />
          </div>
        );
      })}
    </div>
  );
};
