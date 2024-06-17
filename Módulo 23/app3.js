import http from "node:http";
import { stock } from "./stock.js";
import { URL } from "node:url";
import jsonBody from "body/json.js";

const server = http.createServer();
let productStock = [...stock];

server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  //console.log(urlObject);
  if (urlObject.pathname === "/") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(JSON.stringify(productStock));

    response.end();

    return;
  }

  if (
    urlObject.pathname === "/get-unavailable-products" &&
    request.method === "GET"
  ) {
    const unavailableProducts = productStock.filter(
      (product) => product.amountLeft === 0
    );
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(JSON.stringify(unavailableProducts));

    response.end();

    return;
  }

  if (
    urlObject.pathname === "/get-unavailable-products" &&
    request.method !== "GET"
  ) {
    response.writeHead(405, {
      "Content-Type": "text/plain",
    });
    response.write(
      "Esse endpoint não permite o acesso de outro método que não seja GET"
    );

    response.end();

    return;
  }

  //?id=1
  if (urlObject.pathname === "/get-by-id") {
    // mostra null se o parametro não existir

    const idParam = urlObject.searchParams.get("id");

    if (!idParam || isNaN(idParam)) {
      response.writeHead(400, {
        "Content-Type": "text/plain",
      });
      response.write("Informe um Id numérico");

      response.end();

      return;
    }

    const selectedObject = productStock.find(
      (product) => product.id === Number(idParam)
    );

    if (!selectedObject) {
      response.writeHead(404, {
        "Content-Type": "text/plain",
      });
      response.write("Não existe um produto com esse Id");
      response.end();

      return;
    }

    response.writeHead(200, {
      "Content-Type": "application/json",
    });

    response.write(JSON.stringify(selectedObject));

    response.end();

    return;
  }

  // pode ser utilizado outro método e fazer o mesmo procedimento, porém não é ideal
  if (urlObject.pathname === "/delete-by-id" && request.method === "DELETE") {
    const idParam = urlObject.searchParams.get("id");

    if (!idParam || isNaN(idParam)) {
      response.writeHead(400, {
        "Content-Type": "text/plain",
      });
      response.write("Informe um Id númerico");

      response.end();

      return;
    }

    const selectedObject = productStock.find(
      (product) => product.id === Number(idParam)
    );

    productStock = productStock.filter(
      (product) => product.id !== Number(idParam)
    );

    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.write(JSON.stringify(selectedObject ?? {}));

    response.end();

    return;
  }

  if (urlObject.pathname === "/create" && request.method === "POST") {
    jsonBody(request, response, (error, body) => {
      // verificar se está tudo ok na requisição
      if (error) {
        response.writeHead(400, {
          "Content-type": "text/plain",
        });
        response.write("Erro ao processar requisição. ");
        response.write(error.message);

        response.end();

        return;
      }

      // implementar lógica de adição do novo produto ao estoque
      const { productName, amountLeft } = body;
      const newProduct = {
        id: productStock.length,
        productName,
        amountLeft,
      };
      productStock.push(newProduct);

      //retornar novo produto
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(JSON.stringify(newProduct));

      response.end();

      return;
    });
  }
  
});

// node --watch (nome do arquivo)
server.listen(3000, () => {
  console.log("Servidor rodando na porta http://localhost:3000");
});
