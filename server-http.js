// Importar el módulo HTTP
const http = require("http");


// Crear un servidor HTTP
const server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    response.end("Hola mundo");
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => console.log("http://localhost:3000"));