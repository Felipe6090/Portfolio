import { NextFunction, Request, Response } from "express";
import { SaveClientMessageService } from "../services/SaveClientMessageService";

class SaveClientMessageController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const filds = req.body;

    const service = new SaveClientMessageService();

    return await service.execute(filds);
  }
}

export { SaveClientMessageController };
