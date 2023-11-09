export default {
	'*.{js,jsx,css}': ['prettier . --write --check'],
	'*.css': 'stylelint "**/*.css" --cache --fix',
	'*.{js,jsx}': [
		'eslint . --cache --fix --ext .jsx --ext .js',
		() => 'yarn test:u'
	]
}
