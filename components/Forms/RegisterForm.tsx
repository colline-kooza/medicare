"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "../(front-end)/custom-coursel";
import { createUser } from "@/actions/users";
import { UserProps } from "@/types/types";
import { toast } from "sonner";
export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UserProps>();
  const router = useRouter();
  async function onSubmit(data: UserProps) {
    if (!data.fullName || !data.email || !data.password || !data.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
  
    setLoading(true);
    data.name = `${data.fullName}`;
    data.image = "https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png";
   console.log(data)
    try {
      const res = await createUser(data);
      if (res.status === 409) {
        setLoading(false);
        setEmailErr(res.error);
      } else if (res.status === 200) {
        setLoading(false);
        toast.success("Account Created successfully");
        router.push("/login");
      } else {
        setLoading(false);
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("It seems something is wrong, try again");
    }
  }
  
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12 ">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-black dark:text-white">Create an Account</h1>
          </div>
          <form className="grid gap-4 " onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Full Name"
              register={register}
              name="fullName"
              errors={errors}
              placeholder="eg John Doe"
            />
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
            />
            <TextInput
              label="Phone Number"
              register={register}
              name="phone"
              type="tel"
              errors={errors}
              placeholder=""
            />
            <TextInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
            />

            <SubmitButton
              title="Sign Up"
              loading={loading}
              loadingTitle="Creating Account please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
