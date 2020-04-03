const exprees = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = exprees();
const { errors } = require('celebrate');

app.use(cors());
app.use(exprees.json());
app.use(routes);
app.use(errors());
app.listen(3333);