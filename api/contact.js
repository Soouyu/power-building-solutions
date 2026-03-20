import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Quote Request</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

                  <!-- HEADER -->
                  <tr>
                    <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
                      <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#f5c518;">NEW NOTIFICATION</p>
                      <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:1px;">POWER BUILD SOLUTIONS</h1>
                      <p style="margin:8px 0 0 0;font-size:13px;color:#999999;">powerbuildsolutions.com</p>
                    </td>
                  </tr>

                  <!-- BADGE -->
                  <tr>
                    <td style="background-color:#f5c518;padding:12px 40px;text-align:center;">
                      <p style="margin:0;font-size:13px;font-weight:700;color:#1a1a1a;letter-spacing:1px;text-transform:uppercase;">
                        &#128204; New Quote Request Received
                      </p>
                    </td>
                  </tr>

                  <!-- BODY -->
                  <tr>
                    <td style="padding:36px 40px;">
                      <p style="margin:0 0 24px 0;font-size:15px;color:#444444;">
                        A new client has submitted a quote request through your website. Review the details below and follow up within 24 hours.
                      </p>

                      <!-- INFO TABLE -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;">
                        <tr style="background-color:#f9f9f9;">
                          <td style="padding:12px 16px;width:36%;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;border-bottom:1px solid #e8e8e8;">Full Name</td>
                          <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;font-weight:600;border-bottom:1px solid #e8e8e8;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;border-bottom:1px solid #e8e8e8;">Email</td>
                          <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">
                            <a href="mailto:${email}" style="color:#f5c518;text-decoration:none;font-weight:600;">${email}</a>
                          </td>
                        </tr>
                        <tr style="background-color:#f9f9f9;">
                          <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;border-bottom:1px solid #e8e8e8;">Phone</td>
                          <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;border-bottom:1px solid #e8e8e8;">Company</td>
                          <td style="padding:12px 16px;font-size:14px;color:#1a1a1a;border-bottom:1px solid #e8e8e8;">${company || 'Not provided'}</td>
                        </tr>
                        <tr style="background-color:#f9f9f9;">
                          <td style="padding:12px 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;">Service</td>
                          <td style="padding:12px 16px;">
                            <span style="display:inline-block;background-color:#1a1a1a;color:#f5c518;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:4px 12px;border-radius:4px;">${projectType || 'Not specified'}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- MESSAGE -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                        <tr>
                          <td style="padding:20px;background-color:#f9f9f9;border-left:4px solid #f5c518;border-radius:0 6px 6px 0;">
                            <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#888888;">Project Details</p>
                            <p style="margin:0;font-size:14px;color:#333333;line-height:1.7;">${message}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}?subject=Re: Your Quote Request - Power Build Solutions"
                              style="display:inline-block;background-color:#f5c518;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:6px;letter-spacing:0.5px;text-transform:uppercase;">
                              Reply to Client
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="background-color:#1a1a1a;padding:24px 40px;text-align:center;">
                      <p style="margin:0;font-size:12px;color:#666666;">
                        This notification was sent automatically from <span style="color:#f5c518;">powerbuildsolutions.com</span>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
