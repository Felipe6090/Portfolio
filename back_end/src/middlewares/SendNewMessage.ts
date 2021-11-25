const mailer = require("nodemailer");
import "dotenv/config";
import { NextFunction, Request, Response } from "express";

type IClient = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  text: string;
  whisedDeadline: Date | null;
};

export async function SendNewMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: IClient = req.body;

  const destiny = process.env.DESTINY_EMAIL_ADRESS;
  const user = process.env.SENDER_EMAIL_ADRESS;
  const pass = process.env.EMAIL_PASSWORD;

  const transporter = mailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  const mail = {
    from: user,
    to: destiny,
    subject: `${data.clientName} te enviou uma mensagem`,
    html: `<p>Nova Mensagem de ${data.clientName}</p> </br>
      <p>Dados do Cliente:</p>
      <p>Nome: ${data.clientName}</p>
      <p>Email de Contato: ${data.clientEmail}</p>
      <p>Telefone de Contato: ${data.clientPhone}</p>
      <p>Prazo Desejado: ${data.whisedDeadline}</p>
      <p>Mensagem:</p></br>${data.text}`,
  };

  await transporter.sendMail(mail);

  return next();
}
