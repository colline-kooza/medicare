import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";
import { Booking, BookingStatus } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<Booking>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <SortableColumn column={column} title="Booking Date" />,
    cell: ({ row }) => <DateColumn row={row} accessorKey="date" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableColumn column={column} title="Status" />,
    cell: ({ row }) => {
      const status: BookingStatus = row.getValue("status");
      return (
        <Badge 
       
          className="capitalize"
        >
          {status.toLowerCase()}
        </Badge>
      );
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => <SortableColumn column={column} title="Total Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"));
      return <div className="text-right font-medium">${amount.toFixed(2)}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;
      return (
        <ActionColumn
          row={row}
          model="booking"
          editEndpoint={`bookings/update/${booking.id}`}
          id={booking.id}
        />
      );
    },
  },
];