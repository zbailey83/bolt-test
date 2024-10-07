import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-4xl font-bold mb-4">Your Name</h2>
        <p className="text-xl mb-8">Web Developer & Designer</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-gray-300"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero