import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon, ShieldCheckIcon, BugPlayIcon, SettingsIcon, GitForkIcon, StarIcon } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-bg.jpg" // Placeholder for a hero background image
            alt="Security Management Platform Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Security Management Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up">
            Comprehensive Threat Detection & Incident Response for Modern Enterprises
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View on GitHub <GitForkIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-gray-400 text-gray-200 hover:bg-gray-800 px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Live Demo <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-100 animate-fade-in">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheckIcon className="h-10 w-10 text-blue-400" />}
              title="Advanced Threat Detection"
              description="Leverage sophisticated algorithms to identify and neutralize potential security threats in real-time."
            />
            <FeatureCard
              icon={<BugPlayIcon className="h-10 w-10 text-green-400" />}
              title="Automated Incident Response"
              description="Streamline your security operations with automated workflows for rapid incident handling and resolution."
            />
            <FeatureCard
              icon={<SettingsIcon className="h-10 w-10 text-purple-400" />}
              title="Configurable & Scalable"
              description="Easily adapt the platform to your infrastructure with flexible configuration options and scalable architecture."
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-100 animate-fade-in">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">Java</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Spring Security</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Maven</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Cybersecurity</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Threat Detection</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Incident Response</Badge>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-100 animate-fade-in">
            Ready to Enhance Your Security?
          </h2>
          <p className="text-lg text-gray-300 mb-8 animate-fade-in-up">
            Explore the codebase, contribute to its development, or deploy it for your own needs.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started Now <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Security Management Platform. All rights reserved.</p>
        <p>Developed by Gabriel Demetrios Lafis</p>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-gray-800 border-gray-700 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
    <CardHeader className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 bg-gray-700 rounded-full">
        {icon}
      </div>
      <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center text-gray-300">
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default App;

