import React from "react";

import storeProvider from "./storeProvider";

class Timestamp extends React.Component {
  static timeDisplay = (timestamp) =>
    new Date(timestamp).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  render() {
    return <div>{this.props.timestampDisplay}</div>;
  }
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

export default storeProvider(extraProps)(Timestamp);
