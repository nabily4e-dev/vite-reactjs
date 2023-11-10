import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

import Post from '../Post.jsx'

it('renders correctly', () => {
	const { asFragment } = render(<Post />)

	expect(asFragment()).toMatchSnapshot()
})
