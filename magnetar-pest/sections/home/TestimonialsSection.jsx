'use client';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'John Mensah',
      role: 'Commercial Farmer',
      location: 'Ashanti Region',
      image: '/images/testimonial1.jpg',
      rating: 5,
      content: "Magnetar's weedicides have transformed my farm productivity. The selective formula protects my crops while eliminating weeds completely. My yield increased by 35% in just one season!",
      company: 'Mensah Farms Ltd'
    },
    {
      name: 'Sarah Osei',
      role: 'Homeowner',
      location: 'Accra',
      image: '/images/testimonial2.jpg',
      rating: 5,
      content: "Their household pest control products are amazing! Safe around my kids and pets, yet incredibly effective. No more cockroaches or ants in my kitchen. Highly recommended!",
      company: 'Residential Customer'
    },
    {
      name: 'Emmanuel Kwame',
      role: 'Agricultural Consultant',
      location: 'Northern Region',
      image: '/images/testimonial3.jpg',
      rating: 5,
      content: "I've been recommending Magnetar products to farmers for over 5 years. Their technical support is exceptional, and the results speak for themselves. Quality products that deliver.",
      company: 'AgriConsult Ghana'
    },
    {
      name: 'Grace Adjei',
      role: 'Vegetable Farmer',
      location: 'Eastern Region',
      image: '/images/testimonial4.jpg',
      rating: 5,
      content: "The bio-friendly insecticides work perfectly for my organic vegetable farm. They eliminate pests without harming beneficial insects. My vegetables are healthier and more marketable.",
      company: 'Green Valley Farms'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from farmers, homeowners, and professionals who trust Magnetar for their pest control needs.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-primary-600" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary-600 font-medium">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '10,000+', label: 'Happy Customers' },
            { number: '99.2%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
