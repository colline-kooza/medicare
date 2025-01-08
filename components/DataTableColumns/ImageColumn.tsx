import Image from "next/image";
import React from "react";

export default function ImageColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: any;
}) {
  const imageUrl = row.getValue(`${accessorKey}`);
  // const thum = row.getValue(`${accessorKey}`);
  // console.log(imageUrl);
  return (
    <div className="shrink-0">
      <Image
        alt={`${accessorKey}`}
        className="aspect-square rounded-md object-cover"
        height="50"
        src={imageUrl[0] ?? "https://utfs.io/f/iX9o0TKFTZ2H5RGVyAydsdXKpeaqz7j0OWYkoLSgxRQlB5HE"}
        width="50"
      />
    </div>
  );
}
