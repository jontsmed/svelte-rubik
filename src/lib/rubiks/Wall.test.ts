import Wall from './Wall.svelte';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('Test wall', () => {
	it('should render with background color and size from props', () => {
		const backgroundColor = 'blue';
		const height = '150px';
		const width = '150px';
		render(Wall, { props: { backgroundColor, height, width } });
		const wall = screen.getByTestId('wall');
		expect(wall).toBeInTheDocument();
		expect(wall).toHaveStyle('background-color: blue');
		expect(wall).toHaveStyle('height: 150px');
		expect(wall).toHaveStyle('width: 150px');
	});
});
