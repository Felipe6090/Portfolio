import prismaClient from "../prisma";


class ReturnWorkPageService {
    async execute(workName: string) {
        const result = await prismaClient.works.findUnique({
            where: {
                workName: workName
            }
        })

        return result
    }
}

export { ReturnWorkPageService }