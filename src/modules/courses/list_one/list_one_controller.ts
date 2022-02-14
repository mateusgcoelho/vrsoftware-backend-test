import { Request, Response } from "express";

import { ListOneCourseService } from "./list_one_service";

class ListOneCourseController {
    constructor(private listOneCourseService: ListOneCourseService) {}

    async handle(request: Request, response: Response) {
        let { code } = request.params;

        let convertedCode = Number(code);

        const course = await this.listOneCourseService.execute(convertedCode);

        return response.json(course);
    }
}

export { ListOneCourseController };
