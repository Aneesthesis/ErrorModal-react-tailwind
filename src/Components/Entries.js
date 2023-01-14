import React from "react";
import Entry from "./Entry";

function Entries(props) {
  return (
    <ul className="mt-5 space-y-1  w-1/3 m-auto text-center font-medium">
      {props.entries.map((entry) => (
        <Entry key={entry.id} id={entry.id} name={entry.name} age={entry.age} />
      ))}
    </ul>
  );
}

export default Entries;
