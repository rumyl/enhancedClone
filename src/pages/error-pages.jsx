import React from 'react';
import MyImage from "../assets/images/error.gif"
import { useRouteError } from "react-router-dom";




export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={MyImage} alt="My Image" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}