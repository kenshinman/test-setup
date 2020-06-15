import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers";
import { middlewares } from "../src/createStore";

export const findByDataAttribute = (component, attr) => {
	return component.find(`[data-test="${attr}"]`);
};

export const checkProps = (component, expectedProps) => {
	return checkPropTypes(
		component.propTypes,
		expectedProps,
		"props",
		component.name
	);
};

export const testStore = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initialState);
};
