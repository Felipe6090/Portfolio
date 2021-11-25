import prismaClient from "../prisma"

class ReturnWorksListService {
    async execute() {
        const works = await prismaClient.works.findMany({
            orderBy: {
                lastChange: "desc"
            }
        })

        return works
    }
}

export { ReturnWorksListService }