npx prettier . --write --check && npx stylelint "**/*.css" --cache --fix && npx eslint . --cache --fix --ext .jsx --ext .js  && npx vitest --update --run