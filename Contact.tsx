import React from 'react';
import { Mail, Github as GitHub, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-blue-700 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700">boisar, maharashta, india</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-blue-700 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-blue-700 hover:underline">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-blue-700 mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Social Profiles</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-200 hover:bg-blue-700 hover:text-white p-3 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-200 hover:bg-blue-700 hover:text-white p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-200 hover:bg-blue-700 hover:text-white p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};