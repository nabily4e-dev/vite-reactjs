import fs from 'fs'
import path from 'path'

const featuresDir = path.join(process.cwd(), 'src/features')
const features = fs.readdirSync(featuresDir)

/**
 *
 * @type {import('plop').PlopGenerator}
 */
const generator = {
	description: 'Component Generator',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Component name?'
		},
		{
			type: 'list',
			name: 'feature',
			message: 'Which feature does this component belong to?',
			choices: ['ROOT', ...features],
			when: () => features.length > 0
		},
		{
			type: 'input',
			name: 'folder',
			message: 'folder in components',
			when: ({ feature }) => !feature || feature === 'ROOT'
		}
	],
	actions: answers => {
		const componentGeneratePath =
			!answers.feature || answers.feature === 'ROOT'
				? 'src/components/{{folder}}'
				: 'src/features/{{feature}}/components'

		return [
			{
				type: 'add',
				path: componentGeneratePath + '/{{properCase name}}/index.js',
				templateFile: 'generators/component/index.js.hbs'
			},
			{
				type: 'add',
				path:
					componentGeneratePath +
					'/{{properCase name}}/{{properCase name}}.jsx',
				templateFile: 'generators/component/Component.jsx.hbs'
			},
			{
				type: 'add',
				path:
					componentGeneratePath +
					'/{{properCase name}}/{{properCase name}}.module.css',
				templateFile: 'generators/component/Component.module.css.hbs'
			},
			{
				type: 'add',
				path: 'src/components/{{folder}}/{{properCase name}}/__tests__/{{properCase name}}.spec.jsx',
				templateFile: 'generators/component/Component.spec.jsx.hbs'
			},
			{
				type: 'add',
				path:
					componentGeneratePath +
					'/{{properCase name}}/{{properCase name}}.stories.jsx',
				templateFile: 'generators/component/Component.stories.jsx.hbs'
			}
		]
	}
}

export default generator
