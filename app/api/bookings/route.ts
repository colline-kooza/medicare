import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/prisma/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/config/auth';
import { BookingConfirmationEmail } from '@/components/BookingConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { date, tests, totalAmount } = await req.json();
    const booking = await db.booking.create({
      data: {
        userId: session.user.id,
        date: new Date(date),
        totalAmount,
        tests, 
      },
    });
    const userEmail = session.user.email;
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
                patientName: session.user.fullName || 'Valued Patient'
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


export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const bookings = await db.booking.findMany({
      where: {
        userId: session.user.id,
      },
    //   include: {
    //     tests: {
    //       include: {
    //         test: true,
    //       },
    //     },
    //   },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

