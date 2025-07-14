import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  GitBranch,
  Layers,
  Settings,
  Monitor,
  Cpu,
  Network,
  Lock
} from 'lucide-react';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const TechnicalArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState('frontend');

  const architectureLayers = {
    frontend: {
      title: 'Frontend Layer',
      description: 'Modern React application with TypeScript, optimized for performance and user experience.',
      icon: Monitor,
      color: '#3B82F6',
      components: [
        {
          name: 'React 18',
          description: 'Modern React with concurrent features and automatic batching',
          tech: 'JavaScript Library',
          features: ['Concurrent rendering', 'Automatic batching', 'Suspense', 'Error boundaries']
        },
        {
          name: 'Next.js 14',
          description: 'Full-stack React framework with App Router and server components',
          tech: 'React Framework',
          features: ['App Router', 'Server Components', 'Static generation', 'API routes']
        },
        {
          name: 'TypeScript',
          description: 'Strongly typed JavaScript for better development experience',
          tech: 'Programming Language',
          features: ['Type safety', 'IntelliSense', 'Refactoring', 'Error detection']
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development',
          tech: 'CSS Framework',
          features: ['Utility classes', 'Responsive design', 'Dark mode', 'Custom themes']
        }
      ]
    },
    blockchain: {
      title: 'Blockchain Layer',
      description: 'Solana blockchain integration with Web3.js and wallet adapters for secure transactions.',
      icon: Network,
      color: '#10B981',
      components: [
        {
          name: 'Solana Web3.js',
          description: 'Official Solana JavaScript SDK for blockchain interactions',
          tech: 'Blockchain SDK',
          features: ['Transaction creation', 'Account management', 'Program calls', 'RPC communication']
        },
        {
          name: 'Wallet Adapters',
          description: 'Universal wallet connection system for multiple Solana wallets',
          tech: 'Wallet Integration',
          features: ['Phantom support', 'Solflare integration', 'Backpack wallet', 'Auto-detection']
        },
        {
          name: 'SPL Token',
          description: 'Solana Program Library for token operations and management',
          tech: 'Token Standard',
          features: ['Token transfers', 'Account creation', 'Balance queries', 'Metadata handling']
        },
        {
          name: 'Jupiter API v6',
          description: 'Advanced DEX aggregation API for optimal swap routing',
          tech: 'DeFi API',
          features: ['Smart routing', 'Price discovery', 'MEV protection', 'Limit orders']
        }
      ]
    },
    services: {
      title: 'Services Layer',
      description: 'Modular service architecture with RPC management, state handling, and API integrations.',
      icon: Cpu,
      color: '#8B5CF6',
      components: [
        {
          name: 'RPC Manager',
          description: 'Intelligent RPC endpoint management with failover and load balancing',
          tech: 'Infrastructure Service',
          features: ['Multi-provider support', 'Circuit breaker', 'Health monitoring', 'Auto-failover']
        },
        {
          name: 'Swap Service',
          description: 'Core swap logic with Jupiter integration and transaction handling',
          tech: 'Business Logic',
          features: ['Quote fetching', 'Transaction building', 'Slippage calculation', 'Fee optimization']
        },
        {
          name: 'State Management',
          description: 'Zustand-based state management for application data',
          tech: 'State Management',
          features: ['Reactive updates', 'Persistence', 'DevTools', 'TypeScript support']
        },
        {
          name: 'Cache Layer',
          description: 'React Query for server state management and caching',
          tech: 'Data Management',
          features: ['Background updates', 'Optimistic updates', 'Error handling', 'Offline support']
        }
      ]
    },
    security: {
      title: 'Security Layer',
      description: 'Comprehensive security implementation with input validation, transaction security, and error handling.',
      icon: Shield,
      color: '#F59E0B',
      components: [
        {
          name: 'Input Validation',
          description: 'Comprehensive input sanitization and validation system',
          tech: 'Security Component',
          features: ['Schema validation', 'Type checking', 'Sanitization', 'Error boundaries']
        },
        {
          name: 'Transaction Security',
          description: 'Secure transaction handling with signature verification',
          tech: 'Blockchain Security',
          features: ['Signature validation', 'Amount verification', 'Slippage protection', 'Timeout handling']
        },
        {
          name: 'MEV Protection',
          description: 'Advanced protection against MEV attacks and front-running',
          tech: 'DeFi Security',
          features: ['Priority fees', 'Transaction batching', 'Smart routing', 'Anti-sandwich']
        },
        {
          name: 'Error Handling',
          description: 'Robust error handling and recovery mechanisms',
          tech: 'Reliability',
          features: ['Error boundaries', 'Retry logic', 'Fallback UI', 'Logging']
        }
      ]
    }
  };

  const systemMetrics = [
    { label: 'Components', value: '27', icon: Layers, color: '#3B82F6' },
    { label: 'Services', value: '12', icon: Settings, color: '#10B981' },
    { label: 'API Endpoints', value: '8', icon: Globe, color: '#8B5CF6' },
    { label: 'Test Coverage', value: '95%', icon: Shield, color: '#F59E0B' }
  ];

  const dataFlow = [
    {
      step: 1,
      title: 'User Interaction',
      description: 'User initiates swap through React interface',
      icon: Monitor,
      color: '#3B82F6'
    },
    {
      step: 2,
      title: 'Input Validation',
      description: 'TypeScript validation and input sanitization',
      icon: Lock,
      color: '#10B981'
    },
    {
      step: 3,
      title: 'Quote Request',
      description: 'Jupiter API v6 quote fetching with optimization',
      icon: Zap,
      color: '#8B5CF6'
    },
    {
      step: 4,
      title: 'Transaction Building',
      description: 'Solana transaction creation with security checks',
      icon: Code,
      color: '#F59E0B'
    },
    {
      step: 5,
      title: 'Wallet Signing',
      description: 'User wallet signature and transaction submission',
      icon: Shield,
      color: '#EF4444'
    },
    {
      step: 6,
      title: 'Blockchain Execution',
      description: 'Solana network processing and confirmation',
      icon: Network,
      color: '#06B6D4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Architecture
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive overview of the Jupiter Swap DApp architecture, showcasing modern 
            development practices, security implementations, and scalable design patterns.
          </p>
        </motion.div>

        {/* System Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {systemMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-center"
              >
                <Icon size={32} className="mx-auto mb-3" style={{ color: metric.color }} />
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Architecture Layers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            System Architecture Layers
          </h2>

          {/* Layer Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(architectureLayers).map(([key, layer]) => {
              const Icon = layer.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveLayer(key)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeLayer === key
                      ? 'text-white shadow-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeLayer === key ? layer.color : undefined
                  }}
                >
                  <Icon size={20} />
                  <span>{layer.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Details */}
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {architectureLayers[activeLayer].title}
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {architectureLayers[activeLayer].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {architectureLayers[activeLayer].components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-opacity-70 transition-all duration-300"
                  style={{ borderColor: `${architectureLayers[activeLayer].color}30` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        <TechnicalTooltip term={component.name}>
                          {component.name}
                        </TechnicalTooltip>
                      </h4>
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: `${architectureLayers[activeLayer].color}20`,
                          color: architectureLayers[activeLayer].color
                        }}
                      >
                        {component.tech}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {component.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-400">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-1">
                      {component.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-xs text-gray-400"
                        >
                          <div 
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: architectureLayers[activeLayer].color }}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transaction Data Flow
          </h2>

          <div className="space-y-8">
            {dataFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon size={24} style={{ color: step.color }} />
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>

                  {index < dataFlow.length - 1 && (
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30">
            <div className="flex items-center space-x-3 mb-6">
              <Code size={32} className="text-blue-400" />
              <h3 className="text-2xl font-bold text-white">
                Modern Development Stack
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Built with cutting-edge technologies including React 18, Next.js 14, and TypeScript 
              for type safety and developer experience. The architecture follows modern patterns 
              with component composition and service-oriented design.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Component-based architecture</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>TypeScript for type safety</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Server-side rendering with Next.js</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-6">
              <Shield size={32} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">
                Security-First Design
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Comprehensive security implementation with input validation, transaction verification, 
              and MEV protection. Every user interaction is validated and secured against common 
              DeFi vulnerabilities and attack vectors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Input sanitization and validation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Transaction security checks</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>MEV protection mechanisms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalArchitecture;

