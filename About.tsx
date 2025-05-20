import React from 'react';
import { MapPin, GraduationCap, Languages } from 'lucide-react';

export const About: React.FC = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      years: '2027 - 2029',
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'st.john college of engineering and management',
      years: '2014 - 2018',
    },
  ];

  const languages = [
    { name: 'Marathi', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' },
    { name: 'German', level: 'Basic' },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'CSS/SCSS', 
    'Tailwind CSS', 'Git', 'DevOps', 'UI/UX Design'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-700">India</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-700 pl-4">
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Languages size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-medium text-gray-900">{lang.name}</span>
                    <span className="text-gray-500 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Personal Statement</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate software engineer with over 5 years of experience building
            web applications. My journey in technology started when I was 12, playing
            around with HTML and CSS to create simple websites. Over the years, I've
            developed a deep interest in creating intuitive user experiences and solving
            complex problems through elegant code solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            When I'm not coding, you can find me hiking in the mountains, reading science
            fiction, or experimenting with new recipes in the kitchen. I believe in
            continuous learning and strive to improve my skills every day.
          </p>
        </div>
      </div>
    </section>
  );
};