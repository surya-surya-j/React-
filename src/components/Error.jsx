import React from "react";
import { useRouteError } from "react-router-dom";


function Error() {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS Something Went Wrong</h1>
      <h1>
        {err.status}:{err.stautsText}
      </h1>
    </div>
  );
}

export default Error;
