import http from "node:http";
import url from "node:url";
import fs from "node:fs/promises";
import path from "node:path";
import { createReadStream } from "node:fs";

const server = http.createServer();

server.on("request", async (req, res) => {
  const parsedUrl = url.parse(req.url);
  let filePath = parsedUrl.pathname;

  if (filePath === "/") {
    filePath = "/pages/index.html";
  }
  const fullPath = path.normalize(path.join(process.cwd(), filePath));

  console.log(`Requested path: ${filePath}`);
  console.log(`Full path: ${fullPath}`);

  try {
    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      res.writeHead(400, {
        "Content-type": "text/plain",
      });
      res.write(
        "The specified path is a directory. Please provide a file path."
      );
      res.end();
    } else {
      const readStream = createReadStream(fullPath);
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      readStream.pipe(res);
    }
  } catch (error) {
    res.writeHead(404, {
      "Content-type": "text/plain",
    });
    res.write("File not found!");
    res.end();
  }
});

server.listen(8000, () => {
  console.log("Servidor rodando na porta http://localhost:8000");
});
