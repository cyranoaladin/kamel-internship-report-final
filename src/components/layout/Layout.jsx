import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Search, 
  Code, 
  GitBranch, 
  Shield, 
  Settings, 
  Workflow, 
  BookOpen,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home, description: 'Project Overview' },
    { path: '/research', label: 'Research', icon: Search, description: 'Platform Analysis' },
    { path: '/architecture', label: 'Architecture', icon: Code, description: 'Technical Design' },
    { path: '/development', label: 'Development', icon: GitBranch, description: 'Build Process' },
    { path: '/audit', label: 'Audit', icon: Shield, description: 'Quality Assessment' },
    { path: '/configuration', label: 'Configuration', icon: Settings, description: 'Setup Guide' },
    { path: '/workflow', label: 'Workflow', icon: Workflow, description: 'AI Automation' },
    { path: '/documentation', label: 'Documentation', icon: BookOpen, description: 'Resources Hub' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-jupiter-500 to-solana-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">
                  Kamel's Internship Report
                </h1>
                <p className="text-sm text-gray-400">Jupiter Swap DApp @ DeAura.io</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'text-jupiter-400 bg-jupiter-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {item.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-jupiter-500/20 rounded-lg border border-jupiter-500/30"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* External Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://x.com/treizeb__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Twitter"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://deaura.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-deaura-600 hover:bg-deaura-700 text-white text-sm font-medium rounded-lg transition-all duration-200"
              >
                DeAura.io
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = isActivePath(item.path);
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'text-jupiter-400 bg-jupiter-500/10 border border-jupiter-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <Icon size={20} />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
                
                {/* Mobile External Links */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="https://x.com/treizeb__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Twitter</span>
                    </a>
                    <a
                      href="https://deaura.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-deaura-600 hover:bg-deaura-700 text-white text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      DeAura.io
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Kamel's Internship Report - Jupiter Swap DApp Development at DeAura.io
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, Vite, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

