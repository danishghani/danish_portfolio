import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark font-sans py-20">
      <section className="bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-12 max-w-xl w-full border border-gray-700 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-6 text-primary text-center">+923214650379</h2>
        <p className="mb-4 text-lg text-gray-100 text-center">Feel free to reach out for collaborations or just a friendly hello!</p>
        <p className="mb-2 text-lg">Email: <a href="mailto:danishghani990@gmail.com" className="text-primary font-semibold underline hover:text-secondary transition">danishghani990@gmail.com</a></p>
        <p className="text-lg text-gray-300">City: Lahore, Pakistan</p>
      </section>
    </div>
  );
} 