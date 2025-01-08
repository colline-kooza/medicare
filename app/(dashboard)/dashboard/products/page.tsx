import React from "react";
import { columns } from "./columns";
import { Category } from "@prisma/client";
import DataTable from "@/components/DataTableComponents/DataTable";
import { getAllCategories } from "@/actions/categories";
import TableHeader from "@/components/Tables/TableHeader";
import { getAllProducts } from "@/actions/products";
import { ProductProps } from "@/types/types";

export default async function page() {
  const products: any[] = (await getAllProducts()) || [];
  // console.log(categories)
  return (
    <div className="p-8">
      <TableHeader
        title="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
        data={products}
        model="product"
      />
      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
