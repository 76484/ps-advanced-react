import React from "react";
import PropTypes from "prop-types";
import pickBy from "lodash.pickby";

import ArticleList from "../components/ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;

    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        const regExp = new RegExp(searchTerm, "gi");
        return value.title.match(regExp) || value.body.match(regExp);
      });
    }

    return (
      <>
        <Timestamp />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList articles={articles} />
      </>
    );
  }
}

export default App;
