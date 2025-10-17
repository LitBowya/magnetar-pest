'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Building2, Home, Bug, Sprout, Zap, Target, CheckCircle, Phone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Facilities',
      description: 'Professional pest management for business and industrial establishments',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      facilities: [
        'Factories',
        'Manufacturing Establishments',
        'Health care & Hospitals Facilities',
        'Food & Drug Processing Facilities',
        'Warehouses',
        'Educational Facilities',
        'Offices',
        'Government Buildings',
        'Hotels & Restaurant'
      ]
    },
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Safe and effective pest control solutions for homes and residences',
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      facilities: [
        'Residences',
        'Homes',
        'Domestic Pests',
        'Cockroach Control',
        'Flies Control',
        'Mouse control',
        'Flea Control'
      ]
    },
    {
      icon: Bug,
      title: 'Specialized Pest Control',
      description: 'Advanced solutions for specific pest problems and control systems',
      color: 'bg-red-500',
      lightColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
      facilities: [
        'Termite Control',
        'Electronic Flying Insect Control Units',
        'Reptile Rodent control',
        'Fumigation control systems',
        'Insect Control'
      ]
    },
    {
      icon: Sprout,
      title: 'Agricultural Services',
      description: 'Complete farm protection and agricultural pest management',
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      facilities: [
        'Farms',
        'Farm Pest Control & Protection'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full font-semibold mb-6">
            <Shield className="w-5 h-5" />
            <span>Professional Pest Control Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
            Expert <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Pest Control</span>
            <br />Solutions
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Protecting your property with advanced pest management techniques. From residential homes to large commercial facilities,
            we deliver customized solutions that ensure complete pest elimination and long-term protection.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">Eco-Friendly Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700">24/7 Emergency Service</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} hover:border-opacity-50`}>

                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`${service.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Facilities Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.facilities.map((facility, idx) => (
                    <div key={idx} className={`${service.lightColor} p-3 rounded-lg border ${service.borderColor}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${service.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm font-medium text-gray-700">{facility}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="relative z-10">
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />

              <h3 className="text-4xl font-bold font-poppins mb-4">
                Ready to Eliminate Your Pest Problem?
              </h3>

              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Don't let pests take over your space. Our expert team is ready to provide immediate assistance
                with customized treatment plans that deliver lasting results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="mr-3 w-5 h-5" />
                  Get Free Inspection
                </Link>
              </div>

              <div className="mt-8 text-sm opacity-75">
                ⚡ Emergency services available 24/7 • Licensed & Insured • Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
