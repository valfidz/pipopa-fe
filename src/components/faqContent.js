import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "Bagaimana cara menyewa barang di aplikasi Pipopa?",
      answer: "Kamu bisa menyewa barang di aplikasi Pipopa dengan cara membuat akun terverifikasi, lalu masuk ke halaman produk untuk mulai menyewa barang",
    },
    {
      question: "Apa saja syarat dan ketentuan untuk menyewa barang?",
      answer: "Kamu hanya perlu melengkapi data-data yang diperlukan untuk menjadikan akun kamu akun yang terverifikasi, sehingga kamu bisa mulai menyewa barang",   

    },
    {
      question: "Berapa lama durasi minimum dan maksimum penyewaan?",
      answer: "Durasi minimum dan maksimum penyewaan barang ditentukan oleh pemilik barang",
    },
    {
      question: "Bagaimana metode pembayaran yang tersedia?",
      answer: "Metode pembayaran dapat dilakukan dengan menggunakan transfer virtual account dan e-wallet",
    },
    {
      question: "Apakah ada deposit yang harus dibayar?",
      answer: "Deposit yang harus dibayarkan bergantung pada kebijakan pemilik barang",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="faq-list space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
              <h3 className="text-lg font-semibold text-gray-800">{question.question}</h3>
              <span className="text-2xl font-semibold text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-4">
                <p className="text-gray-700">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;