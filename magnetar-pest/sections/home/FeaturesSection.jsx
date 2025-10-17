'use client';
import { Shield, Target, Leaf, Zap, Award, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Protection',
      description: 'Military-grade formulations that provide comprehensive pest elimination and crop protection.',
      color: 'primary'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Smart delivery systems that target specific pests while preserving beneficial insects.',
      color: 'secondary'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Formula',
      description: 'Biodegradable solutions that protect the environment while delivering maximum effectiveness.',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Fast Action',
      description: 'Rapid response formulations that show visible results within hours of application.',
      color: 'secondary'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'certified products meeting international quality and safety standards.',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support from our team of agricultural and pest control specialists.',
      color: 'secondary'
    }
  ];

  const stats = [
    // { number: '50,000+', label: 'Acres Protected', suffix: 'annually' },
    { number: '20+', label: 'Years Experience', suffix: 'in industry' },
    { number: '25+', label: 'Product Range', suffix: 'solutions' },
    // { number: '10,000+', label: 'Happy Customers', suffix: 'worldwide' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Why Choose Magnetar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Cutting-Edge <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of advanced pest control technology designed for modern agriculture and comprehensive household protection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                feature.color === 'primary' 
                  ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' 
                  : 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white'
              } transition-all duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-primary-100 text-lg">
              Our track record speaks for itself
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-100 text-sm">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
