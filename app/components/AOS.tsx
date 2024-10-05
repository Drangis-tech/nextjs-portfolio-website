import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Service Data with Images
const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "We create modern and user-friendly websites using the latest technologies like React, Vue.js, and WordPress.",
    image: "/paslaugos/WEB_DEVELOPMENT.png", // Image for Web Development
  },
  {
    title: "BRANDING",
    description:
      "Unique brand identity solutions, including logos, business cards, and creative design services.",
    image: "/paslaugos/BRANDING.png", // Image for Branding
  },
  {
    title: "ADS MANAGEMENT",
    description:
      "Manage effective campaigns on Google and Facebook platforms, targeting the right audience and analyzing results.",
    image: "/paslaugos/ADS_MANAGEMENT.png", // Image for Ads Management
  },
  {
    title: "SEO OPTIMIZATION",
    description:
      "Optimize your website for search engines to increase visibility and traffic with on-page and off-page SEO.",
    image: "/paslaugos/SEO_OPTIMIZATION.png", // Image for SEO Optimization
  },
  {
    title: "CUSTOM SOLUTIONS",
    description:
      "Tailored programming solutions and API integrations to meet your unique needs, with expert consultation and support.",
    image: "/paslaugos/Custom_Solutions.png", // Image for Custom Solutions
  },
  {
    title: "IT CONSULTING",
    description:
      "Consultation on IT strategies, system analysis, and recommendations to optimize technology usage for your business.",
    image: "/paslaugos/IT_Consulting.png", // Image for IT Consulting
  },
];

const ServiceCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one card on small devices
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Tailwind's sm breakpoint
        settings: {
          slidesToShow: 1, // One card on mobile
        },
      },
      {
        breakpoint: 768, // Tailwind's md breakpoint
        settings: {
          slidesToShow: 2, // Two cards on small tablets
        },
      },
      {
        breakpoint: 1024, // Tailwind's lg breakpoint
        settings: {
          slidesToShow: 3, // Three cards on larger screens
        },
      },
    ],
  };

  return (
    <div className="relative w-full bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <Slider {...settings} className="relative">
        {services.map((service, index) => (
          <div key={index} className="p-4">
            <div className="relative p-6 bg-transparent hover:bg-zinc-800/10 h-[396px] transition-all duration-300">
              {/* Service Image - Positioned Top Left */}
              <div className="absolute top-6 left-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-16 w-16"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-zinc-100 mb-4 mt-20 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-zinc-400 mb-6 text-center">{service.description}</p>

              {/* Learn More Button - Positioned Bottom Left */}
              <a
                href="#"
                className="absolute bottom-6 left-6 border-2 border-zinc-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 bg-transparent border-gray-600 hover:bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <style jsx>{`
        .slick-prev,
        .slick-next {
          z-index: 1;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          color: white;
        }
        
        .slick-prev {
          left: 10px;
        }
        
        .slick-next {
          right: 10px;
        }
        
        .slick-prev:before,
        .slick-next:before {
          font-size: 24px;
          color: white;
        }

        /* Hide default arrows */
        .slick-arrow {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ServiceCarousel;