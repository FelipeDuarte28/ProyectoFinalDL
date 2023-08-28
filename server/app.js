const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require("./router/routers.js")
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get("/", (req, res) => {
    res.send("Hola desde node")
})

app.use("/", router);

app.listen(port, () => console.log(`Servidor iniciado correctamente en el puerto ${port}`));
