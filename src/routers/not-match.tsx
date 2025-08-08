import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

const NotMatch: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || "Unknown error occurred"}</i>
      </p>
    </div>
  );
};
export default NotMatch;
