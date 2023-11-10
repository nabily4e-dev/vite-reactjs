import Post from './Post.jsx'

export default {
	title: 'Components/Post',
	component: Post,
	parameters: {
		controls: { expanded: true }
	}
}

const Template = props => <Post {...props}>Hello</Post>

export const Default = Template.bind({})
Default.args = {}
