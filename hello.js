// Explication des méthodes pour créer un serveur HTTP
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module-fr
const http = require("http");
const host = 'localhost';
const port = 8000; // http://localhost:8000

const requestListener = function (req, res) {
    res.writeHead(200); // 200 est un code d'état
    res.end("Bonjour je vous attends !");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Le Serveur fonctionne sur http://${host}:${port}`);
});
// node hello.js pour activer le serveur.
// dans le cmd et dans le répertoire faite la commande node hello.js pour savoir son adresse.
// curl http://localhost:8000 permet d'envoyer la requête.
