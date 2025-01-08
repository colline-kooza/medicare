"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { generateSlug } from "@/lib/generateSlug";
import toast from "react-hot-toast";
import { Category, Product } from "@prisma/client";
import { ProductProps } from "@/types/types";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import FormFooter from "./FormFooter";
import { 
  createProduct, 
  updateProductById 
} from "@/actions/products";
import Select from "../FormInputs/Select";

type ProductFormProps = {
  editingId?: string | undefined;
  initialData?: Product | undefined | null;
  categories: Category[];
};

export default function ProductForm({
  editingId,
  initialData,
  categories
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ProductProps>({
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      categoryId: initialData?.categoryId || "",
      qty: initialData?.qty ? parseInt(initialData.qty.toString(), 10) : 0, 
      sellingPrice: initialData?.sellingPrice
      ? parseFloat(initialData.sellingPrice.toString())
      : 0.0, // Parse as a float or default to 0.0
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>(initialData?.images || []);

  async function saveProduct(data: ProductProps) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);
      data.images = images;
      data.qty = parseInt(data.qty.toString(), 10) | 0;
      data.sellingPrice = parseFloat(data.sellingPrice.toString()) || 0.0;

      if (editingId) {
        await updateProductById(editingId, data);
        setLoading(false);
        toast.success("Product Updated Successfully!");
        reset();
        router.push("/dashboard/products");
      } else {
        await createProduct(data);
        setLoading(false);
        toast.success("Product Created Successfully!");
        reset();
        router.push("/dashboard/products");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  // Function to handle multiple image uploads
  const handleImageUpload = (newImageUrl: string) => {
    setImages(prevImages => {
      // Prevent duplicate images
      if (!prevImages.includes(newImageUrl)) {
        return [...prevImages, newImageUrl];
      }
      return prevImages;
    });
  };

  // Function to remove an image
  const removeImage = (imageToRemove: string) => {
    setImages(prevImages => 
      prevImages.filter(image => image !== imageToRemove)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(saveProduct)}>
        <FormHeader
          href="/products"
          parent=""
          title="Product"
          editingId={editingId}
          loading={loading}
        />
     
        <div className="grid grid-cols-12 gap-6 py-8">
          <div className="lg:col-span-8 col-span-full space-y-3">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                  Enter the details for your new product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Product Title"
                      name="title"
                    />
                  </div>
                  <div className="grid gap-3">
                    <TextArea
                      register={register}
                      errors={errors}
                      label="Description"
                      name="description"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Controller
                      name="categoryId"
                      control={control}
                      rules={{ required: "Category is required" }}
                      render={({ field }) => (
                        <Select
                          label="Select Category"
                          options={categories.map(category => ({
                            label: category.title,
                            value: category.id
                          }))}
                          {...field}
                          errors={errors}
                        />
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Quantity"
                      name="qty"
                      type="number"
                    />
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Selling Price"
                      name="sellingPrice"
                      type="number"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-full">
            <div className="grid auto-rows-max items-start gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Upload product images (multiple allowed)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ImageInput
                      title="Product Image"
                      imageUrl=""
                      setImageUrl={handleImageUpload}
                      endpoint="productImage"
                    />
                    {images.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {images.map((image, index) => (
                          <div key={index} className="relative">
                            <img 
                              src={image} 
                              alt={`Product image ${index + 1}`} 
                              className="w-full h-20 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image)}
                              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                            >
                              X
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <FormFooter
          href="/products"
          editingId={editingId}
          loading={loading}
          title="Product"
          parent=""
        />
      </form>
    </div>
  );
}