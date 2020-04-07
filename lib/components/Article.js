import React from "react";

const styles = {
  article: {
    borderBottomColor: "#aaa",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  author: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  body: {
    paddingLeft: 20,
  },
  date: {
    color: "#888",
    fontSize: "0.85em",
  },
  title: {
    fontWeight: "bold",
  },
};

const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{article.date}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;
