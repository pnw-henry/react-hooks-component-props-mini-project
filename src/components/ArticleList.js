import React from "react";
import ArticleItem from "./Article";

function Articles({ posts }) {
  const entries = posts.map((post) => {
    return (
      <ArticleItem
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main id="main">{entries}</main>;
}

export default Articles;
