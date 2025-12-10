import { NextRequest, NextResponse } from 'next/server'
import { config } from '@/lib/config'

interface ContactFormData {
  fullName: string
  email: string
  phone?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.fullName?.trim()) {
      return NextResponse.json(
        { error: 'Full name is required' },
        { status: 400 }
      )
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Build email content
    const emailContent = {
      to: config.contactEmail,
      from: body.email,
      subject: `Contact Form: New Message from ${body.fullName}`,
      text: `
New Contact Form Submission
============================

Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}

Message:
${body.message}

============================
This message was sent from the Beyond Walls website contact form.
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0f5c3a 0%, #137a4d 100%); padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${body.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="mailto:${body.email}" style="color: #137a4d;">${body.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${body.phone || 'Not provided'}</td>
      </tr>
    </table>
    
    <div style="margin-top: 20px;">
      <h3 style="color: #137a4d; margin-bottom: 10px;">Message:</h3>
      <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${body.message}</div>
    </div>
  </div>
  
  <div style="background: #f3f4f6; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #6b7280;">
    This message was sent from the Beyond Walls website contact form.
  </div>
</body>
</html>
      `.trim(),
    }

    // For now, we'll log the email content and simulate success
    // In production, integrate with your email service (SendGrid, Resend, Nodemailer, etc.)
    console.log('=== Contact Form Submission ===')
    console.log('To:', emailContent.to)
    console.log('From:', emailContent.from)
    console.log('Subject:', emailContent.subject)
    console.log('Message:', body.message)
    console.log('==============================')

    // TODO: Uncomment and configure your email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Beyond Walls <noreply@roswellmasjid.org>',
    //   to: emailContent.to,
    //   replyTo: emailContent.from,
    //   subject: emailContent.subject,
    //   text: emailContent.text,
    //   html: emailContent.html,
    // })

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

