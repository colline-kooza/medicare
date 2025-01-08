import { getAllCategories } from "@/actions/categories";
import CategoryForm from "@/components/Forms/CreatePrdt";
import { Category } from "@prisma/client";
import React from "react";

export default async function page() {
  const categories: Category[] = (await getAllCategories()) || [];

  return (
    <div className="p-8">
      <CategoryForm categories={categories}/>
      
    </div>
  );
}
