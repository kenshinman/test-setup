export const findByDataAttribute = (component, attr) => {
	return component.find(`[data-test="${attr}"]`);
};
