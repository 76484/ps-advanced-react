import React from "react";

import ArticleList from "../components/ArticleList";

class App extends React.Component {
  state = this.props.store.getState();

  articleActions = {
    lookupAuthor: (authorId) => {
      return this.state.authors[authorId];
    },
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
