import React from "react";
import { fakeUseState } from "../fakeHooks";

function Card({ color, cardName }) {
//   const { setValue, value } = fakeUseState();

const [count,setCount] =useState();
const [num1,setNum1] =useState();

const {setValue, value} =fakeUseState();
const {setValue : setNum3, value:num3} =fakeUseState();

  return <div className={`${color} w-40 h-60`}>{cardName}</div>;
}

export default Card;