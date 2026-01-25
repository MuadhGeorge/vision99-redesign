import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { config } from '@/lib/config'

// Initialize Resend with API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

interface PartnershipFormData {
  organizationName: string
  contactName: string
  email: string
  phone?: string
  title?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: PartnershipFormData = await request.json()

    // Validate required fields
    if (!body.organizationName?.trim()) {
      return NextResponse.json(
        { error: 'Organization name is required' },
        { status: 400 }
      )
    }

    if (!body.contactName?.trim()) {
      return NextResponse.json(
        { error: 'Contact name is required' },
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

    // Build email content
    const subject = `Partnership Inquiry: ${body.organizationName}`
    const text = `
New Partnership Inquiry
============================

Organization: ${body.organizationName}
Contact Name: ${body.contactName}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Title/Role: ${body.title || 'Not provided'}

Message:
${body.message || 'No message provided'}

============================
This inquiry was submitted from the Beyond Walls Strategic Partnership page.
    `.trim()

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #d4a843 0%, #c49a3b 100%); padding: 20px; border-radius: 8px 8px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🤝 New Partnership Inquiry</h1>
  </div>
  
  <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
    <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 12px; margin-bottom: 20px;">
      <strong style="color: #92400e;">Priority:</strong> 
      <span style="color: #92400e;">Strategic Partnership Opportunity</span>
    </div>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 140px; color: #137a4d;">Organization:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 16px; font-weight: 600;">${body.organizationName}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #137a4d;">Contact Name:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.contactName}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #137a4d;">Email:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          <a href="mailto:${body.email}" style="color: #137a4d;">${body.email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #137a4d;">Phone:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
          ${body.phone ? `<a href="tel:${body.phone}" style="color: #137a4d;">${body.phone}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #137a4d;">Title/Role:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.title || '<span style="color: #9ca3af;">Not provided</span>'}</td>
      </tr>
    </table>
    
    ${body.message ? `
    <div style="margin-top: 20px;">
      <h3 style="color: #137a4d; margin-bottom: 10px;">Message:</h3>
      <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${body.message}</div>
    </div>
    ` : ''}
  </div>
  
  <div style="background: #137a4d; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
    <a href="mailto:${body.email}" style="display: inline-block; background: white; color: #137a4d; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 10px;">Reply to ${body.contactName.split(' ')[0]}</a>
    ${body.phone ? `<a href="tel:${body.phone}" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Call ${body.contactName.split(' ')[0]}</a>` : ''}
  </div>
  
  <div style="padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
    This inquiry was submitted from the Beyond Walls Strategic Partnership page.
  </div>
</body>
</html>
    `.trim()

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      // Log the submission for debugging
      console.log('=== Partnership Inquiry (Email not sent - no API key) ===')
      console.log('To:', config.contactEmail)
      console.log('Organization:', body.organizationName)
      console.log('Contact:', body.contactName)
      console.log('Email:', body.email)
      console.log('==============================')
      
      return NextResponse.json(
        { error: 'Email service not configured. Please contact Maher directly at Maher@vision99.org' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Beyond Walls <onboarding@resend.dev>', // Use your verified domain in production
      to: config.contactEmail,
      replyTo: body.email,
      subject: subject,
      text: text,
      html: html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send inquiry. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    console.log('Partnership inquiry email sent successfully:', data?.id)

    // Return success
    return NextResponse.json({
      success: true,
      message: 'Your partnership inquiry has been submitted successfully!',
    })

  } catch (error) {
    console.error('Partnership form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
