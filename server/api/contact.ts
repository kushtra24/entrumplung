import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields.' };
  }

  // Configure your SMTP transporter
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = port === 465; // true for 465, false for other ports

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true,
    debug: true,
  });

  try {
    await transporter.sendMail({
      from: `Kontaktformular <${process.env.SMTP_USER}>`,
      to: 'kushtra24@gmail.com',
      subject: 'Neue Kontaktanfrage von www.entruempelung-sk.de',
      text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Nachricht:</b><br>${message}</p>`
    });
    return { success: true };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
});
