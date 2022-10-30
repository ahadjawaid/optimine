# Optimine

## Basic Git Commands

### How to clone repository?

```shell
git clone https://github.com/ahadjawaid/optimine.git
```

For development you will need to add the dev.js config file into ```server/src/config``` containing the API keys

### How to create a new branch?

When working on a particular sub-system, it's suggested you start a new branch so your code doesn't conflict with other team members during development. After you finish a particular feature, you can then open a Pull Request to merge your branch with the `main` project branch.

1. Create a new branch
```shell
git checkout -b <branch name>
```

2. Complete development on branch, and update remote repository throughout development. See [How to make changes to the repository?](#how-to-make-changes-to-the-repository)

3. Push all changes to the remote repository, then go to github and open a pull request. Then, notify team members so they can review your work and merge your branch.

### How to make changes to the repository?

1. Add all change to the working directory
```shell
git add .
```

\* Note: the `.` references all files in the current directory. To only add certain files, specify their file paths instead.

2. Save changes to the local repository
```shell
git commit -m "<commit message>"
```

\* Include a helpful message which describes the changes you've made. The message field is **required**.

3. Upload local repository content to the remote repository
```shell 
git push
```

### How to keep your local respository up to date?

Download content from a remote repository and immediately update the local repository to match that content. This can only be executed after committing any local changes you've made.

```shell
git pull
```

## Project Development

This project is developed using `node.js` and `npm`, which must be installed on your machine.

### Front End
Navigate to the `optimine/client` directory and start a local web server.
```shell
npm start
```

\* This web server will automatically update as you save changes.

### Back End
Navigate to the `optimine/server` directory and start a local server.
```shell
node ./src/server.js
```