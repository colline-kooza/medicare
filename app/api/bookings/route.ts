import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/prisma/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/config/auth';
import { BookingConfirmationEmail } from '@/components/BookingConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
 

  try {
    const { date, tests, totalAmount , userId ,email} = await req.json();
    const booking = await db.booking.create({
      data: {
        userId,
        date: new Date(date),
        totalAmount,
        tests, 
      },
    });
    const userEmail =email;
    if (!userEmail) {
      return NextResponse.json({ error: 'User email is missing' }, { status: 400 });
    }
        // Send confirmation email
        try {
        const emailTest=    await resend.emails.send({
              from: 'Appointment Booking <info@rwoma.com>',
              to: userEmail, 
              subject: 'Your Appointment Confirmation',
              react: BookingConfirmationEmail({
                date: new Date(date),
                tests: tests,
                totalAmount: totalAmount,
                hospitalName: "Health care",
                patientName:  'Valued Patient'
              })
            });
          } catch (emailError) {
            console.error('Email sending failed:', emailError);
          }
        
    return NextResponse.json(booking);
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



