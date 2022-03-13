import http from "http";
import express from "express";
import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { MyRoom } from "./MyRoom";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const gameServer = new Server({
  transport: new WebSocketTransport({ server: http.createServer(app) }),
});

gameServer.define("MyRoom", MyRoom);

gameServer.listen(2567);
console.log("Started at :2567");
