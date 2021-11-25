import { Request, Response } from "express";
import { ReturnWorkPageService } from "../services/ReturnWorkPageService";


class ReturnWorkPageController {
    async handle(req: Request, res: Response) {
        const workId = req.params.id;

        const service = new ReturnWorkPageService();

        const result = await service.execute(workId)

        return res.json(result)
    }
}

export { ReturnWorkPageController }