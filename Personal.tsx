import React, { useState } from 'react';
import { Book, Briefcase, Coffee, Music, Camera, Bike, UserCheck, Globe } from 'lucide-react';

export const Personal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hobbies');

  const hobbies = [
    {
      name: 'Photography',
      description: 'Capturing moments and exploring visual storytelling through street and landscape photography',
      icon: <Camera size={24} className="text-blue-700" />,
    },
    {
      name: 'Cycling',
      description: 'Weekend rides exploring new trails and urban paths to stay active and connect with nature',
      icon: <Bike size={24} className="text-blue-700" />,
    },
    {
      name: 'Music Production',
      description: 'Creating electronic and ambient music tracks as a creative outlet and technical challenge',
      icon: <Music size={24} className="text-blue-700" />,
    },
    {
      name: 'Coffee Brewing',
      description: 'Exploring different brewing methods and beans from around the world',
      icon: <Coffee size={24} className="text-blue-700" />,
    },
  ];

  const roleModels = [
    {
      name: 'Ada Lovelace',
      reason: 'For being the world\'s first computer programmer and showing that innovation knows no gender',
    },
    {
      name: 'Elon Musk',
      reason: 'For his relentless drive to push boundaries and solve humanity\'s biggest challenges',
    },
    {
      name: 'Marie Curie',
      reason: 'For her groundbreaking scientific discoveries and dedication to research despite obstacles',
    },
  ];

  const favorites = {
    books: [
      { title: 'Sapiens', author: 'Yuval Noah Harari' },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas' },
      { title: 'Dune', author: 'Frank Herbert' },
    ],
    websites: [
      { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com' },
      { name: 'CSS-Tricks', url: 'https://css-tricks.com' },
      { name: 'TED', url: 'https://www.ted.com' },
    ],
    startups: [
      { name: 'Notion', reason: 'For reinventing productivity tools' },
      { name: 'Vercel', reason: 'For revolutionizing frontend deployment' },
      { name: 'Stripe', reason: 'For making payments infrastructure accessible' },
    ],
  };

  const volunteeringExperience = [
    {
      organization: 'Code.org',
      role: 'Volunteer Teacher',
      period: '2020 - Present',
      description: 'Teaching programming basics to underprivileged middle school students',
    },
    {
      organization: 'Tech For Good',
      role: 'Project Lead',
      period: '2019 - 2021',
      description: 'Led a team building websites for local non-profits',
    },
  ];

  return (
    <section id="personal" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Personal Side</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beyond my professional life, these are the things that make me who I am.
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="flex flex-wrap border-b">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'hobbies'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('hobbies')}
            >
              Hobbies
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'roleModels'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('roleModels')}
            >
              Role Models
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'favorites'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('favorites')}
            >
              Favorites
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'volunteering'
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
              onClick={() => setActiveTab('volunteering')}
            >
              Volunteering
            </button>
          </div>

          <div className="p-6">
            {/* Hobbies */}
            {activeTab === 'hobbies' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 mr-4">
                      {hobby.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{hobby.name}</h3>
                      <p className="text-gray-600 text-sm">{hobby.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Role Models */}
            {activeTab === 'roleModels' && (
              <div className="space-y-6">
                {roleModels.map((model, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <UserCheck size={20} className="text-blue-700 mr-2" />
                      <h3 className="font-semibold text-gray-900">{model.name}</h3>
                    </div>
                    <p className="text-gray-600">{model.reason}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Favorites */}
            {activeTab === 'favorites' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Book size={20} className="text-blue-700 mr-2" /> Favorite Books
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {favorites.books.map((book, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900">{book.title}</h4>
                        <p className="text-gray-500 text-sm">by {book.author}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe size={20} className="text-blue-700 mr-2" /> Favorite Websites
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {favorites.websites.map((website, index) => (
                      <a 
                        key={index} 
                        href={website.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow hover:bg-blue-50"
                      >
                        <h4 className="font-medium text-blue-700">{website.name}</h4>
                        <p className="text-gray-500 text-sm truncate">{website.url}</p>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Briefcase size={20} className="text-blue-700 mr-2" /> Favorite Startups
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {favorites.startups.map((startup, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900">{startup.name}</h4>
                        <p className="text-gray-500 text-sm">{startup.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Volunteering */}
            {activeTab === 'volunteering' && (
              <div className="space-y-6">
                {volunteeringExperience.map((exp, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{exp.organization}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};