import React, { useEffect, useState } from "react";

export default function Effects2() {
  const [WidthCount, setWidthCount] = useState();
  const actualWidth = () => {
    console.log(window.innerWidth)
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
          console.log("add event");
          window.addEventListener("resize", actualWidth);

    return () => {
          console.log("remove Event");
           window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div>
      <h1><p> resizing screen</p></h1>
      <h1> {WidthCount}</h1>
    </div>
  );
}
