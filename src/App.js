import React from "react";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import SharedButton from "./components/button";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";
import ListItem from "./components/listItem";

const tempArr = [
	{
		fName: "Test fName",
		lName: "Test lName",
		email: "test@email.com",
		age: 23,
		onlineStatus: true,
	},
];

function App({ fetchPosts, posts }) {
	const doFetch = () => {
		fetchPosts()
	};

	const configButton = {
		buttonText: "Fetch Posts",
		emitEvent: doFetch,
	};

	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline
					header="Posts"
					desc="This is where your posts are displayed"
					tempArr={tempArr}
				/>
				<SharedButton {...configButton} />
				{posts.length > 0 && (
					<div>
						{posts.map((post, index) => {
							const {title, body} = post;
							const configListItem = {
								title, desc: body
							};

							return <ListItem key={index} {...configListItem} />
						})}
					</div>

				)}
			</section>
		</div>
	);
}

const mapStateToProps = (state) => ({
	posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
