"use client";
import { avatar } from "@/lib";
import { auth } from "@/utils/firebase";
import { authSignIn, authSignOut } from "@/utils/redux/features/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const pathname = usePathname();

  const [authUser, setAuthUser] = useState({
    _id: null,
  });
  const dispatch = useDispatch();

  const fetchUser = async (email: string) => {
    try {
      const response = await fetch("/api/users/fetchUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const res = await response.json();
      if (res.success) {
        dispatch(authSignIn(res.user));
        setAuthUser(res.user);
      }
    } catch (error: any) {
      toast.error("Invalid Credentials");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // setAuthUser(user)
        fetchUser(user.email);
      } else {
        setAuthUser({ _id: null });
        dispatch(authSignOut());
      }
    });
  }, [dispatch]);

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
      setAuthUser({ _id: null });
      toast.success("Logged Out Successfully");
    } catch (error) {
      toast.error("Error occurred");
    }
  };

  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {pathname !== "/auth/login" && pathname !== "/auth/register" && (
        <header className="my-container-2 z-[2] flex w-screen items-center justify-between gap-4">
          <div className="flex items-center gap-2">
          <i onClick={() => setShowNav(true)} className={`${showNav && "rotate-180"} transition-all fi fi-sr-menu-burger text-white cursor-pointer sm:hidden`} />

          <Link
            href={"/"}
            className="logo flex items-center gap-2 font-semibold"
            >
            <div className="h-[64px] w-[64px] cursor-pointer overflow-hidden rounded-full">
              <Image
                width={64}
                height={64}
                src={"/logo.png"}
                alt=""
                className="h-full w-full object-cover object-center"
                />
            </div>
            <span>THink</span>
          </Link>
              </div>
          <nav className={`${showNav ? "left-0 top-0": "-left-full"} sm:left-0 transition-all fixed h-screen flex sm:h-auto w-full sm:w-auto flex-col sm:flex-row items-center gap-8 bg-black/70 sm:bg-transparent py-12 sm:p-0 sm:relative`}>
            <i onClick={() => setShowNav(false)} className={`fi fi-sr-cross text-white cursor-pointer sm:hidden transition-all ${!showNav && "rotate-45"} `}/>
            <Link
              href="/"
              onClick={() => setShowNav(false)}
              className={`${pathname == "/" && "glow-text"} hover-glow-text`}
            >
              Home
            </Link>
            <Link
            onClick={() => setShowNav(false)}
              href="/blogs"
              className={`${
                pathname == "/blogs" && "glow-text"
              } hover-glow-text`}
            >
              Blogs
            </Link>
            <Link
            onClick={() => setShowNav(false)}
              href={`/${authUser._id || "guest"}/my-blogs`}
              className={`${
                pathname.endsWith("/my-blogs") && "glow-text"
              } hover-glow-text`}
            >
              My Blogs
            </Link>
            <Link
            onClick={() => setShowNav(false)}
              href="/about"
              className={`${
                pathname == "/about" && "glow-text"
              } hover-glow-text`}
            >
              About
            </Link>
          </nav>

          {/* <nav className="hidden flex-wrap items-center gap-8 md:flex">
        <Link href="/" className={`${pathname == '/' && "glow-text"} hover-glow-text`}>Home</Link>
        <Link href="/blogs" className={`${pathname == '/blogs' && "glow-text"} hover-glow-text`}>Blogs</Link>
        <Link href={`/${authUser._id}/my-blogs`} className={`${pathname.endsWith('/my-blogs') && "glow-text"} hover-glow-text`}>My Blogs</Link>
        <Link href="/about" className={`${pathname == '/about' && "glow-text"} hover-glow-text`}>About</Link>
      </nav> */}

          {!authUser._id ? (
            // <div className='rounded-full space-x-2 flex'>
            <Link
              href={"/auth/login"}
              className="rounded-full border px-4 py-1 text-white transition-all hover:bg-white hover:text-[#121212]"
            >
              Log In
            </Link>
          ) : (
            // {/* <Link href={'/auth/register'} className='text-[#121212] bg-white transition-all px-4 py-1 rounded-full'>Sign Up</Link> */}
            // </div>
            <div className="flex items-center gap-4">
              <div className="group/dropdown relative w-fit cursor-pointer rounded-lg bg-[#222222] p-1 transition-all">
                <div
                  id="profile"
                  className="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full"
                >
                  <Image
                    width={64}
                    height={64}
                    src={avatar}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <ul className="absolute right-0 top-[102%] h-0 overflow-hidden rounded-lg bg-[#222222] text-white transition-all group-hover/dropdown:h-auto">
                  <li>
                    <Link
                      href={"/user/profile"}
                      className="flex items-center gap-2 px-8 py-2 transition-all hover:bg-[#181818]"
                    >
                      <i className="fi fi-sr-user-gear" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <button
                      onClick={logOut}
                      className="flex items-center gap-2 px-8 py-2 transition-all hover:bg-[#181818]"
                    >
                      <i className="fi fi-sr-exit" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="cursor-pointer">
                <i className="fi fi-sr-bell text-slate-200 hover:text-slate-300" />
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Header;
