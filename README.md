# Optimine

## Basic Git Commands

### How to clone repository?

```shell
git clone https://github.com/ahadjawaid/optimine.git
```

For development you will need to add the dev.js config file into ```server/src/config``` containing the API keys

### How to make changes to the repository?

1. Add all change to the working directory. Note, `.` references all the files in the current directory and file paths may be used instead.
```shell
git add .
```

2. Save changes to the local repository. The message should briefly describe the changes you've made, or the features you've added.
```shell
git commit -m "<commit message>"
```

3. Upload local repository content to the remote repository
```shell 
git push
```

### How to keep your local respository up to date?

Download content from a remote repository and immediately update the local repository to match that content. This can only be executed after committing any local changes you've made.

```shell
git pull
```

### How to create a new branch?

When working on a particular feature, it's suggested you start a new branch so your code doesn't conflict with other team members during development. After you finish, you can open a Pull Request to merge your branch with the `main` branch.

1. Create a new branch. The branch name should title the features it introduces.
```shell
git checkout -b <branch name>
```

2. Complete work on your development branch. See [How to make changes to the repository?](#how-to-make-changes-to-the-repository)

3. Push all changes to the remote repository, open a pull request on github, and notify team members to review your work and merge your development branch.

## Project Development

This project is developed using `node.js` and `npm`, which must be installed on your machine.

### Front End
Navigate to the `optimine/client` directory and start a local web server. The server will dynamically update as you save changes.
```shell
npm start
```

### Back End
Navigate to the `optimine/server` directory and start a local server. This server will *not* dynamically update.
```shell
node ./src/server.js
```