import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Left Section */}
      <motion.div variants={containerVariants}>
        <motion.h2 
          className="text-3xl font-semibold text-blue-900 mb-8 md:text-4xl"
          variants={itemVariants}
        >
          Pinjam atau sewakan, mudah!
        </motion.h2>

        {/* Step 1 */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h3 className="text-teal-500 text-lg mb-2">01</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Cari dan pilih</h4>
          <p className="text-gray-600">Find everything you need for rent in one place. Browse our selection of house appliances, equipment, tools, and gadgets.</p>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h3 className="text-teal-500 text-lg mb-2">02</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Pesan dan kirim</h4>
          <p className="text-gray-600">Reserve your item, pick rental periods to fit your needs, wait till it's delivered to your location.</p>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h3 className="text-teal-500 text-lg mb-2">03</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Kembalikan lalu tinggalkan review</h4>
          <p className="text-gray-600">Return and leave a review. Share what you made with it and inspire others with the possibilities.</p>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="relative flex flex-col justify-center items-center"
        variants={containerVariants}
      >
        {/* Image 1 */}
        <motion.img
          src="/pict4.jpg"
          alt="BBQ"
          className="mb-4 rounded-lg shadow-lg w-full md:mb-8"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        {/* Image 2 */}
        <motion.img
          src="/pict5.jpg"
          alt="VR kit"
          className="rounded-lg shadow-lg w-full"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;