import React from 'react';

function App(props) {
	return <div>
		<div>{props.count}</div>
		<button>increment</button>
		<button>decrement</button>
	</div>;
}

export default App;
