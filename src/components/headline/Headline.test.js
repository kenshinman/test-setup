import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByDataAttribute } from "../../../utils";

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
	describe("Component with props", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: "Test",
				desc: "Desc",
			};

			wrapper = setUp(props);
		});

		it("renders without errors", () => {
			const component = findByDataAttribute(wrapper, "header");
			expect(component.length).toBe(1);
		});

		it("should render a h1", () => {
			const h1 = wrapper.find("h1");
			expect(h1.length).toBe(1);
		});
		it("should render a desc", () => {
			const desc = findByDataAttribute(wrapper, "desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("Component with no props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it("should not render", () => {
			const component = findByDataAttribute(wrapper, "header");
			expect(component.length).toBe(0);
		});
	});
});
