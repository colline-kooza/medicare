'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

interface CreateBookingData {
  date: Date
  tests: Array<{
    testId: string
    price: number
  }>
  totalAmount: number
  userId:string
  email:string
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 
export function useCreateBooking() {
   
    const endpoint = `${baseUrl}/api/bookings`;
  return useMutation({
    mutationFn: async (data: CreateBookingData) => {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create booking')
      }

      return response.json()
    },
  })
}

export function useUserBookings() {
  const { data: session, status } = useSession();
  const id = session?.user?.id;
  const endpoint = `${baseUrl}/api/bookings/${id}`;

  return useQuery({
      queryKey: ['bookings', id],
      queryFn: async () => {
          if (!id) throw new Error('No user ID available');
          
          const response = await fetch(endpoint);
          if (!response.ok) {
              throw new Error('Failed to fetch bookings');
          }
          return response.json();
      },
      enabled: !!id, // Only run query when id is available
  });
}