// Explication des méthodes pour faire un routage
// https://expressjs.com/fr/guide/routing.html
// npm install express --save
// pour installer Express dans le répertoire
const http = require("http");
const host = 'localhost';
const port = 3000; // http://localhost:3000
const express = require('express');
const app = express();

// Répond avec "hello world" quand la requête GET est activée dans l'adresse http://localhost:3000/plus
// on peut remplacer get par post mais il ne fonctionne pour quelconque raison
app.get('/', function(req, res) {
  res.send('Bonjour le monde d\'aujourd\'hui');
  console.log('aujourd\'hui');
});
// le post ne peut être utilisé dans cette condition.
app.get('/plus', function(req, res) {
  res.send('Bonjour le monde d\'avant');
  console.log('avant');
});


app.listen(port, host, () => {
  console.log(`Le Serveur TEST fonctionne sur http://${host}:${port}`)
});
