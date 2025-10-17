'use client';
import Image from 'next/image';
import { Award, Users, Target, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const AboutHeroSection = () => {
  const achievements = [
    { number: '20+', label: 'Years of Excellence' },
    // { number: '50K+', label: 'Acres Protected' },
    // { number: '10K+', label: 'Satisfied Customers' },
    { number: '25+', label: 'Product Solutions' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'certified products meeting international standards'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Targeted formulations for specific pest challenges'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: '24/7 support and expert consultation services'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Cutting-edge research and development'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              About Magnetar
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              Leading the Future of
              <span className="gradient-text"> Pest Control</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 20 years, Magnetar has been at the forefront of agricultural innovation,
              providing cutting-edge pest control solutions that eliminate pestd , protect your homes, and the environment.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {['Eco-Friendly', 'Scientifically Proven', 'Farmer Trusted'].map((badge, index) => (
                <div key={index} className="flex items-center bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-2xl">
              <Image
                src="/images/about.png"
                alt="About Magnetar"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center">
                <div className="bg-secondary-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-secondary-600" />
                </div>
                {/* <div>
                  <div className="text-2xl font-bold text-gray-900">ISO 9001</div>
                  <div className="text-sm text-gray-600">Certified Quality</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
