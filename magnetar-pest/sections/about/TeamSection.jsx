
import { Users, Award, Microscope, Shield, Leaf } from 'lucide-react';

const TeamSection = () => {

  const certifications = [
    // {
    //   icon: Shield,
    //   title: 'ISO 9001:2015',
    //   description: 'Quality Management Systems',
    //   color: 'primary'
    // },
    {
      icon: Leaf,
      title: 'EPA Registered',
      description: 'Environmental Protection Agency',
      color: 'secondary'
    },
    {
      icon: Award,
      title: 'GSA Certified',
      description: 'Ghana Standards Authority',
      color: 'primary'
    },
    {
      icon: Microscope,
      title: 'GCAP Approved',
      description: 'Ghana Coalition Against Poverty',
      color: 'secondary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
              Certifications & <span className="gradient-text">Standards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest standards of quality and compliance with international regulations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                  cert.color === 'primary' 
                    ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' 
                    : 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white'
                }`}>
                  <cert.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold font-poppins text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
