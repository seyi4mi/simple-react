import React, { useState } from "react"
import "./App.css"
// Import Components

function App() {
	//Write javascript here
	const [counter, setCounter] = useState(0)
	const [toggle, setToggle] = useState(false)

	const incrementer = () => {
		setCounter(counter + 1)
		console.log(counter)
	}

	const toggler = () => {
		setToggle((prev) => !prev)
	}

	return (
		<div className="App">
			<h1 className={toggle ? "active" : ""}>Hello React</h1>
			<h2>Counter {counter}</h2>
			<button onClick={incrementer}>Click</button>
			<button onClick={toggler}>Toogle</button>
		</div>
	)
}

export default App
