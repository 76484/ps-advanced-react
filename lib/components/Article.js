import React from "react";

const dateDisplay = (dateString) => new Date(dateString).toDateString();

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
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
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
