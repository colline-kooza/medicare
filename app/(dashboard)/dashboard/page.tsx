import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Booking</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no Bookings
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start Viewing as soon as you add a Bookings.
          </p>
          <div className="flex items-center gap-3">
          <Button asChild className="mt-4">
            <a href="/booking">Add Bookings</a>
          </Button>
          <Button asChild className="mt-4">
            <a href="/dashboard/booking">View Bookings</a>
          </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
