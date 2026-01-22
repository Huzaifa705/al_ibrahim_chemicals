import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Form data get karo
    const body = await req.json();
    const { name, email, phone, company, message, industry } = body;

    // Validation - check required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Admin ko email bhejo
    const { data, error } = await resend.emails.send({
      from: 'Al-Ibrahim Contact Form <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      replyTo: email,
      subject: `New Contact Form Submission - ${industry || ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; margin-top: 5px; }
            .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🔔 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
              ` : ''}
              ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
              ` : ''}
              ${industry ? `
                <div class="field">
                  <div class="label">Industry:</div>
                  <div class="value">${industry}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Received on ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
              <p>Al-Ibrahim Group - Contact Form</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

 
    if (error) {
  console.error('Resend error:', error);
  console.error('Error details:', JSON.stringify(error, null, 2));
  return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
}

    // auto reply to user
    // await resend.emails.send({
    //   from: 'Al-Ibrahim Group <onboarding@resend.dev>',
    //   to: email,
    //   subject: 'Thank you for contacting Al-Ibrahim Group',
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <style>
    //         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    //         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    //         .header { background: #2563eb; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    //         .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
    //         .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <h1 style="margin: 0;">✅ Thank You!</h1>
    //         </div>
    //         <div class="content">
    //           <h2>Dear ${name},</h2>
    //           <p>Thank you for contacting <strong>Al-Ibrahim Group</strong>.</p>
    //           <p>We have received your inquiry and our team will review it shortly. You can expect a response within <strong>24 hours</strong>.</p>
    //           <p>If you have any urgent questions, feel free to call us directly.</p>
    //           <p>Best regards,<br/>
    //           <strong>Al-Ibrahim Group Team</strong></p>
    //         </div>
    //         <div class="footer">
    //           <p>Al-Ibrahim Group | Karachi, Pakistan</p>
    //           <p>This is an automated message. Please do not reply to this email.</p>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
