import BookingPage from '@/components/(front-end)/BookingsPage';
import { authOptions } from '@/config/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/login");
    }
    const userId=session.user.id
    const email=session.user.id
  return (
    <div>
    <BookingPage userId={userId} email={email}/>
    </div>
  )
}
