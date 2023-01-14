import React from "react";

function ErrorModal() {
  return (
    <div>
      <div className="backdrop w-screen h-screen z-20"></div>
      <div className="w-1/4 m-auto h-auto p-4 z-50 text-white">
        <p>Entries can't be blank</p>
        <button>Okay!</button>
      </div>
    </div>
  );
}

export default ErrorModal;
