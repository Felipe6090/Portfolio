import prismaClient from "../prisma";

type Client = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  text: string;
  whisedDeadline: Date | null;
};

class SaveClientMessageService {
  async execute(clientData: Client) {
    const convertedDate = new Date(clientData.whisedDeadline);

    const newClientMessage = await prismaClient.clients.create({
      data: {
        clientName: clientData.clientName,
        clientEmail: clientData.clientEmail,
        clientPhone: clientData.clientPhone,
        text: clientData.text,
        whisedDeadline: convertedDate,
      },
    });

    return newClientMessage;
  }
}

export { SaveClientMessageService };
