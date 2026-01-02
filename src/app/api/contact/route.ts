import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to site owner
    const ownerMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'omarabdelbagi12@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from Pearl Necklace Studio Contact Form</small></p>
      `,
    }

    // Confirmation email to visitor
    const visitorMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We Received Your Message - Pearl Necklace Studio',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of what you sent:</p>
        <hr>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Thank you for your interest in Pearl Necklace Studio!</p>
        <p>Best regards,<br>The Pearl Necklace Studio Team</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(ownerMailOptions)
    await transporter.sendMail(visitorMailOptions)

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
