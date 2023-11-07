import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HelloWorld from './HelloWorld.jsx'

describe('HelloWorld', () => {
	it('randers the component correctly', () => {
		// a screenshot test
		const { asFragment } = render(<HelloWorld msg='Hello React!' />)

		expect(asFragment()).toMatchSnapshot()
	})
	it('should renders a msg', () => {
		// arrange
		render(<HelloWorld msg='Hello React!' />)

		// act
		const title = screen.getByTestId('title')

		// assert
		expect(title).toHaveTextContent(/Hello React!/i)
	})
})
