"use client";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import TableHeader from "@/components/Tables/TableHeader";
// import { useUserBookings } from "@/store/bookings";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserBookings } from "@/hooks/booking-hook";

export default function BookingsPage() {
  const { data: bookings, isLoading, error } = useUserBookings();
  //  console.log(bookings ,"these are the bookings")
  if (isLoading) {
    return (
      <div className="p-8 space-y-4">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="p-8">Error loading bookings: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <TableHeader
        title="Bookings"
        linkTitle="New Booking"
        href="/dashboard/bookings/new"
        data={bookings}
        model="booking"
      />
      <div className="py-8">
        <DataTable data={bookings} columns={columns} />
      </div>
    </div>
  );
}