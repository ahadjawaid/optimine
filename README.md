# Optimine

## Running the Final Product

To run this project on your local machine, make sure you install the following dependencies:
- [node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [python](https://phoenixnap.com/kb/how-to-install-python-3-windows)

Then, you will need to download the `dev.js` configuration file which contains secret API keys and copy it into the `optimine/server/src/config` directory.

```shell
mv <path/to/dev.js> server/src/config
```

Finally, to run the project you will need 2 seperate processes running on your machine, one for each the front and back-end servers. This is easily accomplished by running each server in a seperate terminal session.

### Back End
Navigate to the `optimine/server` directory, execute `npm install`, and start a local server.

```shell
cd server
npm install
cd ../
node ./server/src/server.js
```

### Front End
Navigate to the `optimine/client` directory, execute `npm install`, and start a local web server.

```shell
cd client
npm install
npm start
```

## Project Development

This project is developed using `node.js` and `npm`, which must be installed on your machine. The following sections contain guidelines for development using git.

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
