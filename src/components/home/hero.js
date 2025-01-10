'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative bg-white overflow-hidden lg:h-screen">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/pict1.jpg"
          alt="Background"
          className="w-full h-full object-cover sm:object-[0px_-50px] md:object-[0px_-100px] lg:object-[0px_0px]"
        />
        <motion.div 
          className="absolute inset-0 bg-indigo-900"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>

      <div className="relative z-10 px-4 py-16 lg:py-64 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Kalo bisa pinjem kenapa harus beli
          </motion.h1>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col">
              <motion.h2 
                className="text-2xl sm:text-base md:text-xl font-medium text-slate-200"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Cari & pakai barang apapun tanpa beli
              </motion.h2>
              <motion.button
                className="rounded-full mt-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Link to="/underconstruct">Browse Items</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}