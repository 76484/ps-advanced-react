import React from "react";
import PropTypes from "prop-types";

import storeProvider from "./storeProvider";

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

class Article extends React.PureComponent {
  render() {
    const { article, author } = this.props;
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
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
