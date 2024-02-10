"use client";
import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((pCred) => {
      return {
        ...pCred,
        [name]: value,
      };
    });
  };

  const registerUser = async () => {
    try {
      const response = await fetch("/api/users/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const res = await response.json();
      if (res.success) {
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error: any) {
      toast.error("Failed to Register");
    }
  };

  const nav = useRouter();

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      await registerUser();
      nav.push("/auth/login");
    } catch (error: any) {
      const { code } = error;
      toast.error(code);
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

        <form onSubmit={signUp}>
          <div className="space-y-4">
            <div className="flex items-center gap-1 overflow-hidden rounded-lg border transition-all focus-within:border-blue-500">
              <i className="fi fi-sr-user p-4" />
              <input
                onChange={handleChange}
                name="username"
                maxLength={20}
                value={credentials.username}
                type="text"
                autoComplete="off"
                placeholder="Enter Username"
                className="w-full bg-transparent p-4"
              />
            </div>

            <div className="flex items-center gap-1 overflow-hidden rounded-lg border transition-all focus-within:border-blue-500">
              <i className="fi fi-sr-at p-4" />
              <input
                onChange={handleChange}
                name="email"
                value={credentials.email}
                type="email"
                autoComplete="off"
                placeholder="Enter Email"
                className="w-full bg-transparent p-4"
              />
            </div>

            <div className="flex items-center gap-1 overflow-hidden rounded-lg border transition-all focus-within:border-blue-500">
              <i className="fi fi-rr-lock px-4" />
              <input
                onChange={handleChange}
                name="password"
                value={credentials.password}
                type="password"
                placeholder="Enter Password"
                className="w-full bg-transparent p-4"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input
                defaultChecked
                type="checkbox"
                name=""
                id=""
                className="accent-blue-500"
              />
              <span>Remember Me</span>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 p-2 font-semibold hover:bg-blue-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="p-2 text-center text-sm">
          Already Registered?{" "}
          <Link href={"/auth/login"} className="text-rose-500 underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;
