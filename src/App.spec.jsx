import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

import App from './App.jsx'

it('renders correctly', () => {
	const { asFragment } = render(<App />)

	expect(asFragment()).toMatchSnapshot()
})
