import {

  Link
} from "react-router-dom";
let carList = ["bmw", "mercedes","audi","lamborghini","ford"];

export const ViewCar = () => {
  return (
    <div>
     <div className="sub-heading"> This page is for viewing cars </div>
     
      <ul>
          {carList.map((item,index)=>{
              return  <li onClick={()=>{
                  console.log(index)
              }}><Link  to={'/available-cars/'+item}>{item}</Link></li>
          })}
       
      </ul>
      <div>There are so many ways to sell your car, it can be overwhelming. At Motorway, we’re focused on building the best way. Unlike your other options, we won’t make you choose between price and convenience – you can have both, with no extra effort. We’ll guide you through the process to get a great result.

Whether it’s your first car or your fiftieth, our smart tech and helpful service make everyone a car selling pro. We’ll find your best offer from our nationwide network of dealers so you get a great offer from someone you can trust. And because dealers pay a fee to buy your car, when you sell with us, it’s always completely free.</div>
    </div>
  );
};

//foreach , map