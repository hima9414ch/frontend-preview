import React, { useState, useEffect } from 'react';
import images from '../assets/images';

const SkillsList = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React.js', level: 90, icon: images[0] },
    { id: 2, name: 'JavaScript', level: 85, icon: images[1] },
    { id: 3, name: 'Node.js', level: 80, icon: images[2] },
    { id: 4, name: 'Python', level: 75, icon: images[3] },
    { id: 5, name: 'TypeScript', level: 70, icon: images[4] },
    { id: 6, name: 'MongoDB', level: 85, icon: images[5] }
  ]);

  return (
    <div id="SkillsList_1" className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <h2 id="SkillsList_2" className="text-4xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Technical Skills</h2>
      
      <div id="SkillsList_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            id={`SkillsList_${skill.id + 3}`}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-600">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="flex flex-col justify-center rounded bg-gradient-to-r from-blue-400 to-purple-500 shadow-none transition-all duration-500 ease-in-out"
                ></div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;