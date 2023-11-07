import { useState } from 'react'

import styles from './HelloWorld.module.css'

export default function HelloWorld(props) {
	const [count, setCount] = useState(0)

	const increment = () => setCount(prevCount => prevCount + 1)

	return (
		<div className={styles.HelloWorld}>
			<h1 data-testid='title'>{props.msg}</h1>

			<p>
				Recommended IDE setup:{' '}
				<a
					href='https://code.visualstudio.com/'
					rel='noreferrer'
					target='_blank'
				>
					VSCode
				</a>
			</p>

			<p>
				See <code>README.md</code> for more information.
			</p>

			<p>
				<a
					href='https://vitejs.dev/guide/features.html'
					rel='noreferrer'
					target='_blank'
				>
					Vite Docs
				</a>{' '}
				|{' '}
				<a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
					React Docs
				</a>
			</p>

			<button type='button' onClick={increment}>
				count is: {count}
			</button>
			<p>
				Edit <code>components/HelloWorld/HelloWorld.jsx</code> to test hot
				module replacement.
			</p>
		</div>
	)
}
