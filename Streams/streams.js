const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // Solution 2
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("error", (err) => console.log(err));
  // Solution 3
  // const readable = fs.createReadStream("test-file.txt");
  // readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port...................");
});
