import moxios from "moxios";
import { testStore } from "../../utils";
import { fetchPosts } from "../actions";

describe("fetchPosts action", () => {
	//install moxios
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test("Store is updated correctly", () => {
		const expectedState = [
			{ title: "title 1", body: "test body 1" },
			{ title: "title 2", body: "test body 2" },
			{ title: "title 3", body: "test body 3" },
			{ title: "title 4", body: "test body 4" },
		];

		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState,
			});
		});

		return store.dispatch(fetchPosts()).then(() => {
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		});
	});
});
