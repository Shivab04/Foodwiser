import React from 'react';
import { ArrowRight, Brain, Utensils, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Your AI Food Decision Assistant
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Let us help you decide what to eat based on your mood and preferences
        </p>
        <Link
          to="/register"
          className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all text-lg font-semibold"
        >
          Get Started <ArrowRight className="ml-2" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card p-6 hover:shadow-lg transition-shadow">
          <Brain className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Smart Recommendations</h3>
          <p className="text-gray-400">
            AI-powered suggestions based on your mood and preferences
          </p>
        </div>
        <div className="card p-6 hover:shadow-lg transition-shadow">
          <Utensils className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Personalized Choices</h3>
          <p className="text-gray-400">
            Tailored food options that match your dietary requirements
          </p>
        </div>
        <div className="card p-6 hover:shadow-lg transition-shadow">
          <Clock className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">Quick Decisions</h3>
          <p className="text-gray-400">
            Save time with instant food recommendations
          </p>
        </div>
      </div>

      <div className="card p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Sign Up",
              description: "Create your account with basic details",
            },
            {
              step: 2,
              title: "Set Preferences",
              description: "Tell us about your dietary needs and likes",
            },
            {
              step: 3,
              title: "Get Recommendations",
              description: "Receive personalized food suggestions",
            },
            {
              step: 4,
              title: "Order & Enjoy",
              description: "Place your order directly through our app",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Join thousands of satisfied users who never worry about what to eat
        </p>
        <div className="flex items-center justify-center space-x-2">
          <Heart className="text-red-500" />
          <span className="text-white font-semibold">
            Trusted by over 10,000 food lovers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;