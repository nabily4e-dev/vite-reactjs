import PropTypes from 'prop-types'

const Post = props => {
	return <div>{props.children}</div>
}

Post.PropTypes = {
	children: PropTypes.node
}
export default Post
