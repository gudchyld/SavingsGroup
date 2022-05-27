import React from "react";



export default function Table(props) {

  let interest;
  if (props.amount == 10000){
    interest = 700;
  }else if(props.amount == 20000){
    interest = 2400;
  }else{
    interest = 7500;
  }

  let amountObtainable;
  if (props.amount == 10000){
    amountObtainable = 10700;
  }else if(props.amount == 20000){
    amountObtainable = 22400;
  }else{
    amountObtainable = 37500;
  }


  return (
    <div className="Table">
      <div className="T-1">{props.name}</div>
      <div className="T-2">{props.amount}</div>
      <div className="T-3">{interest}</div>
      <div className="T-4">{amountObtainable}</div>
      
    </div>
  );
}
