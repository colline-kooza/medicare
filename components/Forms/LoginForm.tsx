"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "../(front-end)/custom-coursel";
import { createUser } from "@/actions/users";
import { LoginProps, UserProps } from "@/types/types";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function Register() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginProps>();
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl") || "/dashboard";
  const [passErr, setPassErr] = useState("");
  const router = useRouter();
  
  async function onSubmit(data: LoginProps) {
    try {
      setLoading(true);
      setPassErr("");
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setPassErr("Wrong Credentials, Check again");
        // setShowNotification(true);
      } else {
        // Sign-in was successful
        // setShowNotification(false);
        reset();
        setLoading(false);
        toast.success("Login Successful");
        setPassErr("");
        router.push("/booking");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      // toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <div className="w-full lg:grid  h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
        <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
      <div className="flex items-center justify-center py-12 ">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-black dark:text-white">Login Account</h1>
          </div>
          <form className="grid gap-4 " onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
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
              title="Login"
              loading={loading}
              loadingTitle="Login Account please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
           I dont have an account?{" "}
            <Link href="/register" className="underline">
            Register
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}
