'use client';
import Image from 'next/image';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const MissionVisionSection = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize pest control in agriculture',
      icon: Calendar
    },
    {
      year: '2012',
      title: 'First Major Breakthrough',
      description: 'Developed our signature bio-friendly insecticide formula',
      icon: Award
    },
    {
      year: '2016',
      title: 'Market Expansion',
      description: 'Expanded operations across West Africa with 10,000+ customers',
      icon: TrendingUp
    },
    {
      year: '2020',
      title: 'Innovation Center',
      description: 'Established R&D facility for next-generation solutions',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">
            <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To empower farmers and protect households with innovative, sustainable pest control
              solutions that enhance productivity while preserving environmental health.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Develop eco-friendly pest control technologies
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Support sustainable agricultural practices
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Provide exceptional customer service and support
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 lg:p-12">
            <div className="bg-secondary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be Africa's leading provider of advanced pest control solutions,
              driving agricultural innovation and food security across the continent.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Leader in agricultural pest management
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Pioneer in sustainable solutions
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Trusted partner for agricultural success
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, discover how we've grown
            to become a trusted name in pest control solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    index % 2 === 0 ? 'bg-primary-600' : 'bg-secondary-600'
                  }`}></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
