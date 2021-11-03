require("dotenv").config();
const http = require("http");
const url = require("url");
const { program } = require("commander");
const { sum, rest, division, multiplication } = require("./operations");

const server = http.createServer();

program.option("-p, --port <port>");
program.parse(process.argv);

let port;
if (program.opts().port && !Number.isNaN(program.opts().port)) {
  port = program.opts().port;
} else {
  port = process.env.SERVER_PORT || 5000;
}

server.listen(port);

server.on("request", (request, response) => {
  const { num1, num2 } = url.parse(request.url, true).query;
  const path = url.parse(request.url, true).pathname;
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
      <p>${num1} + ${num2} = ${sum(+num1, +num2)}</p>
      <p>${num1} - ${num2} = ${rest(+num1, +num2)}</p>
      <p>${num1} * ${num2} = ${multiplication(+num1, +num2)}</p>
      <p>${num1} / ${num2} = ${division(+num1, +num2)}</p>
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
      <h2>ERROR!</h2>
      <p>You must enter valid numbers</p>
    </main>
  </body>
</html>`;
  console.log(num1, num2);

  response.setHeader("Content-Type", "text/html");
  if (path !== `/calculator`) {
    response.statusCode = 404;
    response.write(`<h1>404 NOT FOUND :(</h1>`);
  } else if (
    num1 === undefined ||
    num2 === undefined ||
    num1 === "" ||
    num2 === "" ||
    Number.isNaN(+num1) ||
    Number.isNaN(+num2)
  ) {
    response.write(errorHtml);
  } else {
    response.write(contentHtml);
  }

  response.end();
});
