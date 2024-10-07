import React from 'react'
import { Code, PenTool, Database, Globe } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: <Code size={24} /> },
  { name: 'UI/UX Design', icon: <PenTool size={24} /> },
  { name: 'Backend Development', icon: <Database size={24} /> },
  { name: 'Web Performance', icon: <Globe size={24} /> }
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills