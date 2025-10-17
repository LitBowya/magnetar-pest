'use client';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white leading-tight mb-6">
              Ready to Protect Your
              <br />
              <span className="text-secondary-200">Investment?</span>
            </h2>

            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Magnetar for comprehensive pest control solutions. Get expert consultation and premium products delivered to your doorstep.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Browse Products
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-primary-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-sm">Call For Delivery</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-sm">Expert Advice</span>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-xl mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Call Us Now</h3>
                  <p className="text-primary-100 text-sm">Speak with our experts</p>
                </div>
              </div>
              <div className="text-white font-medium">
                <div>+233 55 483 6031</div>
                {/* <div>+233 20 987 6543</div> */}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Support</h3>
                  <p className="text-primary-100 text-sm">Get detailed assistance</p>
                </div>
              </div>
              <div className="text-white font-medium">
                <div>info@magnetarpestcontrol.com</div>
                <div>support@magnetarpestcontrol.com</div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Visit Our Office</h3>
                  <p className="text-primary-100 text-sm">Main headquarters</p>
                </div>
              </div>
              <div className="text-white font-medium">
                <div>Office location: No. 28 31th street Dansoman.</div>
                <div>Accra, Greater Accra Region</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Emergency Pest Control?
            </h3>
            <p className="text-primary-100 mb-6">
              Urgent pest problems require immediate attention. Our emergency response team is available 24/7.
            </p>
            <Link
              href="tel:+233241234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 w-5 h-5" />
              Emergency Hotline: 055 483 6031
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
