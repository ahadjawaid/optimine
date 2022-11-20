const express = require('express');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./utilities/connect');
const keys = require('./config');
require('./models/User');
require('./models/Analysis');

const port = keys.port;
const mongoURI = keys.mongoURI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: keys.redirectDomain,
}));

connect(mongoURI);
require('./routes/userRoutes')(app);
require('./routes/subscriptionRoutes')(app);
require('./routes/analysisRoutes')(app);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});