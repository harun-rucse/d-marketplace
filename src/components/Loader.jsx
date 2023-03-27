import React from "react";

function Loader() {
  return (
    <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
}

export default Loader;
