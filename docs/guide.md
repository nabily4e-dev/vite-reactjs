# Technical Manual

### **Expectations**

_The capstone projects have three primary goals for your growth as a developer. These are simultaneously goals and expectations; failure to conduct yourself in a manner becoming of attaining these goals will affect the evaluation of your performance in the project._

In other words, you will be evaluated in this project exactly as you would be evaluated at a real developer job.

1. **Understanding teamwork.** In this project, you will be working on a codebase from scratch with 3-4 other teammates; you will have to deal with a common codebase, code reuse, merge conflicts, and intrateam communication.
2. **Behaving professionally. Do not miss or be tardy to meetings.** Do not miss deadlines without communicating in advance to your team that there will be a delay.
3. **Producing high-quality work.** Attention to detail is a crucial aspect of distinguishing yourself as a developer. This means both code detail and design detail. View your work as an outsider would: does it look like professional work that you see in other sites?

### **Tooling**

#### **Github**

- We will use Github to collaborate, review and manage the codebase of the projects. We are going to follow this [article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for the workflow.

A little disclaimer about the workflow mentioned in the article: Generally, companies use both _main_ and _develop_ branches. Usually, _develop_ branch is mapped to a test deployment server where features are tested before being deployed to production, and the _main_ branch is mapped to the production deployment server. Also, _main_ branch maintains a compressed version history, while _develop_ maintains a full version history of all commits.

~~For the capstone project purpose, we have simplified the workflow with one branch only - the _main_ branch. So all individual branches must be created from and merged into _main_. CI automation will also be set up to run checks when a PR is opened into the _main_ branch.~~

#### **Github Project Management**

- Github project management helps project managers and developers coordinate, track, and update their work in one place, so projects stay transparent and on schedule, learn more about [Github project management](https://github.com/features/project-management/).

#### **Github Actions**

- Continuous integration or “CI” is the practice of merging all developers' working copies to a shared mainline several times a day, learn more about CI in this [article](https://www.atlassian.com/continuous-delivery/continuous-integration) and this [Wikipedia page](https://en.wikipedia.org/wiki/Continuous_integration).
- The CI tool we are going to use is Github Actions. Your project's Github repository will be setup with a workflow that runs linting and formatting checks along with unit tests each time a pull request is opened into the main branch.
- You will also have a local CI setup on your project repository using Husky, which will run a pre-commit check for linting and formatting and a pre-push check for linting, formatting, and unit tests.

#### **Vercel**

- Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with our workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration. Learn more about Vercel [here](https://vercel.com/).
- After the first 2-3 weeks of coding, when the team's project has reached a stable state, a lead engineer will set up a Vercel account with git-based deployment. You can follow this [guide](https://vercel.com/docs/git) to understand how to deploy your projects on Vercel using Git.
- Optionally, we can deploy our application as a Docker container on the cloud. Vercel supports Docker deployment, learn more about it [at](https://vercel.com/guides/does-vercel-support-docker-deployments).

#### **MongoDB Atlas**

- MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, running, and scaling MongoDB in the cloud, in other words, a cloud-based database as a service (DbaaS). Learn more about MongoDB Atlas [here](https://www.mongodb.com/atlas/database).
- Along with the cloud deployment for your backend application on Heroku, your lead engineer will work with you to deploy your MongoDB database on the cloud and connect your backend API to it using a secure connection string.

The other tooling which you are already familiar with includes - **Yarn, ESLint, Prettier and Jest .etc**.

### **Repository Setup**

- You will be provided with the link for your project's repo on Github. It will include some configuration files essential for CI.
- I have sat up the project folder structure, added configuration files and required packages.
- After this, all team members should clone the repo on their local machines.

### **Project structure**

- Try to follow the MVC project hierarchy for your project structure.
- All source code should be inside the `src` folder.
- Test files should end with `.spec.js` and be housed inside `__tests__` folder in the appropriate locations.
- Image files to be used in views can be housed inside a folder called `images` under `public/images`.
- All dependencies inside the `package.json` should be used in the project. Unused dependencies must be removed.
- Your project hierarchy should look something similar to this 👇

```
├── src
    ├── controllers
	├── users.js
        ├── posts.js        ├── __tests__             ├── users.spec.js
    ├── models
        ├── users.js
        ├── posts.js
	├── routes
        ├── users.js
        ├── posts.js
        ├── index.js
    ├── services
        ├── cronJobs.js
        ├── jobProcessor.js
    ├── utils
        ├── email.js
    ├── views
        ├── home.ejs
        ├── styles.css
```

**Tip**: Make sure that the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) are installed on your VSCode for on-the-go lint and formatting checks.

### **Git**

#### **Pull Requests**

Good pull requests, whether patches, improvements or new features are required to keep our project happy, healthy, and wise. They should remain focused in scope and avoid containing unrelated commits.

Here is a summary of the steps to follow:

1. All working branches must be created from the `develop` branch and all pull requests must be made into this branch. Refer the branch naming guidelines below.
   $ git checkout -b <working-branch-name>
2. Make sure to pull all the latest changes regularly to keep your working branch in sync and updated.
   $ git pull origin main
3. Follow the commit message guidelines below while making your commits.
4. [Open a Pull Request](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) with a clear title and description. The title should give an overview of the feature, change or fix while the description must give elaborated details of the same.
5. Make sure to mark at least 2 reviewers on your pull request. This will include the team lead assigned as code reviewer for your team and a peer from your team.
6. For ambitious tasks, open a Draft Pull Request as soon as possible with the `[WIP]` prefix in the title, in order to get continuous feedback and help from the team. Mark the PR as Ready To Merge and remove the prefix when you've completed the task.

Don't forget to pull and merge the main branch frequently into your working branches. While your PR is in review, another PR may get merged into main. Frequent pulls from main ensure that you have all the latest changes from your teammates and avoid too many merge conflicts or dependency issues.

#### **Naming Branches**

1. Use [kebab-case](https://en.wiktionary.org/wiki/kebab_case) while naming your branches. All words must be in lowercase and separated by hyphens with an optional prefix. For example, `login-api` or `feature/login-api` or `fix/login-api`.
2. Always make sure that another team member is not working on a similarly named branch before you create a working branch.

#### **Commit Messages**

#### **1. Clear & Concise Commits**

- Each commit should correspond to a specific functional change.
- Ideally, a commit should not create an inconsistent state (such as test errors, linting errors, partial fix, etc.)
- A complex feature should be broken down into multiple commits as long as each one keeps a consistent state and consists of a self-contained change.
- Avoid using `git add .` or `git commit -am` while committing changes, rather add only the relevant files to your commit.
- Maintain a practice of committing regularly/daily as you cross milestones of your task.
- Make sure you do not add any build files, node_modules, or sensitive config files to your commits.

#### **2. Commit message format**

A commit must be one of the types mentioned in this simplified [article](https://daily-dev-tips.com/posts/git-basics-conventional-commits/):

- **Build**: Changes that affect the build system or external dependencies (examples: Dockerfile, docker-compose.yml, package.json)
- **CI**: Changes to our CI configuration files and scripts (examples: .eslintrc.json, .prettierrc.json, .lintstagedrc)
- **Chore**: Routine tasks that do not change the functionality of the application but are necessary for the regular operation of the software
- **Doc**: Documentation only changes (example: README.md)
- **Feat**: A new feature
- **Fix**: A bug fix
- **Perf**: A code change that improves performance
- **Refactor**: A code change that neither fixes a bug nor adds a feature, but refactors a previous piece of code
- **Revert**: Undoing the changes made by a specific commit. Or return to a previous state of the code.
- **Style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **Test**: Adding missing tests or correcting existing tests

A good commit message starts with one of the following verbs:

- **add**: feature x
- **remove**: feature y
- **update**: feature z
- **refactor**: function x
- **fix**: crazy bug
- **revert**: previous change

Or any other verb that clearly indicates the type of change being made.

_Always use the verbs in **Imperative Present** tense_. Don’t use Past or Present Continuous tenses for commits.

- add feature xyz ✔️
- added feature xyz ❌
- adds feature xyz ❌
- adding feature xyz ❌

_Don’t capitalize the **first letter of the verb** and **no dot (.) at the end** of the commit message._

So your final commit message will look like these:

- Feat: add login routes
- Fix: update user model
- Test: add unit tests for user controller
- ... and so on

#### **3. Commit Author**

Make sure your name and email ID are configured correctly in your git config so that your commits are authored correctly.

To check if the user name and email is set correctly

$ git config user.name $ git config user.email

To set a user name or email

$ git config --global user.name "Your Name" $ git config --global user.email "youremail@gmail.com"

Omit the `--global` flag if you prefer setting this on a per-project basis.

#### **4. Verified Commit Author**

To ensure the integrity of your work and to prevent forgery, GitHub allows you to sign your commits using GPG. A signed commit lets others know that the changes come from a trusted source.

To set up a GPG key and start signing your commits, follow the instructions in this [GitHub guide](https://docs.github.com/en/authentication/managing-commit-signature-verification).

Once you've set up, you can check if your commits are signed by looking for the 'verified' label on your commits in GitHub.

#### **5. Tagging Issues**

If your commit is related to an existing issue listed on the repo, you can tag it using the issue number in your commit message. For example, `fix wrong password login bug #23` where 23 is the related issue number.

If your commit completely fixes or resolves an existing issue listed on the repo, you can auto-close it with a reference. For example, `fix wrong password login bug, close #23`.

You can also link your pull requests to issues instead of your commits. You can [link issues manually](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#manually-linking-a-pull-request-to-an-issue) once you've opened a pull request.

### **The Code**

- The code should be totally clean and checked line by line before committing and pushing.
- You shouldn't leave any unnecessary comments in the code.
- Don't leave any console log statements inside the code.
- All variables should be `const` except for specific cases where you will need to use `let.`
- Variables should use the [camelCase](https://en.wikipedia.org/wiki/Camel_case) naming convention.
- Make sure your naming is right and not confusing i.e. the `Navbar` shouldn't be named `header` or when you fetch `movies` your function should return `movies` not `data.`
- Make sure you clean your imported modules or files that you don't use before committing. The same goes for any variable, function, or piece of code not used.
- Don't repeat yourself (DRY). Make sure the code you write is reusable and reduces repetition as much as possible. For example, don't write two functions that do the same or almost the same job. R*ead more about DRY [here](https://en.wikipedia.org/wiki/Don't_repeat_yourself).*
- There are some further good programming principles that we will focus on during our work. _You can read more about these principles [here](https://github.com/seyna/awesome-programming-principles)._

### **Code Reviews**

Every piece of code that is merged in needs to be reviewed. Ideally, it will also have a test, that will indicate to the reviewer both what the purpose of the code is and provide safety while five people simultaneously work on the codebase.

Each piece of code will have at least two reviewers; you are required to assign them. One is a mentor; the other is one of your teammates.

If you are requested to review someone's code, please review it **within 1 business day**.

If you are requested to change something about the code, please change it **within 1 business day**.

You may optionally have a discussion within your team on these topics. **_Failure to read these will immediately be evident in the way that your code reviews are sent_** and consequently will affect your evaluation.

We would like to emphasize a few particular points:

- **Isolation and small changes:** Please make merge requests isolated (a merge request should ideally not really do more than one thing at once, the exception being some of the initial ones to set up the repo).
- **Timeliness**: If your work is due at the end of a sprint, note that a code review can take three to four reviews to get in. At 24 hours per round of back and forth, this means that _waiting on a code review is not an excuse for missing a deadline!_
  - When something is due on Wednesday, it does not mean that you sent out a code review by Wednesday. It means that you wrote code of approval-quality that was merged into the repo on Wednesday.
- **Accepting feedback:** Do not take code review personally. Learn from your mistakes and improve. Never repeat the same mistake more twice.

**Further Readings**

- [Google Code Review (overview)](https://google.github.io/eng-practices/review/)
- [Google Code Review (developer)](https://google.github.io/eng-practices/review/developer/)
- [Google Code Review (reviewer)](https://google.github.io/eng-practices/review/reviewer/)
- [Magic numbers](https://www.pluralsight.com/tech-blog/avoiding-magic-numbers/)

### **Testing**

#### **Why test?**

There are many reasons to have automated tests in your repository, which you have already learned abd read about. Some of the salient ones:

- **Code safety:** In addition to simply knowing that the code works, developers feel safe changing other people's code and knowing what will happen; if something is changed badly, a test will break.
- **Ease of review:** When reviewing a merge request, the reviewer can understand exactly what was changed by looking at the tests.
- **Self-documentation:** Tests are a form of self-documentation on what the expected behavior of the code is.

#### **The Process**

Ideally, every code review should have a test. With the exception of boilerplate code, **no code reviews for new features will be accepted without a corresponding test file.** Practice test-driven development as you work on your assigned tasks.

### **Bug Bash and Quality Standards**

#### **What is a bug bash?**

In the later weeks of the projects, as you've fleshed out a working project, frequent [bug bashes](https://en.wikipedia.org/wiki/Bug_bash) will be required. A bug bash is what it sounds like: everyone meets (together), sits down to "bash" the application and records a list of bugs and fixes.

In a bug bash, you should be inspecting your application with immense detail. The evaluation should be quite harsh and focus on all the nitty-gritty and edge cases.

It should be noted that at a normal company a bug bash would be performed with all groups of people (product managers, designers, engineers, managers, etc.); in this case, the responsibility will fall upon you to objectively evaluate your app. Your lead engineer may join for some bug bashes.

#### **When do we bug bash?**

It should be done **at a minimum once a week** during the two weeks approaching demo day. However, you may feel free to do it earlier in the project timeline or more frequently each week.

---

### **Sprint Planning and Meeting Dynamic**

- The team with the lead engineer will have sprint planning at the beginning of the week, and a retrospective at the end of it.
- Github project management will be used for sprint planning.
- The team with the lead engineer will have daily standups, 2 calls, and 3 on slack.
- The standups should be short and straightforward, e.g. answers to the questions: what did you do yesterday, what are you working on today, and what blockers are you facing without talking about how to solve the blockers.
- The whole meeting is 10 minutes so you are expected to be on time for the meeting, it reflects your professionalism and commitment.
- Learn more about [scrum standups meetings](https://en.wikipedia.org/wiki/Stand-up_meeting), [scrum in software development](<https://en.wikipedia.org/wiki/Scrum_(software_development)>), [scrum meeting best practices](https://sprint.ly/blog/scrum-meeting-best-practices/), [sprints](https://www.atlassian.com/agile/scrum/sprints), [sprint planning](https://www.knowledgehut.com/tutorials/scrum-tutorial/sprint-planning), and [sprint retrospective](https://www.knowledgehut.com/tutorials/scrum-tutorial/sprint-retrospective)

### **Logistics**

- **Everyone should be in the daily standup call.** If you are going to miss it, please send a message in advance in the project slack channel saying you won't be there and tag your team leader too.
- Any issue between team members **must be communicated to the team leader** and to the person you have an issue with. If you're a bit worried about giving feedback to a peer, that's normal. We recommend that you check out [this resource](https://www.radicalcandor.com/our-approach/) on how to **give good direct feedback** which shows that you care.
- If you think you aren't going to finish a task on time, it's good practice to communicate this to the team leader as soon as possible. At the end of the day, **communication is everything** and there is no such thing as over-communication.
- **Everyone must answer the questions** of the daily stand-up note that will be sent every day in the project slack channel or on your standup zoom call.
- **Always over-communicate**, don't assume someone knows something because it's obvious to you. It's OK to re-communicate things all the time. If something is unclear, always ask for more clarification.\
