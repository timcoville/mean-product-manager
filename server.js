const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes')(app)
require('./server/config/mongoose');

app.listen('8000', (req, res) => {
    console.log ('Running on port 8000');
});

