import { db } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    if (!params.id) {
        return new NextResponse('Missing user ID', { status: 400 })
    }

    try {
        const bookings = await db.booking.findMany({
            where: {
                userId: params.id,
            },
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