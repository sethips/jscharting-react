import React from 'react';
import { JSCLabel } from '../dist/jscharting-react.es';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('JSCLabel unit tests', () => {
	const options = '<b>JSCLabel test string</b>';

	test('JSCLabel is rendered', () => {
		const { getByText } = render(<JSCLabel options={options} />);
		expect(getByText('JSCLabel test string')).toBeInTheDocument();
	});

	test('Label style is set correctly', () => {
		const { container } = render(<JSCLabel options={options} />);
		var renderedString =
			'<text><tspan x="0px" font-weight="bold" style="white-space: pre">JSCLabel test string</tspan></text>';
		expect(container.innerHTML.indexOf(renderedString) > -1).toBeTruthy();
	});

	test('Label should be destroyed after component is unmounted.', () => {
		const { unmount, container } = render(<JSCLabel options={options} />);
		unmount();
		expect(container.innerHTML).toBe('');
	});
});
