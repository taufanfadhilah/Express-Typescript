import express from 'express'

function main() {
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => res.send("Hello Express Node.js - Typescript!"));

  app.listen(port, () => {
    console.log(`[server] server running on http://localhost:${port} ⚡`);
  });
}

main();
