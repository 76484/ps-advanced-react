import React from "react";

import ArticleList from "../ArticleList";
import Article from "../Article";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: {
        id: "a",
      },
      b: {
        id: "b",
      },
    },
  };

  it("renders correctly", () => {
    const wrapper = shallow(<ArticleList articles={testProps.articles} />);

    expect(wrapper.find("ArticleContainer").length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});
