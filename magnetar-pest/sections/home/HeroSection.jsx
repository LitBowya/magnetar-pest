'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, Leaf, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/home.png',
      title: 'Advanced Pest Control Solutions',
      subtitle: 'Protecting Your Home & Agriculture',
      description: 'Professional-grade pest control and post harverst protection for maximum crop yield.'
    },
    {
      image: '/images/home2.png',
      title: 'Bio-Friendly Protection',
      subtitle: 'Sustainable & Effective',
      description: 'Eco-conscious solutions that deliver powerful results without compromising the environment.'
    },
    {
      image: '/images/home3.png',
      title: 'Complete Agricultural Care',
      subtitle: 'From Seed to Harvest',
      description: 'Comprehensive protection solutions for every stage of your agricultural journey.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    { icon: Shield, text: 'Proven Protection' },
    { icon: Zap, text: 'Fast Acting' },
    { icon: Leaf, text: 'Eco-Friendly' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by Customers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              <span className="gradient-text">{slides[currentSlide].title}</span>
              <br />
              <span className="text-gray-700">{slides[currentSlide].subtitle}</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <feature.icon className="w-5 h-5 text-secondary-600 mr-2" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-600 text-secondary-600 font-semibold rounded-lg hover:bg-secondary-600 hover:text-white transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-96 transition-opacity duration-500"
                  priority
                />
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-secondary-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
