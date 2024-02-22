"use client";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = ({
  images,
  content,
}: {
  images: Array<string>;
  content?: Array<any>;
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const handleCarousel = (slide: number) => {
    const n = images.length;
    if (currentImg + slide >= 0) {
      setCurrentImg((currentImg + slide) % n);
    } else {
      setCurrentImg(n - 1);
    }
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative flex h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((img, ind) => (
          <div
            key={ind}
            className={`${
              currentImg == ind
                ? "w-full min-w-fit max-w-full translate-x-0 animate-none"
                : "w-0 translate-x-full overflow-hidden transition-transform"
            }  duration-700 ease-in-out`}
            data-carousel-item
          >
            <Image
              height={1000}
              width={1000}
              src={img}
              className="h-full w-full object-fill object-center"
              alt="..."
            />
          </div>
        ))}

        {content?.length &&
          content.map((c, i) => (
            <div
              key={i}
              className={`${
                currentImg == i
                  ? "w-full min-w-fit max-w-full translate-x-0 animate-none"
                  : "w-0 translate-x-full overflow-hidden transition-transform"
              } absolute top-1/2 -translate-y-1/2 left-0 text-white duration-700 ease-in-out`}
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  alt="nothing"
                  width={40}
                  height={40}
                  className="rounded-full"
                  src={c.profile || ""}
                />
                <p>{c.user}</p>
              </div>

              <h3>{c.title}</h3>
              <p className="mx-auto w-[600px] max-w-full">{c.description}</p>
            </div>
          ))}
        {/* </div> */}
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((img, ind) => (
          <button
            key={ind}
            type="button"
            className={`h-3 w-3 rounded-full ${
              currentImg == ind ? "bg-white" : "bg-white/30"
            }`}
            //   data-carousel-slide-to="0"
            onClick={() => setCurrentImg(ind)}
          />
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        onClick={() => handleCarousel(-1)}
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        // data-carousel-prev
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => handleCarousel(1)}
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
