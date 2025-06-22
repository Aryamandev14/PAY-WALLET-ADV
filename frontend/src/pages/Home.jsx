import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAuthRedirect = () => {
    navigate('/signup'); // Directly redirects to your signup page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-2 text-xl font-bold text-indigo-800">PayWallet</span>
        </div>
        <button 
          onClick={handleAuthRedirect}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Sign Up
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Seamless Digital Payments <br />
          <span className="text-indigo-600">Made Simple</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Send, receive, and manage your money with PayWallet. Fast, secure, and designed for your convenience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleAuthRedirect}
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition duration-300 text-lg font-medium shadow-lg"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/signin')} // Alternative for users who already have an account
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition duration-300 text-lg font-medium"
          >
            I have an account
          </button>
        </div>
        
        {/* App Preview */}
        <div className="mt-16 relative max-w-2xl">
          <div className="absolute -inset-4 bg-indigo-100 rounded-3xl transform rotate-1 opacity-70"></div>
          <div className="relative bg-white p-2 rounded-2xl shadow-xl">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="p-4 bg-indigo-600 flex justify-between items-center">
                <span className="text-white font-medium">PayWallet</span>
                <span className="text-white text-sm">$1,245.00</span>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {['Send', 'Request', 'Pay', 'Deposit', 'History', 'Cards'].map((action) => (
                  <div key={action} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} PayWallet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
