const http = require("http");
const EventEmitter = require("events");

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sale();

myEmmiter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmmiter.on("newSale", () => {
  console.log("Customer name is Mohamed Sihan");
});

myEmmiter.on("newSale", (stock) => {
  console.log(`Current Stock is ${stock}`);
});

myEmmiter.emit("newSale", 5);

////===============================
////===============================
////===============================

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request received");
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Starting server...........");
});
