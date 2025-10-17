'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Zap, Leaf, ArrowRight, Star, CheckCircle, Clock, Target } from 'lucide-react';

const ProductHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Product Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Premium Pest Control Solution
            </div>

            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Pest Control</span> Product
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our advanced pest control solution delivers professional-grade protection for homes, businesses, and agricultural facilities. Trusted by professionals worldwide for effective and safe pest elimination.
            </p>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-semibold text-gray-700">Fast-Acting Formula</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-700">Long-Lasting Protection</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-amber-600" />
                </div>
                <span className="font-semibold text-gray-700">Eco-Friendly Safe</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-semibold text-gray-700">Professional Grade</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="#product-details"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/images/product1.png"
                alt="Professional Pest Control Product"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-secondary-500 text-white px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">Professional Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Certified Safe</h3>
            <p className="text-sm text-gray-600">EPA registered and certified for professional use</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Proven Effective</h3>
            <p className="text-sm text-gray-600">99% effectiveness rate in controlled tests</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Fast Results</h3>
            <p className="text-sm text-gray-600">Visible results within 24-48 hours</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Eco-Friendly</h3>
            <p className="text-sm text-gray-600">Safe for environment and non-target species</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHeroSection;
