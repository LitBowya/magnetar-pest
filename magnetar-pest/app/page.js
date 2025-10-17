import React from 'react'
import HeroSection from "@/sections/home/HeroSection";
import FeaturesSection from "@/sections/home/FeaturesSection";
import ServicesSection from "@/sections/home/ServicesSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import CTASection from "@/sections/home/CTASection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <ServicesSection />
            {/* <TestimonialsSection /> */}
            <CTASection />
        </div>
    )
}
export default HomePage
