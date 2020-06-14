import Enzyme, { EnzymeAdapter } from "enzyme";
import EmzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({
	adapter: new EnzymeAdapter(),
	disableLifecycleMethods: true,
});
