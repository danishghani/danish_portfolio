'use client';
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaShoppingCart, FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Home() {
  // Animate hero card on mount
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark font-sans">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur shadow-sm flex justify-center py-3">
        <div className="flex gap-8 text-gray-100 font-semibold text-lg">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="contact" className="hover:text-primary transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center pt-32 pb-20 relative">
        <div ref={heroRef} className="bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center w-full max-w-2xl border border-gray-700 opacity-0">
          <div className="relative mb-6">
            <Image
              src="/profile-placeholder.png"
              alt="Danish profile"
              width={140}
              height={140}
              className="rounded-full border-4 border-primary shadow-xl animate-fade-in"
            />
          </div>
          <h1 className="text-5xl font-extrabold mb-2 text-white tracking-tight text-center drop-shadow-lg animate-fade-in-up delay-100">Danish</h1>
          <p className="text-xl font-semibold text-primary mb-2 text-center animate-fade-in-up delay-200">Full Stack Developer | Python | Next.js | Node.js</p>
          <p className="max-w-xl text-center text-gray-200 mb-6 animate-fade-in-up delay-300">
            Professional experience in building modern web applications for various industries. Passionate about clean code, scalable systems, and great user experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 mt-4 rounded-full bg-primary text-white font-bold shadow-lg border-2 border-primary-dark hover:bg-secondary hover:text-primary-dark hover:border-secondary-dark transition-colors duration-200 font-sans text-lg focus:outline-none focus:ring-4 focus:ring-primary-light animate-fade-in-up delay-400"
          >
            Contact Me
          </Link>
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/danish-ghani-579339184/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077b5] text-white font-semibold shadow-lg border-2 border-[#005983] hover:bg-[#005983] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-primary-light animate-fade-in-up delay-500"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-2xl" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-3xl mx-auto mt-10 bg-gray-800/80 rounded-2xl shadow-xl px-10 py-10">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center animate-bounce-in">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SkillBar icon={<FaHtml5 className="text-orange-400 text-2xl" />} skill="HTML" percent={100} />
          <SkillBar icon={<FaCss3Alt className="text-blue-400 text-2xl" />} skill="CSS" percent={90} />
          <SkillBar icon={<FaJs className="text-yellow-300 text-2xl" />} skill="JavaScript" percent={80} />
          <SkillBar icon={<FaReact className="text-cyan-300 text-2xl" />} skill="React" percent={85} />
          <SkillBar icon={<FaNodeJs className="text-green-400 text-2xl" />} skill="Node.js" percent={75} />
          <SkillBar icon={<FaPython className="text-blue-300 text-2xl" />} skill="Python" percent={80} />
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="max-w-4xl mx-auto mt-16 grid sm:grid-cols-2 gap-10">
        <FeatureCard icon={<FaReact className="text-primary text-3xl" />} title="React Development" />
        <FeatureCard icon={<FaNodeJs className="text-primary text-3xl" />} title="Next.js & Node.js APIs" />
        <FeatureCard icon={<FaPython className="text-primary text-3xl" />} title="Python Automation" />
        <FeatureCard icon={<FaShoppingCart className="text-primary text-3xl" />} title="E-commerce Solutions" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto mt-16 bg-gray-800/80 rounded-2xl shadow-xl px-10 py-10">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center animate-bounce-in">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <ProjectCard name="Fintech Website" description="A secure, modern fintech platform with real-time analytics and seamless user experience." />
          <ProjectCard name="Portfolio Website" description="A personal portfolio site built with Next.js, Tailwind CSS, and a custom dark theme." />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto mt-16 bg-gray-800/80 rounded-2xl shadow-xl px-10 py-10 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center animate-bounce-in">Testimonials</h2>
        <div className="space-y-6">
          <Testimonial text="Danish is a rock star developer! Very professional and delivers on time." author="Upwork Client" />
          <Testimonial text="Great job! Would definitely recommend & hire again for future work." author="Upwork Client" />
        </div>
      </section>
    </div>
  );
}

function SkillBar({ icon, skill, percent }: { icon: React.ReactNode; skill: string; percent: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium text-gray-100 text-lg">{skill}</span>
        <span className="ml-auto text-gray-400 text-sm">{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="bg-primary h-3 rounded-full transition-all duration-700 animate-pulse"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-gray-900/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer">
      <div className="mb-3">{icon}</div>
      <span className="text-xl font-semibold text-gray-100 mb-2">{title}</span>
    </div>
  );
}

function ProjectCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-gray-900/80 rounded-xl shadow p-6 border border-gray-700 hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer">
      <h3 className="font-semibold text-lg mb-2 text-primary">{name}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}

function Testimonial({ text, author }: { text: string; author: string }) {
  return (
    <div className="bg-gray-900/80 rounded-xl shadow p-6 border-l-4 border-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
      <p className="italic mb-2 text-gray-100">&quot;{text}&quot;</p>
      <p className="text-right font-semibold text-primary">- {author}</p>
    </div>
  );
}

// Tailwind custom animations (add to globals.css or tailwind.config.js)
// .animate-fade-in-up { @apply opacity-0 translate-y-8; animation: fadeInUp 0.8s forwards; }
// @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
// .animate-bounce-in { animation: bounceIn 0.8s; }
// @keyframes bounceIn { 0% { opacity: 0; transform: scale(0.8); } 60% { opacity: 1; transform: scale(1.05); } 100% { transform: scale(1); } }
