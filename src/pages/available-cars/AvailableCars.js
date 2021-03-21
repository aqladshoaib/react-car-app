import { useParams } from "react-router-dom";
import { getAppropriateCarList } from "./utils";

export const AvailableCars = () => {
  const { carname } = useParams();

  return (
    <div>
      {" "}
      {getAppropriateCarList(carname).map((item) => {
        return (
          <div style={{ display: "block" }}>
            <img  width="800" height="400" src={process.env.PUBLIC_URL+"/images/"+item } />
          </div>
        );
      })}
    </div>
  );
};
