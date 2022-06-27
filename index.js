const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Hello World",
    body: `Entorno ${process.env.NODE_ENV || "dev"}`,
  });
});

app.get("/list", (req, res) => {
  res.json({
    ok: true,
    message: "Listado de usuarios",
    body: [
      {
        id: 1,
        name: "Juan",
        lastName: "Perez",
      },
      {
        id: 2,
        name: "Luis",
        lastName: "Zapata",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
