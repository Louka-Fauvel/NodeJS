// Explication des méthodes pour faire un routage
// https://expressjs.com/fr/guide/routing.html
// npm install express --save
// pour installer Express dans le répertoire
const http = require("http");
const host = 'localhost';
const port = 3000; // http://localhost:3000
const express = require('express');
const app = express();
const fs = require('fs');// Pour faire appel à un fichier
const session = require('express-session');

// Ouvre une session
app.set('trust proxy', 1)
app.use( session({
   secret : 'AzErTy',
   name : 'sessionId',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
  })
);

// Répond avec "hello world" quand la requête GET est activée dans l'adresse http://localhost:3000/plus
// on peut remplacer get par post mais il ne fonctionne pour quelconque raison
app.get('/', function(req, res) {
  res.send('Bonjour le monde d\'aujourd\'hui');
//  res.type('json');
  console.log('aujourd\'hui');
});
// le post ne peut être utilisé dans cette condition.
app.get('/plus', function(req, res) {
  res.send('Bonjour le monde d\'avant');
  console.log('avant');
});

// Appelle un fichier
app.get('/index.html', function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

app.listen(port, host, () => {
  console.log(`Le Serveur TEST fonctionne sur http://${host}:${port}`)
});
