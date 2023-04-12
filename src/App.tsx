import {useState} from 'react';
import Greeting from './components/greeting';

function App() {
	const [count, setcount] = useState(0);

	return (
        <div>
            <Greeting name='world'/>
            <p>Hello, world</p>
            <p>{count}</p>
            <button type='button' onClick={()=>{setcount(count+1)}}>클릭!</button>
        </div>
	);
}

function Demo() {
	return (
        <div>
            <p>Demo123</p>
        </div>
	);
}

export {App, Demo};
