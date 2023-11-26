import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRouter from "./routes/web";

let app = express();

//config view Engine
viewEngine(app);

//config web routers
webRouter(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("app is runinng at the port: " + port);
})