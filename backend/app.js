//Import des modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initialisation de l'application express
const app = express();

//Déclaration des middlewares

//Getsion des données postées
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Gestion des CORS (Cross Origin Ressource Sharing)
//Pour autoriser connexions provenant d'autre domaines
app.use(cors());

//Lancement de l'application
app.listen(3000);
