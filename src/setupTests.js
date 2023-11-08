// setupTests.js

// This file is used to configure the testing environment.
// It's run before each test file execution.import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
	cleanup()
})
