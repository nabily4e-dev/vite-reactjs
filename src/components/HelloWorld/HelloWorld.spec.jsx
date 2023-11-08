import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HelloWorld from './HelloWorld.jsx'

describe('HelloWorld', () => {
	it('renders the component correctly', () => {
		// a screenshot test
		const { asFragment } = render(<HelloWorld msg='Hello React!' />)

		expect(asFragment()).toMatchSnapshot()
	})
	it('should render a msg', () => {
		// arrange
		render(<HelloWorld msg='Hello React!' />)

		// act
		const title = screen.getByTestId('title')

		// assert
		expect(title.textContent).to.include('Hello React!')
	})
})
