import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByDataAttribute } from "../../../utils";

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe("Header Component", () => {
	let component;

	beforeEach(() => {
		component = setUp();
	});

	it("Should rener without errors", () => {
		const wrapper = findByDataAttribute(component, "headerComponent");
		expect(wrapper.length).toBe(1);
	});

	it("should render a logo", () => {
		const wrapper = findByDataAttribute(component, "logoImg");
		expect(wrapper.length).toBe(1);
	});
});
