export default {
	extends: ['gitmoji'],
	rules: {
		// gitmoji rules
		'start-with-gitmoji': [2, 'always'],
		// Use Angular's types
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
				'wip'
			]
		],
		// Content starts with a blank line
		'body-leading-blank': [2, 'always'],
		// Ending starts with a blank line
		'footer-leading-blank': [2, 'always'],
		// The maximum length of the title is 100 characters
		'header-max-length': [2, 'always', 100],
		// Scope is always lowercase
		'scope-case': [2, 'always', 'lower-case'],
		// The title cannot be left blank
		'subject-empty': [2, 'never'],
		// Periods are not allowed
		'subject-full-stop': [2, 'never', '.'],
		// type must be lowercase
		'type-case': [2, 'always', 'lower-case'],
		// type cannot be empty
		'type-empty': [2, 'never']
	}
}
