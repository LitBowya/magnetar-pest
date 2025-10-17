'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Shield, Droplets, Target, Star, Info, BookOpen, Users, Award, CheckCircle, Clock, Leaf, Zap } from 'lucide-react';

const ProductCatalogSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Product Overview', icon: Info },
    { id: 'features', label: 'Features & Benefits', icon: Star },
    { id: 'usage', label: 'Usage Instructions', icon: BookOpen },
    // { id: 'testimonials', label: 'Customer Reviews', icon: Users }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast-Acting Formula',
      description: 'Delivers rapid results with visible pest elimination within 24-48 hours of application.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Long-Lasting Protection',
      description: 'Provides extended protection for up to 30 days with a single application.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Safe',
      description: 'Environmentally responsible formula that is safe for non-target species and beneficial insects.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Target,
      title: 'Professional Grade',
      description: 'Trusted by professional pest control operators and agricultural specialists worldwide.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Droplets,
      title: 'Weather Resistant',
      description: 'Advanced formulation that maintains effectiveness even in challenging weather conditions.',
      color: 'text-cyan-600 bg-cyan-100'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'EPA registered and meets all international safety and quality standards.',
      color: 'text-red-600 bg-red-100'
    }
  ];

  // const testimonials = [
  //   {
  //     name: 'John Mensah',
  //     role: 'Agricultural Consultant',
  //     rating: 5,
  //     comment: 'This product has revolutionized pest control on our farms. Highly effective and environmentally safe.',
  //     location: 'Kumasi, Ghana'
  //   },
  //   {
  //     name: 'Sarah Osei',
  //     role: 'Hotel Manager',
  //     rating: 5,
  //     comment: 'Perfect for our hospitality business. Guests appreciate that it\'s odorless and highly effective.',
  //     location: 'Accra, Ghana'
  //   },
  //   {
  //     name: 'Michael Asante',
  //     role: 'Homeowner',
  //     rating: 5,
  //     comment: 'Safe around my children and pets, yet incredibly effective against household pests.',
  //     location: 'Tamale, Ghana'
  //   }
  // ];

  return (
    <section id="product-details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Complete Product <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our professional-grade pest control solution
          </p>
        </div>

        {/* Product Banner */}
        <div className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/product-banner.png"
            alt="Product Banner"
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl mx-auto px-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Pest Control Solution</h3>
              <p className="text-lg opacity-90">Trusted by professionals, safe for families, effective against all common pests</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Composition & Active Ingredients</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our advanced formulation contains carefully selected active ingredients that target pest nervous systems
                      while remaining safe for humans, pets, and beneficial insects when used as directed.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Applications</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">Residential homes and apartments</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">Commercial buildings and offices</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">Agricultural and farming operations</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-600">Food processing facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <Image
                  src="/images/product1.png"
                  alt="Product Details"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Features & Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Usage Instructions</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Droplets className="w-6 h-6" />
                    Already Mixed just apply
                  </h4>
                  <ul className="space-y-3 text-blue-700">
                    <li>• Shake very well</li>
                    <li>• Use immediately after shaking</li>
                    <li>• Store in a cool dark place</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h4 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Application Guidelines
                  </h4>
                  <ul className="space-y-3 text-green-700">
                    <li>• Apply during early morning or evening</li>
                    <li>• Ensure complete coverage of target areas</li>
                    <li>• Avoid application during windy or Fan conditions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <h4 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Safety Precautions
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-amber-700">
                  <ul className="space-y-2">
                    <li>• Wear protective clothing during application</li>
                    <li>• Keep away from children </li>
                    <li>• It's pets friendly</li>
                    <li>• Do not apply on windy days</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Store in cool, dry place</li>
                    <li>• Keep container tightly closed</li>
                    <li>• Dispose of empty containers responsibly</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* {activeTab === 'testimonials' && (
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
