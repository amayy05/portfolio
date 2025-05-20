import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hello, I'm <span className="text-blue-700">Girish Nikose</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Welcome to my personal portfolio website. Here you'll learn about my journey, achievements, and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#about" 
                className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-gray-100 text-blue-700 border border-blue-700 py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="https://i.imghippo.com/files/tGv6645UpU.jpg" 
                  alt="Girish Nikose"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 bg-white p-3 rounded-lg shadow-lg max-w-xs mx-auto">
                <p className="text-center text-gray-700 mb-2">Inspired video</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
  className="absolute top-0 left-0 w-full h-full"
  src="https://www.youtube.com/embed/X4nGU4DZUwE"
  title="Motivational Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll Down">
            <ArrowDown className="text-blue-700" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};