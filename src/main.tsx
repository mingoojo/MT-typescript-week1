import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, Demo} from './App';

const element = document.getElementById('root');
const element2 = document.getElementById('Demo');

// If (!element || !element2) {
//   return;
// }

if (element && element2) {
	const root = ReactDOM.createRoot(element);
	const root2 = ReactDOM.createRoot(element2);

	const count = 0;

	root.render((<App />));
	root2.render((<Demo/>));
}

// Function main() {
// }

// main();
