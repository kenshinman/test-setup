import React from "react";
import { shallow, simulate } from "enzyme";
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
		let mockFunc;
		beforeEach(() => {
			mockFunc = jest.fn();
			const props = {
				buttonText: "Test Button Text",
				emitEvent: mockFunc,
			};
			wrapper = shallow(<SharedButton {...props} />);
		});

		it("should render a button", () => {
			const button = findByDataAttribute(wrapper, "buttonComponent");
			expect(button.length).toBe(1);
		});

		it("should emit callback onclick event", () => {
			const button = findByDataAttribute(wrapper, "buttonComponent");
			button.simulate("click");
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		});
	});
});
