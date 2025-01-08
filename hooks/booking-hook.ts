'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

interface CreateBookingData {
  date: Date
  tests: Array<{
    testId: string
    price: number
  }>
  totalAmount: number
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
  const endpoint = `${baseUrl}/api/bookings`;
  return useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error('Failed to fetch bookings')
      }
      return response.json()
    },
  })
}