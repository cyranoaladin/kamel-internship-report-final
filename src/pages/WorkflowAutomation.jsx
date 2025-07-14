import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, Zap, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const WorkflowAutomation = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('development');

  const workflows = {
    development: {
      title: 'AI-Enhanced Development',
      description: 'Intelligent development workflow with AI assistance for coding, debugging, and optimization.',
      icon: Bot,
      color: '#3B82F6',
      efficiency: '85%',
      timeSaved: '156 hours',
      steps: [
        {
          name: 'Code Generation',
          tool: 'Windsurf Cascade',
          description: 'AI-powered code completion and generation with context awareness',
          automation: 'High',
          impact: 'Faster development cycles'
        },
        {
          name: 'Code Review',
          tool: 'GitHub Copilot',
          description: 'Automated code review and suggestion system',
          automation: 'Medium',
          impact: 'Improved code quality'
        },
        {
          name: 'Debugging',
          tool: 'Claude AI',
          description: 'Intelligent debugging assistance and problem solving',
          automation: 'High',
          impact: 'Faster issue resolution'
        },
        {
          name: 'Documentation',
          tool: 'AI Documentation',
          description: 'Automated documentation generation from code',
          automation: 'High',
          impact: 'Comprehensive docs'
        }
      ]
    },
    testing: {
      title: 'Automated Testing Pipeline',
      description: 'Comprehensive testing automation with continuous integration and quality assurance.',
      icon: CheckCircle,
      color: '#10B981',
      efficiency: '92%',
      timeSaved: '89 hours',
      steps: [
        {
          name: 'Unit Testing',
          tool: 'Jest + React Testing Library',
          description: 'Automated unit test execution with coverage reporting',
          automation: 'High',
          impact: '95% test coverage'
        },
        {
          name: 'Integration Testing',
          tool: 'Custom Test Suite',
          description: 'Automated integration testing for API and blockchain interactions',
          automation: 'High',
          impact: 'Reliable integrations'
        },
        {
          name: 'E2E Testing',
          tool: 'Playwright',
          description: 'End-to-end testing automation for user workflows',
          automation: 'Medium',
          impact: 'User experience validation'
        },
        {
          name: 'Performance Testing',
          tool: 'Lighthouse CI',
          description: 'Automated performance monitoring and optimization',
          automation: 'High',
          impact: 'Optimal performance'
        }
      ]
    },
    deployment: {
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline with continuous integration and delivery.',
      icon: Zap,
      color: '#8B5CF6',
      efficiency: '94%',
      timeSaved: '67 hours',
      steps: [
        {
          name: 'Build Process',
          tool: 'Vite + Vercel',
          description: 'Automated build optimization and asset generation',
          automation: 'High',
          impact: 'Optimized builds'
        },
        {
          name: 'Quality Gates',
          tool: 'GitHub Actions',
          description: 'Automated quality checks and validation before deployment',
          automation: 'High',
          impact: 'Quality assurance'
        },
        {
          name: 'Deployment',
          tool: 'Vercel Auto-Deploy',
          description: 'Automatic deployment to production on successful builds',
          automation: 'High',
          impact: 'Instant deployment'
        },
        {
          name: 'Monitoring',
          tool: 'Vercel Analytics',
          description: 'Automated performance monitoring and error tracking',
          automation: 'High',
          impact: 'Proactive monitoring'
        }
      ]
    }
  };

  const aiTools = [
    {
      name: 'Windsurf Cascade',
      category: 'Code Completion',
      efficiency: '85%',
      description: 'Advanced AI-powered code completion with intelligent context awareness and multi-file understanding.',
      features: ['Context-aware completion', 'Multi-file analysis', 'Intelligent refactoring', 'Code pattern recognition'],
      usage: 'Primary development assistant for code generation and completion'
    },
    {
      name: 'GitHub Copilot',
      category: 'Pair Programming',
      efficiency: '78%',
      description: 'AI pair programming tool for function implementation, test generation, and code suggestions.',
      features: ['Function generation', 'Test case creation', 'Code suggestions', 'Documentation assistance'],
      usage: 'Secondary assistant for complex function implementation and testing'
    },
    {
      name: 'Claude AI',
      category: 'Problem Solving',
      efficiency: '92%',
      description: 'Advanced AI assistant for architectural decisions, debugging, and complex problem solving.',
      features: ['Architecture consultation', 'Debugging assistance', 'Code review', 'Best practices guidance'],
      usage: 'Strategic consultant for high-level decisions and complex debugging'
    }
  ];

  const automationMetrics = [
    { label: 'Development Speed', value: '+85%', icon: TrendingUp, color: '#3B82F6' },
    { label: 'Code Quality', value: '94/100', icon: CheckCircle, color: '#10B981' },
    { label: 'Time Saved', value: '312h', icon: Clock, color: '#8B5CF6' },
    { label: 'Error Reduction', value: '-67%', icon: Zap, color: '#F59E0B' }
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
            Workflow
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced automation workflows powered by AI tools and modern development practices, 
            showcasing intelligent development, testing, and deployment processes.
          </p>
        </motion.div>

        {/* Automation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {automationMetrics.map((metric, index) => {
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

        {/* Workflow Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(workflows).map(([key, workflow]) => {
            const Icon = workflow.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveWorkflow(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeWorkflow === key
                    ? 'text-white shadow-glow'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeWorkflow === key ? workflow.color : undefined
                }}
              >
                <Icon size={20} />
                <span>{workflow.title}</span>
                <span className="text-sm opacity-75">({workflow.efficiency})</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Workflow Details */}
        <motion.div
          key={activeWorkflow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {workflows[activeWorkflow].title}
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              {workflows[activeWorkflow].description}
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: workflows[activeWorkflow].color }}>
                  {workflows[activeWorkflow].efficiency}
                </div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: workflows[activeWorkflow].color }}>
                  {workflows[activeWorkflow].timeSaved}
                </div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflows[activeWorkflow].steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      <TechnicalTooltip term={step.name}>
                        {step.name}
                      </TechnicalTooltip>
                    </h3>
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${workflows[activeWorkflow].color}20`,
                        color: workflows[activeWorkflow].color
                      }}
                    >
                      {step.tool}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    step.automation === 'High' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {step.automation} Automation
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Impact:</span>
                  <span className="text-sm font-medium text-white">{step.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Tools Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <TechnicalTooltip term="AI-Assisted Development">
              AI Tools Integration
            </TechnicalTooltip>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {tool.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-green-400 font-medium">{tool.efficiency}</span>
                  </div>
                </div>

                <p className="text-sm text-blue-300 mb-4">{tool.category}</p>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {tool.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tool.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-2 text-xs text-blue-300"
                      >
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  <strong>Usage:</strong> {tool.usage}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp size={32} className="text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                Productivity Gains
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              AI-enhanced workflows have dramatically improved development productivity, 
              reducing manual tasks and accelerating the development cycle while maintaining high quality standards.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>85% faster development cycles</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>312 hours saved through automation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>67% reduction in manual errors</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/30">
            <div className="flex items-center space-x-3 mb-6">
              <Bot size={32} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">
                Quality Assurance
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Automated testing and quality checks ensure consistent code quality, 
              comprehensive test coverage, and reliable deployment processes with minimal human intervention.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>95% automated test coverage</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Continuous integration pipeline</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-purple-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Automated deployment validation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkflowAutomation;

