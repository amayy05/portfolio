import React from 'react';
import { Award, Code, Users, Briefcase } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Outstanding Innovation Award',
      description: 'Received for developing a breakthrough algorithm that improved system performance by 40%',
      year: '2022',
      icon: <Award size={24} className="text-blue-700" />,
    },
    {
      title: 'Open Source Contribution',
      description: 'Contributed to React core with 5 merged PRs that improved performance and accessibility',
      year: '2021',
      icon: <Code size={24} className="text-blue-700" />,
    },
    {
      title: 'Team Leadership',
      description: 'Led a team of 8 developers to successfully deliver a major project ahead of schedule',
      year: '2020',
      icon: <Users size={24} className="text-blue-700" />,
    },
    {
      title: 'Career Milestone',
      description: 'Promoted to Senior Software Engineer after consistently exceeding performance expectations',
      year: '2019',
      icon: <Briefcase size={24} className="text-blue-700" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional and personal accomplishments that have shaped my journey.
          </p>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12 md:space-y-0">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`md:flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      {index % 2 === 0 ? (
                        <>
                          <h3 className="text-xl font-bold text-gray-900 mr-3">{achievement.title}</h3>
                          {achievement.icon}
                        </>
                      ) : (
                        <>
                          {achievement.icon}
                          <h3 className="text-xl font-bold text-gray-900 ml-3">{achievement.title}</h3>
                        </>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{achievement.description}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center z-10 shadow-md">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                
                {/* Empty space for timeline layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg transition-colors duration-300">
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
};