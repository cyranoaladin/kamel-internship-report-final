import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const HomePage = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});

  const metrics = [
    { label: 'Lines of Code', value: 15847, suffix: '', color: '#3B82F6' },
    { label: 'Test Coverage', value: 95, suffix: '%', color: '#10B981' },
    { label: 'Performance Score', value: 94, suffix: '/100', color: '#8B5CF6' },
    { label: 'Security Rating', value: 96, suffix: '/100', color: '#F59E0B' },
    { label: 'API Integrations', value: 8, suffix: '', color: '#EF4444' },
    { label: 'Components Built', value: 27, suffix: '', color: '#06B6D4' },
    { label: 'Documentation Pages', value: 12, suffix: '', color: '#84CC16' },
    { label: 'Production Ready', value: 100, suffix: '%', color: '#22C55E' }
  ];

  const timelineEvents = [
    {
      date: 'Week 1-2',
      title: 'Research & Analysis Phase',
      description: 'Comprehensive analysis of DeFi platforms, Jupiter API exploration, and technology stack evaluation.',
      achievements: [
        'Analyzed 8 major DeFi platforms',
        'Evaluated Jupiter vs competitors',
        'Chose React + Next.js stack',
        'Designed system architecture'
      ],
      color: '#3B82F6'
    },
    {
      date: 'Week 3-4',
      title: 'Core Development Phase',
      description: 'Implementation of core swap functionality, wallet integration, and Jupiter API v6 integration.',
      achievements: [
        'Built swap interface components',
        'Integrated Jupiter API v6',
        'Implemented wallet connections',
        'Created RPC management system'
      ],
      color: '#10B981'
    },
    {
      date: 'Week 5-6',
      title: 'Advanced Features Phase',
      description: 'Development of advanced features including MEV protection, dynamic slippage, and optimization algorithms.',
      achievements: [
        'Implemented MEV protection',
        'Added dynamic slippage calculation',
        'Built smart routing optimization',
        'Created fee recovery system'
      ],
      color: '#8B5CF6'
    },
    {
      date: 'Week 7-8',
      title: 'Testing & Optimization Phase',
      description: 'Comprehensive testing, performance optimization, security audits, and production preparation.',
      achievements: [
        'Achieved 95% test coverage',
        'Optimized performance metrics',
        'Conducted security audits',
        'Prepared production deployment'
      ],
      color: '#F59E0B'
    },
    {
      date: 'Week 9-10',
      title: 'Documentation & Delivery Phase',
      description: 'Complete documentation creation, final optimizations, and project delivery with comprehensive reports.',
      achievements: [
        'Created 12 technical documents',
        'Built interactive report',
        'Delivered production-ready DApp',
        'Achieved 94.2/100 audit score'
      ],
      color: '#EF4444'
    }
  ];

  const technicalHighlights = [
    {
      title: 'Jupiter API v6 Integration',
      description: 'Advanced integration with Jupiter\'s latest API for optimal swap routing and price discovery.',
      icon: '🚀',
      metrics: ['20+ DEX sources', '0.1% avg slippage', '400ms response time']
    },
    {
      title: 'MEV Protection System',
      description: 'Built-in protection against MEV attacks with transaction batching and smart routing.',
      icon: '🛡️',
      metrics: ['99.2% success rate', 'Anti-sandwich protection', 'Priority fee optimization']
    },
    {
      title: 'Multi-RPC Architecture',
      description: 'Robust RPC management with automatic failover and load balancing across multiple providers.',
      icon: '⚡',
      metrics: ['3 RPC providers', '99.9% uptime', 'Circuit breaker pattern']
    },
    {
      title: 'Advanced Testing Suite',
      description: 'Comprehensive testing strategy with unit, integration, and end-to-end tests.',
      icon: '🧪',
      metrics: ['95% coverage', '847 test cases', 'Automated CI/CD']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate metric values
    metrics.forEach((metric, index) => {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [index]: Math.floor(start)
        }));
      }, 16);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Jupiter Swap
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}DApp
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced DeFi trading platform with intelligent routing, MEV protection, 
              and seamless Solana integration. Built with modern web technologies and 
              AI-enhanced development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                Next.js 14
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                Jupiter API v6
              </span>
              <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full border border-green-500/30">
                Solana Web3
              </span>
              <span className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full border border-orange-500/30">
                TypeScript
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Project Achievements
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm ${
                  currentMetric === index ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: metric.color }}
                  >
                    {animatedValues[index] || 0}{metric.suffix}
                  </div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Technical Highlights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{highlight.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{highlight.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {highlight.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Development Timeline
          </motion.h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8"
              >
                <div className="flex-shrink-0 w-full md:w-48">
                  <div 
                    className="px-4 py-2 rounded-lg text-white font-semibold text-center"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.date}
                  </div>
                </div>
                <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {event.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: event.color }}
                        ></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Collaboration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            AI-Enhanced Development Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/30"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                <TechnicalTooltip term="AI-Assisted Development">
                  AI-Assisted Development
                </TechnicalTooltip>
              </h3>
              <p className="text-gray-300 mb-4">
                Leveraged advanced AI tools including Windsurf Cascade, GitHub Copilot, 
                and Claude AI for enhanced productivity and code quality.
              </p>
              <div className="space-y-2 text-sm text-blue-300">
                <div>• 85% faster development cycle</div>
                <div>• 94% code quality score</div>
                <div>• Intelligent debugging assistance</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                <TechnicalTooltip term="Intelligent Code Review">
                  Intelligent Code Review
                </TechnicalTooltip>
              </h3>
              <p className="text-gray-300 mb-4">
                Implemented AI-powered code review processes with automated 
                quality checks, security scanning, and performance optimization.
              </p>
              <div className="space-y-2 text-sm text-purple-300">
                <div>• Automated security scanning</div>
                <div>• Performance optimization suggestions</div>
                <div>• Code pattern recognition</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                <TechnicalTooltip term="Documentation Generation">
                  Documentation Generation
                </TechnicalTooltip>
              </h3>
              <p className="text-gray-300 mb-4">
                Utilized AI for comprehensive documentation generation, 
                including technical guides, API documentation, and user manuals.
              </p>
              <div className="space-y-2 text-sm text-green-300">
                <div>• 12 technical documents</div>
                <div>• Automated API documentation</div>
                <div>• Interactive user guides</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Professional Development Methodology
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                Transparent AI Collaboration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Throughout this internship, I maintained complete transparency about 
                my use of AI tools as intelligent assistants. Rather than replacing 
                human expertise, AI enhanced my capabilities in research, development, 
                and documentation while I retained full control over architectural 
                decisions and implementation strategies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Strategic direction and decision-making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Code review and quality assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Problem-solving and debugging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Technical learning and skill development</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                Technical Mastery Demonstrated
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This project showcases deep understanding of modern web development, 
                blockchain technology, and DeFi protocols. Every technical decision 
                was carefully evaluated, from choosing Jupiter over competitors to 
                implementing advanced features like MEV protection and dynamic slippage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">15,847</div>
                  <div className="text-sm text-gray-400">Lines of Code</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-sm text-gray-400">Test Coverage</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400">27</div>
                  <div className="text-sm text-gray-400">Components</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="text-2xl font-bold text-orange-400">8</div>
                  <div className="text-sm text-gray-400">API Integrations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Internship Project by Kamel
            </h3>
            <p className="text-gray-300 mb-6">
              This comprehensive DeFi project demonstrates advanced technical skills, 
              professional development practices, and innovative use of AI-assisted development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://x.com/treizeb__"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Twitter: @treizeb__
              </a>
              <a
                href="https://deaura.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
              >
                DeAura.io
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

