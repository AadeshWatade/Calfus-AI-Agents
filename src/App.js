import React, { useState } from 'react';


// --- HELPER & SVG COMPONENTS ---

// Icon for the user profile
const UserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

// Icons for the agent cards
const AgentIcons = {
  aCT: ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h.01M4.5 12h.01M12 19.5v.01M12 4.5v.01" />
    </svg>
  ),
  TransforMate: ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691V5.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25v4.992" />
    </svg>
  ),
  Explora: ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  Opticode: ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

// --- PAGE & UI COMPONENTS ---

// Header component
const Header = ({ isLoggedIn, userEmail, onLogout, onLoginClick }) => {
  const getInitials = (email) => {
    if (!email) return '';
    const parts = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').split(' ');
    return parts.map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/"><img className=' h-8 w-32 font-bold text-[#40c1ac]' src='https://static.wixstatic.com/media/9e4b4e_bd13eb5f51bf4193a52b06afc6cd07ea~mv2.png/v1/fill/w_125,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group.png' /></a> 
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                  {getInitials(userEmail)}
                </div>
                <span className="hidden sm:inline text-gray-700 font-medium">{userEmail}</span>
              </div>
              {/* <button
                onClick={onLogout}
                className="text-sm font-semibold text-gray-600 hover:text-custom-accent transition-colors"
              >
                Logout
              </button> */}
            </>
          ) : (
             <button
                onClick={onLoginClick}
                className="bg-white text-custom-accent font-semibold py-2 px-5 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300"
              >
                Login
              </button>
          )}
        </div>
      </div>
    </header>
  );
};

// Home Page Component
const HomePage = ({ onGetStarted }) => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-50">
    <div className="max-w-2xl">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Rewiring ERP with
      </h2>
      <h1 className="text-6xl md:text-8xl font-extrabold text-custom-accent leading-tight mb-4">
        AI Agents
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
        Smart, autonomous AI-powered assistants that streamline operations, automate workflows, and enhance decision-making.
      </p>
      <button
        onClick={onGetStarted}
        className="bg-custom-accent text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  </div>
);

// Login Page Component
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login: any non-empty email/password will work
    if (email && password) {
      onLogin(email);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Login to Your Account</h2>
          <p className="text-gray-500 mt-2">Welcome back!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-600 block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent transition"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-bold text-gray-600 block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-accent transition"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-custom-accent hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

// Agent Card Component
// AgentCard.jsx
const AgentCard = ({ iconName, title, description, url, onSelect }) => {
  const IconComponent = AgentIcons[iconName];

  // Determine the correct link based on title
  const linkUrl = title === "TransforMate"
    ? "https://transformate-demo.vercel.app/"
    : title === "Explora"
      ? "https://xplora-demo.vercel.app/"
      : url;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="bg-custom-accent bg-opacity-10 rounded-full p-4 mb-4">
        <IconComponent className="w-10 h-10 text-custom-accent" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow mb-6">{description}</p>

      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center bg-white border-2 border-custom-accent text-custom-accent font-semibold py-2 px-6 rounded-full group-hover:bg-custom-accent group-hover:text-white transition-all duration-300"
      >
        Select
      </a>
    </div>
  );
};


// Agents Page Component
const AgentsPage = () => {
  const agents = [
    {
      iconName: 'aCT',
      title: 'aCT',
      description: 'Agentic AI Solution for Test Script Execution and Report Generation.',
      url: '#', // Placeholder URL
    },
    {
      iconName: 'TransforMate',
      title: 'TransforMate',
      description: 'Agentic AI Solution for efficient data ingestion, cleansing, transformation, and integration.',
      url: 'https://transformate-demo.vercel.app/',
    },
    {
      iconName: 'Explora',
      title: 'Explora',
      description: 'Agentic AI Solution to automate requirement gathering and creation of BRD from notes.',
      url: 'https://xplora-demo.vercel.app/',
    },
    {
      iconName: 'Opticode',
      title: 'Opticode',
      description: 'Agentic AI Solution to generate and optimize code for Oracle EPM solutions.',
      url: '#',
    },
  ];

let openedWindow = null;

const handleSelect = (url) => {
  // Try opening—or reusing—named window/tab
  const windowName = "xploraDemo";
  if (!openedWindow || openedWindow.closed) {
    openedWindow = window.open(
      url,
      windowName,
      "noopener,noreferrer"
    );
    if (openedWindow) {
      openedWindow.focus();
    } else {
      // Popup was blocked—redirect current tab
      window.location.href = url;
    }
  } else {
    // Already open and not closed: just focus it
    openedWindow.focus();
  }
};



  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 pt-60 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Accelerate Oracle Implementations with Agentic AI
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg mb-16">
          Our cutting-edge Agentic AI solutions revolutionize Oracle implementations by automating complex tasks such as data conversion, test case creation & execution, BRD and training content creation. Experience a smarter, more efficient path to Oracle success.
        </p>
        <h3 className="text-4xl font-bold text-gray-800 mb-12">
          Meet our <span className="text-custom-accent">AI Agents</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <AgentCard
  key={agent.title}
  {...agent}
  onSelect={() => handleSelect(agent.url)}
/>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  // State management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'login', 'agents'

  // Event Handlers
  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
    setCurrentPage('agents'); // Go to agents page after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setCurrentPage('home'); // Go to home page after logout
  };

  const handleGetStarted = () => {
    setCurrentPage('login');
  };
  
  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  // Page Renderer
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'agents':
        // Only show agents page if logged in, otherwise redirect to login
        return isLoggedIn ? <AgentsPage /> : <LoginPage onLogin={handleLogin} />;
      case 'home':
      default:
        return <HomePage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header 
        isLoggedIn={isLoggedIn} 
        userEmail={userEmail} 
        onLogout={handleLogout}
        onLoginClick={handleLoginClick}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
