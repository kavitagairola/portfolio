import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `Portfolio Contact: ${subject}`,
  html: `
    <h2>New Portfolio Contact</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Subject:</strong> ${subject}</p>

    <p><strong>Message:</strong></p>

    <p>${message}</p>
  `,
});

return NextResponse.json({
  success: true,
  message: "Email sent successfully!",
});
  

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}