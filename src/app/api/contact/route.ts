import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, category } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email address, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "abdulsmeedahmad@gmail.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not defined in environment variables. Falling back to local logging.");
      console.log("Contact submission received:", { name, email, subject, message, category });
      return NextResponse.json({
        success: true,
        fallback: true,
        message: "Message received in development mode (RESEND_API_KEY not configured)."
      });
    }

    const resend = new Resend(apiKey);
    const emailSubject = subject || `New Portfolio Inquiry from ${name}`;

    // Rich HTML email template for Abdul Smeed Ahmad
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 12px; padding: 32px; border: 1px solid #1e293b;">
        <div style="border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px;">
          <h2 style="margin: 0; color: #38bdf8; font-size: 22px;">New Inquiry Received — Portfolio Website</h2>
          <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 14px;">Inquiry sent via contact portal</p>
        </div>

        <div style="margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 140px; font-weight: 600;">Sender Name:</td>
              <td style="padding: 8px 0; color: #f8fafc; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Sender Email:</td>
              <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            ${category ? `
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Inquiry Category:</td>
              <td style="padding: 8px 0; color: #f8fafc;">${category}</td>
            </tr>
            ` : ""}
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #f8fafc;">${subject}</td>
            </tr>
            ` : ""}
          </table>
        </div>

        <div style="background: #1e293b; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 28px;">
          <h4 style="margin: 0 0 10px 0; color: #cbd5e1; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h4>
          <p style="margin: 0; color: #f8fafc; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 20px;">
          <a href="mailto:${email}?subject=${encodeURIComponent("Re: " + emailSubject)}" style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${emailSubject}`,
      html: htmlContent
    });

    if (data.error) {
      console.error("Resend API returned error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered directly to Abdul Smeed Ahmad via Resend."
    });
  } catch (err: unknown) {
    console.error("Contact API exception:", err);
    const errorMessage = err instanceof Error ? err.message : "An unexpected server error occurred.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
