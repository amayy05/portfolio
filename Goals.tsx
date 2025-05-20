import React from 'react';
import { Target, Star, Rocket, Heart } from 'lucide-react';

export const Goals: React.FC = () => {
  const goals = [
    {
      title: 'Professional Growth',
      description: 'Become a recognized expert in web development and contribute to cutting-edge technologies in the field',
      icon: <Rocket size={24} className="text-white" />,
      bgColor: 'bg-blue-700',
    },
    {
      title: 'Community Impact',
      description: 'Mentor 50+ junior developers and contribute to open-source projects that empower underrepresented groups in tech',
      icon: <Heart size={24} className="text-white" />,
      bgColor: 'bg-indigo-600',
    },
    {
      title: 'Innovation',
      description: 'Launch a startup focused on using technology to solve environmental challenges and improve sustainability',
      icon: <Star size={24} className="text-white" />,
      bgColor: 'bg-purple-600',
    },
    {
      title: 'Personal Development',
      description: 'Achieve work-life balance through mindfulness and continual learning across various disciplines beyond tech',
      icon: <Target size={24} className="text-white" />,
      bgColor: 'bg-blue-600',
    },
  ];

  return (
    <section id="goals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Future Goals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the aspirations that drive me forward and shape my professional and personal journey.
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <div className={`${goal.bgColor} p-4 flex items-center`}>
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{goal.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{goal.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">In Progress</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-700 h-2 rounded-full" 
                        style={{ width: `${25 * (index + 1)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Vision Statement</h3>
          <p className="text-gray-700 text-center leading-relaxed italic">
            "To use technology as a force for positive change, empowering communities
            and creating solutions that make the world more inclusive, sustainable, and
            connected."
          </p>
        </div>
      </div>
    </section>
  );
};