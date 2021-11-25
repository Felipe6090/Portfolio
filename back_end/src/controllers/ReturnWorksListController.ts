import { Request, Response } from "express";
import { ReturnWorksListService } from "../services/ReturnWorksListService";

class ReturnWorksListController {
  async handle(req: Request, res: Response) {
    const service = new ReturnWorksListService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ReturnWorksListController };