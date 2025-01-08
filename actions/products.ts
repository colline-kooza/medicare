"use server";

import { db } from "@/prisma/db";
import { ProductProps } from "@/types/types";
import { revalidatePath } from "next/cache";
import { generateSlug } from "@/lib/generateSlug";

export async function createProduct(data: ProductProps) {
  const slug = generateSlug(data.title);
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    
    if (existingProduct) {
      return existingProduct;
    }
    
    const newProduct = await db.product.create({
      data: {
        ...data,
        slug,
      },
    });
    
    revalidatePath("/dashboard/products");
    return newProduct;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      include: {
        category: true, // Include category details
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProductById(id: string, data: ProductProps) {
  try {
    const updatedProduct = await db.product.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/products");
    return updatedProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true, // Include category details
      },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedProduct,
    };
  } catch (error) {
    console.log(error);
  }
}