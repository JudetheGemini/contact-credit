const http = require("http");

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();

        // BEGINNING OF RESPONSE
        response.on("error", () => {
          console.error(error);
        });

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");

        // Note: the 2 lines above could be replaced with this next one:
        // response.writeHead(200, {'Content-Type': 'application/json'})

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
        // Note: the 2 lines above could be replaced with this next one:
        // response.end(JSON.stringify(responseBody))
      });
  })
  .listen(8080, "127.0.0.1", () => {
    console.log(`Server is running`);
  });
