"use client";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [selected, setSelected] = useState("education");

  return (
    <div className="my-container-1 max-w-full w-[1000px] mx-auto flex min-h-[300px] flex-col items-center gap-4 py-8 sm:flex-row sm:items-start sm:justify-center">
      <div className="h-[350px] w-[300px] overflow-hidden rounded-lg">
        <Image
          width={300}
          height={350}
          className="h-full w-full object-cover object-center"
          src="https://img.freepik.com/free-photo/3d-portrait-high-school-teenager_23-2150793937.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated"
          alt="me"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-semibold">About Me</h1>
        <div>
          <p>
          Hello! I&apos;m Sohail Ahmed, a computer engineering student with a
          passion for web development. Here&apos;s a glimpse of who I am: lorem
          </p>
          <div className="my-2 space-y-2">
            <div className="">
              <button
                className={`p-4 transition-all hover:bg-rose-500 ${
                  selected == "education" && "bg-rose-500"
                }`}
                onClick={() => setSelected("education")}
              >
                Education
              </button>
              <button
                className={`p-4 transition-all hover:bg-rose-500 ${
                  selected == "ambition" && "bg-rose-500"
                }`}
                onClick={() => setSelected("ambition")}
              >
                Ambition
              </button>
              <button
                className={`p-4 transition-all hover:bg-rose-500 ${
                  selected == "interest" && "bg-rose-500"
                }`}
                onClick={() => setSelected("interest")}
              >
                Interest
              </button>
            </div>
            <div className="flex-1 overflow-y-scroll custom-scrollbar">
            {selected == "education" ? (
              <p>
                <span className="font-semibold">Education</span>: Currently
                pursuing my degree in computer engineering, I&apos;m fascinated
                by the world of technology. Web development, in particular, has
                captured my interest. Skills: Proficient in HTML, CSS, and
                JavaScript, I enjoy creating visually appealing and functional
                websites. I&apos;m always eager to learn and explore new tools.
              </p>
            ) : selected == "ambition" ? (
              <p>
                <span className="font-semibold">Ambition</span>: Aspiring to be
                a skilled website developer, I&apos;m committed to honing my
                craft. I believe in the power of well-designed websites to make
                an impact.
              </p>
            ) : (
              selected == "interest" && (
                <p>
                  <span className="font-semibold">Interest</span>: When I&apos;m
                  not coding, you&apos;ll find me exploring the outdoors,
                  reading tech blogs, or experimenting with new recipes.
                </p>
              )
            )}
            </div>
          </div>
          <p>
          Feel free to connect—I&apos;d love to collaborate on exciting web
          projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
