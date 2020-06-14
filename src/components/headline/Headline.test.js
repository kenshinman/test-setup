import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByDataAttribute, checkProps } from "../../../utils";

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
	//check propTypes
	describe("Check PropTypes", () => {
		it("Should not throw warning", () => {
			const expectedProps = {
				header: "Test Header",
				desc: "test desc",
				tempArray: [
					{
						fName: "Test fName",
						lName: "Test lName",
						email: "test@email.com",
						age: 23,
						onlineStatus: true,
					},
				],
			};
			const propsErr = checkProps(Headline, expectedProps);

			expect(propsErr).toBeUndefined();
		});
	});

	// test when props are passed
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

	//test when there is no prop passed
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
