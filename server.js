require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

require('./server/config/user.config');
require('./server/routes/auth.routes')(app);