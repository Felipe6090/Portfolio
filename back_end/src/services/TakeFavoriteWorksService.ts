import prismaClient from "../prisma";

class TakeFavoriteWorksService {
  async execute() {
    const result = await prismaClient.works.findMany({
      where: {
        itsFavorite: true,
      },
    });

    console.log(result + "    adfq");

    return result;
  }
}

export { TakeFavoriteWorksService };
