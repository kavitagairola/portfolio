import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const { data, error } = await resend.emails.send({
  from: "Kavita <onboarding@resend.dev>",
  to: "kavitagairola507@gmail.com",
  replyTo: email,
  subject: `Portfolio Contact: ${subject}`,
  html: `
<div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:30px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">

    <div style="background:#6d28d9; color:white; padding:20px; text-align:center;">
      <h2 style="margin:0;">📩 New Portfolio Contact</h2>
    </div>

    <div style="padding:25px; color:#333;">
      <p><strong>👤 Name:</strong> ${name}</p>
      <p><strong>📧 Email:</strong> ${email}</p>
      <p><strong>📌 Subject:</strong> ${subject}</p>

      <hr style="margin:20px 0;" />

      <h3>💬 Message</h3>

      <p style="line-height:1.7;">
        ${message}
      </p>
    </div>

    <div style="background:#f9fafb; padding:15px; text-align:center; font-size:14px; color:#666;">
      Sent from your Portfolio Website
    </div>

  </div>
</div>
`,
});

console.log(data);
console.log(error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

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