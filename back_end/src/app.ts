import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";

import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no Socket ${socket.id}`);
});

app.use(routes);

serverHttp.listen(4000, () => console.log("O Server está rodando"));

export { serverHttp, io };
