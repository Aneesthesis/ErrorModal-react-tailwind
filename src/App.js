import React, { useState } from "react";
import EntryForm from "./Components/EntryForm";
import Entries from "./Components/Entries";
import Footer from "./Components/Footer";

function App() {
  const [entries, setEntries] = useState([
    { id: "e1", name: "Shifa", age: 11 },
    { id: "e2", name: "Shazia", age: 10 },
  ]);

  function addEntryHandler(newEntry) {
    setEntries((prevEntries) => [
      ...prevEntries,
      {
        id: Math.random().toString(),
        name: newEntry.name,
        age: newEntry.age,
      },
    ]);
    console.log(entries);
  }
  return (
    <div className="box-border h-screen bg-gray-800 z-10">
      <h1 className=" text-center text-2xl text-white font-thin py-4 hover:underline cursor-not-allowed">
        Id Register
      </h1>
      <EntryForm onAddEntry={addEntryHandler} />
      <Entries entries={entries} />
      <Footer />
    </div>
  );
}
export default App;
