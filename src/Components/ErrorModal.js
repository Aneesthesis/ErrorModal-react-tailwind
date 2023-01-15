import React from "react";

function ErrorModal(props) {
  return (
    <div
      className={`${
        !props.isActive && "hidden"
      } flex items-center m-auto flex-col space-y-2 w-1/3 shadow-sm shadow-black  text-white`}
    >
      <div className="backdrop fixed  backdrop-blur-sm w-screen h-screen z-20 border-l-gray-500"></div>
      <div className="modal absolute mx-3 bg-transparent w-1/4 h-auto  z-50 text-white text-center overflow-hidden rounded-md">
        <h1 className="bg-gray-800  text-red-600 font-semibold">
          An Error Occured
        </h1>
        <p className="bg-gray-800 text-red-600 mb-2">Entries can't be blank</p>
        <button
          className="bg-gray-700 px-2 py-1 rounded-sm"
          onClick={props.onClick}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
