// components/Hero.js

import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  imageUrl,
}) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-slide-up">
          {subtitle}
        </p>
      </div>

    </section>
  );
}
