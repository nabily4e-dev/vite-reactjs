import HelloWorld from './HelloWorld.jsx'

const meta = {
	title: 'HelloWorld',
	component: HelloWorld,
	tags: ['hello world']
}

export default meta

export const Base = {
	args: {
		msg: 'Welcome ^^'
	}
}
