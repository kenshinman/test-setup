import React from "react";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";

const tempArr = [
	{
		fName: "Test fName",
		lName: "Test lName",
		email: "test@email.com",
		age: 23,
		onlineStatus: true,
	},
];

function App() {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline
					header="Posts"
					desc="This is where your posts are displayed"
					tempArr={tempArr}
				/>
			</section>
		</div>
	);
}

export default App;
