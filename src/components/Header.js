import React from "react";

function Headers({ name }) {
  const blogName = name;
  return (
    <header id="header">
      <h1>{blogName}</h1>
    </header>
  );
}

export default Headers;
