import React, { Fragment, useState } from "react";
import ErrorModal from "./ErrorModal";

function EntryForm(props) {
  const [blankEntry, setBlankEntry] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  function nameChangeHandler(event) {
    setUserInput((prevInput) => {
      return { ...prevInput, name: event.target.value };
    });
  }

  function ageChangeHandler(event) {
    setUserInput((prevInput) => {
      return { ...prevInput, age: event.target.value };
    });
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!userInput.name.trim().length > 0 || !userInput.age.trim().length > 0) {
      setBlankEntry(true);
      return;
    }
    props.onAddEntry(userInput);
    setUserInput({ name: "", age: "" });
  };

  return (
    <Fragment>
      <ErrorModal />
      <form
        onSubmit={formSubmitHandler}
        className=" flex items-center m-auto flex-col space-y-2 w-1/3 bg-yellow-300 shadow-sm shadow-black rounded-sm  text-white"
      >
        <div></div>
        <input
          onChange={nameChangeHandler}
          className="bg-gray-800 border-gray-300 w-2/3 rounded-md h-8 text-center focus:placeholder:text-transparent"
          placeholder="name"
          type={"text"}
          value={userInput.name}
        ></input>
        <input
          onChange={ageChangeHandler}
          className="bg-gray-800 border-gray-300 w-2/3 rounded-md h-8 text-center focus:placeholder:text-transparent"
          type={"number"}
          placeholder="  age"
          min={18}
          max={65}
          value={userInput.age}
        ></input>
        <button className="bg-gray-800 w-fit py-2 px-2 rounded-md hover:bg-gray-900">
          Add Person
        </button>
        <div></div>
      </form>
    </Fragment>
  );
}

export default EntryForm;
