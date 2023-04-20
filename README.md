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

