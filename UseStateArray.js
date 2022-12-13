import { useState } from "react";

export default function UseStateArray() {
  let bioData = [
    {
      id: 0,
      myName: "faisal",
      age: 23,
    },
    {
      id: 1,
      myName: "nazir",
      age: 45,
    },
  ];
  const [myArray, setmyArray] = useState(bioData);

  const clearData = () => {
    setmyArray([]);
  };
  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 className="mx-3 my-3 ">
            Name:{curElm.myName} & age:{curElm.age}
          </h1>
        );
      })}
      <button className="  mx-3 btn btn-primary" onClick={clearData}>
         clear
      </button>
    </>
  );
}
