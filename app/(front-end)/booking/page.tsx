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
  return (
    <div>
    <BookingPage/>
    </div>
  )
}
