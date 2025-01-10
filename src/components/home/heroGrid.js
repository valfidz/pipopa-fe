import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function HeroGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {/* Left Section (Full Height) */}
      <motion.div 
        className="bg-teal-400 p-8 flex items-center justify-center lg:col-span-2"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-white leading-tight md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Setup bioskop pribadi atau pinjem perlengkapan bayi
        </motion.h1>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2"
        variants={itemVariants}
      >
        {/* Top Right (Image 1) */}
        <motion.div 
          className="relative overflow-hidden"
          variants={imageHoverVariants}
          whileHover="hover"
        >
          <motion.img
            src="/pict2.jpg"
            alt="VR Demo"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="text-white text-xl md:text-2xl lg:text-3xl font-bold p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Coba barang sebelum kamu beli
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div 
          className="grid grid-rows-2 gap-4"
          variants={itemVariants}
        >
          {/* Top Bottom Right (Image 2) */}
          <motion.div 
            className="relative overflow-hidden"
            variants={imageHoverVariants}
            whileHover="hover"
          >
            <motion.img
              src="/pict3.jpg"
              alt="Home play"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="text-white text-xl md:text-2xl lg:text-3xl font-bold p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Bikin meriah acara di rumah
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Bottom Right (Info Block) */}
          <motion.div 
            className="bg-blue-900 flex items-center justify-center p-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-white text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Aman dan terjamin
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroGrid;