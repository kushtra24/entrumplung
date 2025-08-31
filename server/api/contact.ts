import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields.' };
  }

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Kontaktformular <${process.env.SMTP_USER}>`,
      to: 'info@entrumplung-ks.de',
      subject: 'Neue Kontaktanfrage',
      text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Nachricht:</b><br>${message}</p>`
    });
    return { success: true };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
});
