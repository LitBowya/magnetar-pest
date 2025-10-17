import { Phone, Mail, MapPin, CheckCircle, Zap, Building, Home, Bug } from 'lucide-react';

const ContactFormSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+233 55 483 6031',
      // secondary: '+233 30 234 5678',
      description: 'Speak directly with our pest control experts',
      availability: '24/7 Emergency Line',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@magnetarpest.com',
      secondary: 'emergency@magnetarpest.com',
      description: 'Get detailed quotes and consultations',
      availability: 'Response within 2 hours',
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      primary: '123 Independence Avenue',
      secondary: 'Accra, Ghana',
      description: 'Meet our team and see our products',
      availability: 'Mon-Sat: 8AM-6PM',
      color: 'bg-purple-500'
    }
  ];

  const serviceAreas = [
    { region: 'Greater Accra', coverage: '100%', responseTime: '2-4 hours' },
    // { region: 'Ashanti Region', coverage: '95%', responseTime: '4-6 hours' },
    { region: 'Eastern Region', coverage: '90%', responseTime: '6-8 hours' },
    { region: 'Central Region', coverage: '85%', responseTime: '8-12 hours' },
    // { region: 'Western Region', coverage: '80%', responseTime: '12-24 hours' },
    // { region: 'Northern Regions', coverage: '75%', responseTime: '24-48 hours' }
  ];

  const specializedServices = [
    {
      icon: Building,
      title: 'Commercial Services',
      services: ['Factories', 'Offices', 'Hotels & Restaurants', 'Educational Facilities'],
      responseTime: 'Same Day',
      pricing: 'Custom Quote'
    },
    {
      icon: Home,
      title: 'Residential Services',
      services: ['Homes', 'Apartments', 'Domestic Pest Control', 'Family-Safe Solutions'],
      responseTime: '2-4 Hours',
      pricing: 'Fixed Rates'
    },
    {
      icon: Bug,
      title: 'Specialized Control',
      services: ['Termite Control', 'Fumigation Systems', 'Electronic Control Units'],
      responseTime: 'Within 6 Hours',
      pricing: 'Premium Service'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Touch</span> Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to eliminate your pest problem? Contact our expert team for immediate assistance and customized solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4 text-center">
                {method.title}
              </h3>

              <div className="text-center mb-4">
                <div className="text-lg font-semibold text-gray-800 mb-1">{method.primary}</div>
                <div className="text-gray-600">{method.secondary}</div>
              </div>

              <p className="text-gray-600 text-center mb-4">{method.description}</p>

              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-sm font-medium text-gray-700">{method.availability}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Magnetar & Emergency Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold font-poppins mb-6">
              Why Choose Magnetar?
            </h3>
            <div className="space-y-4">
              {[
                'Expert consultation from certified specialists',
                'Customized solutions for your specific needs',
                'Eco-friendly and effective products',
                '24/7 emergency support available',
                // 'Free delivery and application training',
                '20+ years of proven industry experience',
                'Licensed and insured professionals',
                'Satisfaction guarantee on all services'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact & Service Hours */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                Emergency Services
              </h3>
              <p className="text-gray-600 mb-6">
                Pest emergency? Don't wait! Our rapid response team is ready to help you 24/7.
              </p>

              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <div className="font-bold text-red-800 text-lg">Emergency Hotline</div>
                    <div className="text-red-600">055 483 6031</div>
                  </div>
                </div>
                <div className="text-red-700 text-sm">
                  Available 24/7 • Average response time: 2-4 hours
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-4">
                Service Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">Emergency Only</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-red-700">Emergency Line</span>
                  <span className="text-red-600 font-medium">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-8 text-center">
            Our Service Areas
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                  <h4 className="font-bold text-gray-900 mb-3">{area.region}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-medium text-green-600">{area.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-medium text-blue-600">{area.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 rounded-3xl p-12 text-white">
          <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-4xl font-bold font-poppins mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't let pests take control. Contact our expert team today for a free consultation and customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+233241234567"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="mr-3 w-5 h-5" />
              Call Now: +233 55 483 6031
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
