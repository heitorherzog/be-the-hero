const exprees = require('express');
const routes = exprees.Router();


const OngController = require('./controllers/OngController');
routes.post('/ongs',OngController.create);
routes.get('/ongs',OngController.index);

const IncidentController = require('./controllers/IncidentController');
routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

const ProfileController = require('./controllers/ProfileController');
routes.get('/profile',IncidentController.index);

const SessionController = require('./controllers/SessionController');
routes.post('/sessions',SessionController.create);


module.exports = routes;