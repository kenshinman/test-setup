import React from "react";
import { shallow } from "enzyme";
import { findByDataAttribute, checkProps } from "../../../utils";
import SharedButton from ".";

describe("ShareButton Component", () => {
	//check proptypes
	describe("checking proptypes", () => {
		it("Should not throw warning", () => {
			const expectedProps = {
				buttonText: "Test Button Text",
				emitEvent: () => {},
			};

			const propsError = checkProps(SharedButton, expectedProps);

			expect(propsError).toBeUndefined();
		});
	});

	describe("should render a button", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				buttonText: "Test Button Text",
				emitEvent: () => {},
			};
			wrapper = shallow(<SharedButton {...props} />);
		});

		it("should render a button", () => {
			const button = findByDataAttribute(wrapper, "buttonComponent");
			expect(button.length).toBe(1);
		});
	});
});
