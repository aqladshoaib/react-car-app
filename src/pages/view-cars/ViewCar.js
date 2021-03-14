import {

  Link
} from "react-router-dom";
let carList = ["bmw", "mercedes","audi","lambhorghini","ford"];

export const ViewCar = () => {
  return (
    <div>
      This page is for viewing flowers
      <ul>
          {carList.map((item,index)=>{
              return  <li onClick={()=>{
                  console.log(index)
              }}><Link  to={'/car-detail/'+item}>{item}</Link></li>
          })}
       
      </ul>
    </div>
  );
};

//foreach , map