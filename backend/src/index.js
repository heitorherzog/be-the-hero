const exprees = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = exprees();

app.use(cors());
app.use(exprees.json());
app.use(routes);
app.listen(3333);