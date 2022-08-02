import React from "react";
import blogData from "../data/blog";
import Headers from "./Header";
import About from "./About";
import Articles from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Headers name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <Articles posts={blogData.posts} />
    </div>
  );
}

export default App;
