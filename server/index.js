const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index');
const global_data = require('../global_data');

const app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/posts',routes);

const port = global_data.server.port;

app.listen(port, ()=>{console.log('Server started on port '+port)});
