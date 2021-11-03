require("dotenv").config();
const http = require("http");
const { sum, rest, division, multiplication } = require("./operations");

const num1 = 2;
const num2 = 2;

const url = http.Server;
console.log(url);

const contentHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
  </head>
  <body>
    <main>
      <h2>Results</h2>
      <p>${num1} + ${num2} = ${sum(num1, num2)}</p>
      <p>${num1} - ${num2} = ${rest(num1, num2)}</p>
      <p>${num1} * ${num2} = ${multiplication(num1, num2)}</p>
      <p>${num1} / ${num2} = ${division(num1, num2)}</p>
    </main>
  </body>
</html>`;
const errorHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
  </head>
  <body>
    <main>
      <h2>ERROR</h2>
      <p>You must enter valid numbers</p>
    </main>
  </body>
</html>`;

const server = http.createServer();

const port = process.env.SERVER_PORT || 5000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  console.log(request);
  response.setHeader("Content-Type", "text/html");
  response.write(contentHtml);
  response.end();
});
