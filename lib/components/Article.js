import React from "react";
import PropTypes from "prop-types";

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
  const { article, store } = props;
  const author = store.lookupAuthor(article.authorId);
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

Article.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
