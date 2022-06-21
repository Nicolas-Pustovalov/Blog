// "appeler" les dépendances nécessaires
const express = require('express');
const router = require('./router');
const articles = require('./articles.json');

const app = express();

//   - Le moteur de rendu.
app.set('view engine', 'ejs');
//   - Le dossier des views.
app.set('views', __dirname + "/views");

app.use(express.static(__dirname + "/static"));
app.use("*/images", express.static(__dirname + "/static/images"));
app.use("*/css", express.static(__dirname + "/static/css"));

// on dit à express d'utiliser notre router :
app.use(router);

// lancer l'application
const port = 3000;
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
