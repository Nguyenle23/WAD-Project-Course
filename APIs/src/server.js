const express = require('express');
const app = express();
const port = 5555 || process.env.PORT;
const route = require('./routes');

const cors = require('cors');
const corsOptions = require('./config/domain');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('./config/mongoDb');
mongoose.connect();

app.use(express.json());

app.use(cors(corsOptions));

route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});