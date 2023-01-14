import React from "react";

function Entry(props) {
  return (
    <li className="cursor-pointer bg-yellow-300 shadow-sm shadow-black hover:text-lg">{`${props.name} | ${props.age} years `}</li>
  );
}

export default Entry;
