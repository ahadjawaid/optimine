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

// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: [keys.cookieKey]
//     })
// );

connect(mongoURI);
require('./routes/userRoutes')(app);
require('./routes/subscriptionRoutes')(app);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});