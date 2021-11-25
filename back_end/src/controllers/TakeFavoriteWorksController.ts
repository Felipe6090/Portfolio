import { Request, Response } from "express";
import { TakeFavoriteWorksService } from "../services/TakeFavoriteWorksService";

class TakeFavoriteWorksController {
  async handle(req: Request, res: Response) {
    const service = new TakeFavoriteWorksService();

    const result = await service.execute();

    console.log(result + "  12345");

    return res.json(result);
  }
}

export { TakeFavoriteWorksController };
