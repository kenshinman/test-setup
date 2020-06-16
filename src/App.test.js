import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByDataAttribute, testStore } from "../utils";

const setUp = (initiaState = {}) => {
	const store = testStore(initiaState);
	const wrapper = shallow(<App store={store} />)
		.childAt(0)
		.dive();
	return wrapper;
};

describe("App component", () => {
	let wrapper;
	beforeEach(() => {
		const initialState = {
			posts: [
				{ title: "title 1", body: "test body 1" },
				{ title: "title 2", body: "test body 2" },
				{ title: "title 3", body: "test body 3" },
				{ title: "title 4", body: "test body 4" },
			],
		};
		wrapper = setUp(initialState);
	});

	it("Should render without errors", () => {
		const component = findByDataAttribute(wrapper, "appComponent");
		console.log({ component });
		expect(component.length).toBe(1);
	});
});
