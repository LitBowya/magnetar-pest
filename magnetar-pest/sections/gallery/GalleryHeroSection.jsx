'use client';
import Image from 'next/image';
import { Camera, Award, Users, Calendar } from 'lucide-react';

const GalleryHeroSection = () => {
  const stats = [
    { number: '500+', label: 'Success Stories', icon: Award },
    // { number: '50,000+', label: 'Acres Treated', icon: Calendar },
    // { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '25+', label: 'Years Experience', icon: Camera }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Our Work Gallery
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              See Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Work</span> in Action
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our comprehensive gallery showcasing real results from pest control projects across Ghana.
              From agricultural fields to residential homes, witness the effectiveness of our professional solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-bold text-primary-600 mb-1">22+</div>
                <div className="text-sm text-gray-600">Project Photos</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-bold text-secondary-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Real Results</div>
              </div>
            </div>
          </div>

          {/* Gallery Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/images/gallery.webp"
                alt="Professional Pest Control Work"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span className="font-bold">Professional Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold font-poppins text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;
