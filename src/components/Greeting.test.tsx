import {render, screen} from '@testing-library/react';
import Greeting from './greeting';

test('greeting', () => {
	render(<Greeting name='world'/>);

	screen.getByText('Hello, world');
	screen.getByText(/Hi,/);
});
