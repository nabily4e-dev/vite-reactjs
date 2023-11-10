# Commit Messages Best Practices

## Conventional Commits

Conventional Commits is a specification for adding human and machine-readable
meaning to commit messages. It uses a structured format to help manage versions
and release notes.

A conventional commit message looks like this:

```html
<type>(<scope>): <short summary>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

* `<type>`: Describes the type of change. Common types include `feat`
(feature), `fix` (bug fix), `docs` (documentation), `style` (formatting,
missing semi-colons, etc.), `refactor`, `test`, `chore`, etc.
* `<scope>`: The scope of the change. This is optional and can be anything
specifying the place of the commit change.
* `<short summary>`: A brief description of the changes.
* `<body>`: Detailed description of changes. This is optional.
* `<footer>`: Any associated issue references or metadata. This is optional.

## Commitlint

Commitlint is a tool to enforce commit message format. It helps maintain a
consistent commit style across the project. You can configure commitlint by
adding a `commitlint.config.js` file in your project root.

Here's a basic example:

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

## Gitmoji

Gitmoji is an initiative to standardize and explain the use of emojis on GitHub
commit messages. Using emojis on commit messages provides an easy way of
identifying the purpose or intention of a commit.

Here's an example of a gitmoji commit message:

:sparkles: feat(user-model): add email verification

In this project, we're enforcing gitmoji commit messages. If a commit message
does not follow the correct format, an error will be returned from the CLI.

## Useful Links

* [Conventional Commits](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
* [Commitlint](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
* [Gitmoji](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)

Remember, writing good commit messages is important for maintaining a readable
history. It's not just for you but for others who may work on your project as
well.
