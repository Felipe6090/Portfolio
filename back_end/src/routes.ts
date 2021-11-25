import { Router } from "express";
import { ReturnWorksListController } from "./controllers/ReturnWorksListController";
import { SaveClientMessageController } from "./controllers/SaveClientMessageController";
import { SendNewMessage } from "./middlewares/SendNewMessage";
import { ReturnWorkPageController } from "./controllers/ReturnWorkPageController";
import { TakeFavoriteWorksController } from "./controllers/TakeFavoriteWorksController";

const saveClientMessageController = new SaveClientMessageController();

const returnWorksController = new ReturnWorksListController();

const returnWorkPageController = new ReturnWorkPageController();

const takeFavoriteWorksController = new TakeFavoriteWorksController();

const routes = Router();

routes.post("/sendMessage", SendNewMessage, saveClientMessageController.handle);

routes.get("/works", returnWorksController.handle);

routes.get("/works/:id", returnWorkPageController.handle);

routes.get("/favoriteWorks", takeFavoriteWorksController.handle);

export { routes };
