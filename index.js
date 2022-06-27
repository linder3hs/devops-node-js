import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Hello World",
    body: `Entorno ${process.env.NODE_ENV}`,
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
