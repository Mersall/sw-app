import React from "react";
import renderer from "react-test-renderer";
import InfoComponent from "../component/InfroComponent";

test("renders correctly", async () => {
  const tree = renderer.create(<InfoComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
