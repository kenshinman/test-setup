import React from "react";
import App from "./App";
import { shallow } from "enzyme";

test("renders learn react link", () => {
	const app = shallow(<App />);
	const node = app.find(".App");
	expect(node.length).toBe(1);
});
