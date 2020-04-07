import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import config from "config";
import StateApi from "state-api";
import App from "components/App";

const serverRender = async () => {
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(response.data);

  return {
    initialData: response.data,
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
  };
};

export default serverRender;
