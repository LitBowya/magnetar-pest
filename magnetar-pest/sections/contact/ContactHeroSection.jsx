'use client';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const ContactHeroSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Directly',
      description: 'Speak with our experts for immediate assistance',
      info: ['+233 55 483 6031'],
      color: 'primary',
      available: '24/7 Emergency Support'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed technical assistance via email',
      info: ['info@magnetarpestcontrol.com', 'support@magnetarpestcontrol.com'],
      color: 'secondary',
      available: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Come see our products and meet our team',
      info: ['123 Agriculture Avenue', 'Accra, Greater Accra Region'],
      color: 'primary',
      available: 'Mon - Sat: 8AM - 6PM'
    },
  ];

  const quickStats = [
    { number: '< 2hrs', label: 'Response Time' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '99.5%', label: 'Customer Satisfaction' },
    { number: '20+', label: 'Years Experience' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Get Expert Support
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
            Connect with Our <span className="gradient-text">Experts</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Have questions about pest control? Need a custom solution for your farm or home?
            Our team of agricultural specialists and pest control experts is here to help you succeed.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className={`h-2 w-full ${method.color === 'primary' ? 'bg-primary-600' : 'bg-secondary-600'}`}></div>

              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                  method.color === 'primary' 
                    ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' 
                    : 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white'
                }`}>
                  <method.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                  {method.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  {method.info.map((info, idx) => (
                    <div key={idx} className="text-gray-800 font-medium">
                      {info}
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  method.color === 'primary' ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'
                }`}>
                  <Clock className="w-4 h-4 mr-2" />
                  {method.available}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why Choose Our Support?
            </h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              We're committed to providing exceptional customer service and technical expertise to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins">Emergency Pest Control</h3>
              <p className="text-red-100">Urgent pest problems? We're here 24/7</p>
            </div>
          </div>
          <div className="text-xl font-bold mb-2">Emergency Hotline: 055 483 6031</div>
          <p className="text-red-100">For severe infestations requiring immediate attention</p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
