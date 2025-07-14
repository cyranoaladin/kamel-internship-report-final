import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Key, Globe, Shield, Code, CheckCircle } from 'lucide-react';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const ConfigurationSetup = () => {
  const [activeTab, setActiveTab] = useState('environment');

  const configurationSections = {
    environment: {
      title: 'Environment Variables',
      icon: Settings,
      color: '#3B82F6',
      content: [
        {
          name: 'NEXT_PUBLIC_SOLANA_NETWORK',
          value: 'mainnet-beta',
          description: 'Solana network configuration for production deployment',
          required: true,
          type: 'string'
        },
        {
          name: 'NEXT_PUBLIC_JUPITER_API_URL',
          value: 'https://quote-api.jup.ag/v6',
          description: 'Jupiter API v6 endpoint for swap quotes and routing',
          required: true,
          type: 'url'
        },
        {
          name: 'NEXT_PUBLIC_APP_ENV',
          value: 'production',
          description: 'Application environment setting',
          required: true,
          type: 'string'
        }
      ]
    },
    apis: {
      title: 'API Configuration',
      icon: Globe,
      color: '#10B981',
      content: [
        {
          name: 'Helius RPC',
          endpoint: 'https://mainnet.helius-rpc.com/?api-key=d94d81dd-f2a1-40f7-920d-0dfaf3aaf032',
          description: 'Primary RPC provider with enhanced performance and reliability',
          features: ['Priority access', 'Enhanced rate limits', 'Advanced analytics'],
          status: 'active'
        },
        {
          name: 'Alchemy RPC',
          endpoint: 'https://solana-mainnet.g.alchemy.com/v2/UvOk23LRlqGz1m58VCEd3PJ2ZOX2h9KM',
          description: 'Secondary RPC provider for failover and load balancing',
          features: ['Automatic failover', 'Load balancing', 'Health monitoring'],
          status: 'active'
        },
        {
          name: 'Eclipse Helius',
          endpoint: 'https://eclipse.helius-rpc.com/',
          description: 'Tertiary RPC provider for additional redundancy',
          features: ['Free tier', 'Backup provider', 'Emergency fallback'],
          status: 'standby'
        }
      ]
    },
    security: {
      title: 'Security Settings',
      icon: Shield,
      color: '#8B5CF6',
      content: [
        {
          setting: 'Input Validation',
          status: 'enabled',
          description: 'Comprehensive input sanitization and validation for all user inputs',
          details: ['Schema validation', 'Type checking', 'Range validation', 'Format verification']
        },
        {
          setting: 'Transaction Security',
          status: 'enabled',
          description: 'Advanced transaction security with signature verification and amount validation',
          details: ['Signature validation', 'Amount verification', 'Timeout handling', 'Replay protection']
        },
        {
          setting: 'MEV Protection',
          status: 'enabled',
          description: 'Built-in protection against MEV attacks and front-running',
          details: ['Priority fees', 'Transaction batching', 'Smart routing', 'Anti-sandwich']
        },
        {
          setting: 'Error Boundaries',
          status: 'enabled',
          description: 'Comprehensive error handling and recovery mechanisms',
          details: ['Component boundaries', 'Async error handling', 'Fallback UI', 'Error reporting']
        }
      ]
    },
    deployment: {
      title: 'Deployment Configuration',
      icon: Code,
      color: '#F59E0B',
      content: [
        {
          platform: 'Vercel',
          config: 'vercel.json',
          description: 'Production deployment configuration for Vercel platform',
          settings: [
            'Static build optimization',
            'Route configuration',
            'Security headers',
            'Cache policies'
          ]
        },
        {
          platform: 'Build Process',
          config: 'vite.config.js',
          description: 'Build optimization and bundling configuration',
          settings: [
            'Code splitting',
            'Tree shaking',
            'Asset optimization',
            'Source maps'
          ]
        },
        {
          platform: 'CI/CD Pipeline',
          config: 'GitHub Actions',
          description: 'Automated testing and deployment pipeline',
          settings: [
            'Automated testing',
            'Build verification',
            'Deployment automation',
            'Quality gates'
          ]
        }
      ]
    }
  };

  const setupSteps = [
    {
      step: 1,
      title: 'Environment Setup',
      description: 'Configure environment variables and API keys',
      icon: Settings,
      color: '#3B82F6'
    },
    {
      step: 2,
      title: 'API Integration',
      description: 'Set up RPC providers and API endpoints',
      icon: Globe,
      color: '#10B981'
    },
    {
      step: 3,
      title: 'Security Configuration',
      description: 'Enable security features and validation',
      icon: Shield,
      color: '#8B5CF6'
    },
    {
      step: 4,
      title: 'Deployment Ready',
      description: 'Verify configuration and deploy to production',
      icon: CheckCircle,
      color: '#F59E0B'
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
            Configuration
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Setup
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive configuration guide for the Jupiter Swap DApp, including 
            environment variables, API setup, security settings, and deployment configuration.
          </p>
        </motion.div>

        {/* Setup Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {setupSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-center"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <Icon size={24} style={{ color: step.color }} />
                </div>
                <div className="text-lg font-bold text-white mb-2">Step {step.step}</div>
                <div className="text-sm font-medium text-gray-300 mb-2">{step.title}</div>
                <div className="text-xs text-gray-400">{step.description}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Configuration Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(configurationSections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'text-white shadow-glow'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeTab === key ? section.color : undefined
                }}
              >
                <Icon size={20} />
                <span>{section.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {configurationSections[activeTab].title}
            </h2>
          </div>

          {/* Environment Variables */}
          {activeTab === 'environment' && (
            <div className="space-y-6">
              {configurationSections[activeTab].content.map((env, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        <TechnicalTooltip term={env.name}>
                          {env.name}
                        </TechnicalTooltip>
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded ${env.required ? 'bg-red-500/20 text-red-300' : 'bg-gray-500/20 text-gray-300'}`}>
                          {env.required ? 'Required' : 'Optional'}
                        </span>
                        <span className="text-gray-400">Type: {env.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{env.description}</p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                    <span className="text-blue-400">{env.name}</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-green-400">"{env.value}"</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* API Configuration */}
          {activeTab === 'apis' && (
            <div className="space-y-6">
              {configurationSections[activeTab].content.map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{api.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        api.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {api.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{api.description}</p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm mb-4 break-all">
                    <span className="text-blue-400">{api.endpoint}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {api.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <CheckCircle size={14} className="text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              {configurationSections[activeTab].content.map((security, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        <TechnicalTooltip term={security.setting}>
                          {security.setting}
                        </TechnicalTooltip>
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">
                        {security.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{security.description}</p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Implementation Details:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {security.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Deployment Configuration */}
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              {configurationSections[activeTab].content.map((deploy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{deploy.platform}</h3>
                      <span className="px-3 py-1 rounded-full text-sm bg-orange-500/20 text-orange-300">
                        {deploy.config}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{deploy.description}</p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Configuration Settings:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {deploy.settings.map((setting, settingIndex) => (
                        <div
                          key={settingIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <CheckCircle size={14} className="text-orange-400" />
                          <span>{setting}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ConfigurationSetup;

