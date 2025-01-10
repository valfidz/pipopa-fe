import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <motion.figure variants={containerVariants}>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <motion.p variants={containerVariants}>
              “Kami ingin semua orang bisa melakukan apa yang mereka inginkan tanpa harus mengeluarkan biaya yang sangat besar”
            </motion.p>
          </blockquote>
          <motion.figcaption className="mt-10" variants={containerVariants}>
            <img
              alt=""
              src="/ceo.jpeg"
              className="mx-auto h-20 w-20 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Tangguh</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Pipopa</div>
            </div>
          </motion.figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
}