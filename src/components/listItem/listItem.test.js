import React from "react";
import { shallow } from "enzyme";
import { findByDataAttribute, checkProps } from "../../../utils";
import ListItem from "./";

describe("ListItem  Component", () => {
	describe("Checking PropTypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				title: "Test title",
				desc: "Test description",
			};

			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe("Component renders", () => {
		let wrapper;

		beforeEach(() => {
			const props = {
				title: "Test title",
				desc: "Test description",
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it("renders sithout error", () => {
			const component = findByDataAttribute(wrapper, "listItemComponent");
			expect(component.length).toBe(1);
		});

		it("should render a title", () => {
			const title = findByDataAttribute(wrapper, "title");
			expect(title.length).toBe(1);
		});
		it("should render a description", () => {
			const desc = findByDataAttribute(wrapper, "desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("should NOT render", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				desc: "description long",
			};

			wrapper = shallow(<ListItem {...props} />);
		});

		it("should not render", () => {
			const title = findByDataAttribute(wrapper, "title");
			expect(title.length).toBe(0);
		});
	});
});
