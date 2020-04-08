import React from "react";
import PropTypes from "prop-types";
import pickBy from "lodash.pickby";

import ArticleList from "../components/ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";

class App extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  };

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState);
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
        <SearchBar />
        <ArticleList articles={articles} />
      </>
    );
  }
}

export default App;
