"use client";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const nav = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((pCred) => {
      return {
        ...pCred,
        [name]: value,
      };
    });
  };

  const signIn = async (e: any) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      toast.success("Login Successful");
      nav.push("/");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <main className="flex h-screen items-center justify-center p-8">
      <div className="w-full space-y-4 rounded-lg bg-[#181818] p-8 sm:w-auto sm:max-w-[95%]">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="group/input flex cursor-pointer justify-center gap-4 rounded-lg bg-[#222222] px-5 py-3 transition-all hover:bg-rose-500">
            <i className="fi fi-brands-google text-rose-500 transition-all group-hover/input:text-white" />
            <span>Log in with Google</span>
          </div>
          <div className="group/input flex cursor-pointer justify-center gap-4 rounded-lg bg-[#222222] px-5 py-3 transition-all hover:bg-rose-500">
            <i className="fi fi-brands-apple text-rose-500 transition-all group-hover/input:text-white" />
            <span>Log in with Apple</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <hr className="w-full border-[#f1f1f1]" />
          <span>OR</span>
          <hr className="w-full border-[#f1f1f1]" />
        </div>

        <form onSubmit={signIn}>
          <div className="space-y-4">
            <div className="flex items-center gap-1 overflow-hidden rounded-lg border transition-all focus-within:border-blue-500">
              <i className="fi fi-sr-at p-4" />
              <input
                onChange={handleChange}
                name="email"
                value={credentials.email}
                type="email"
                autoComplete="false"
                placeholder="Enter Email"
                className="w-full bg-transparent input-fill p-4"
              />
            </div>
            <div className="flex items-center gap-1 overflow-hidden rounded-lg border transition-all focus-within:border-blue-500">
              <i className="fi fi-rr-lock p-4" />
              <input
                onChange={handleChange}
                name="password"
                value={credentials.password}
                type="password"
                placeholder="Enter Password"
                className="w-full bg-transparent p-4"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input
                  defaultChecked
                  type="checkbox"
                  name=""
                  id=""
                  className="accent-blue-500"
                />
                <span>Remember Me</span>
              </div>
              <Link href={"/"} className="text-rose-500">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 p-2 font-semibold hover:bg-blue-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="p-2 text-center text-sm">
          You haven&apos;t any account?
          {" "}
          <Link href={"/auth/register"} className="text-rose-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
