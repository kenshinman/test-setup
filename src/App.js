import React from "react";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";

function App() {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline
					header="Posts"
					desc="This is where your posts are displayed"
				/>
			</section>
		</div>
	);
}

export default App;
