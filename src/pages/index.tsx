import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Bobby Boy Holdings
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            A forward-thinking holding company for ventures and investments.
          </p>
          
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-gray-600">
              Bobby Boy Holdings is the investment vehicle of Rob Olsthoorn, 
              focused on building and growing innovative ventures across various sectors.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Interested in learning more about our ventures or discussing potential opportunities?
            </p>
            <a 
              href="mailto:contact@bobbyboyholdings.com"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold">Bobby Boy Holdings</h3>
              <p className="text-gray-400 mt-2">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="https://github.com/rolstenhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/rolstenhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
