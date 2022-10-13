import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"

import hogs from "../porkers_data";
// console.log('Here is my data from App: ', hogs)

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;
