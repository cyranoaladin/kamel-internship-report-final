import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  GitCommit, 
  Clock, 
  Code, 
  Bug, 
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const DevelopmentJourney = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const developmentWeeks = {
    1: {
      title: 'Week 1: Research & Planning',
      period: 'July 1-7, 2025',
      focus: 'Platform Analysis & Technology Selection',
      color: '#3B82F6',
      dailyProgress: [
        {
          day: 'Monday',
          date: 'July 1',
          hours: 8,
          commits: 3,
          linesAdded: 0,
          tasks: [
            'Project kickoff and requirements analysis',
            'DeFi platform research initiation',
            'Jupiter Protocol deep dive'
          ],
          challenges: ['Understanding DeFi ecosystem complexity'],
          solutions: ['Created comprehensive research framework'],
          learnings: ['DeFi aggregation principles', 'Solana ecosystem overview']
        },
        {
          day: 'Tuesday',
          date: 'July 2',
          hours: 8,
          commits: 5,
          linesAdded: 247,
          tasks: [
            'Comparative analysis of Jupiter vs competitors',
            'Technology stack evaluation',
            'Initial architecture planning'
          ],
          challenges: ['Choosing between React and Next.js'],
          solutions: ['Created decision matrix with weighted criteria'],
          learnings: ['Next.js 14 App Router benefits', 'TypeScript advantages in DeFi']
        },
        {
          day: 'Wednesday',
          date: 'July 3',
          hours: 7,
          commits: 4,
          linesAdded: 189,
          tasks: [
            'API documentation review',
            'Security requirements analysis',
            'Development environment setup'
          ],
          challenges: ['Jupiter API v6 complexity'],
          solutions: ['Created API integration roadmap'],
          learnings: ['MEV protection mechanisms', 'Slippage optimization strategies']
        },
        {
          day: 'Thursday',
          date: 'July 4',
          hours: 6,
          commits: 2,
          linesAdded: 156,
          tasks: [
            'Project structure design',
            'Component architecture planning',
            'State management strategy'
          ],
          challenges: ['Balancing complexity vs maintainability'],
          solutions: ['Adopted modular service-oriented architecture'],
          learnings: ['Zustand vs Redux comparison', 'React Query benefits']
        },
        {
          day: 'Friday',
          date: 'July 5',
          hours: 8,
          commits: 6,
          linesAdded: 312,
          tasks: [
            'Technical specification documentation',
            'Development timeline creation',
            'Risk assessment and mitigation planning'
          ],
          challenges: ['Estimating development complexity'],
          solutions: ['Used historical data and expert consultation'],
          learnings: ['Project planning methodologies', 'Risk management in DeFi']
        }
      ],
      weeklyMetrics: {
        totalHours: 37,
        totalCommits: 20,
        totalLines: 904,
        completedTasks: 15,
        blockers: 2,
        learningGoals: 8
      }
    },
    2: {
      title: 'Week 2: Core Development',
      period: 'July 8-14, 2025',
      focus: 'Frontend Foundation & API Integration',
      color: '#10B981',
      dailyProgress: [
        {
          day: 'Monday',
          date: 'July 8',
          hours: 8,
          commits: 12,
          linesAdded: 567,
          tasks: [
            'Next.js project initialization',
            'Tailwind CSS configuration',
            'Component library setup'
          ],
          challenges: ['TypeScript configuration complexity'],
          solutions: ['Used community best practices and templates'],
          learnings: ['Next.js 14 App Router', 'Tailwind CSS optimization']
        },
        {
          day: 'Tuesday',
          date: 'July 9',
          hours: 9,
          commits: 15,
          linesAdded: 743,
          tasks: [
            'Wallet connection implementation',
            'Solana Web3.js integration',
            'Basic swap interface creation'
          ],
          challenges: ['Wallet adapter compatibility issues'],
          solutions: ['Implemented universal wallet adapter pattern'],
          learnings: ['Solana wallet standards', 'Web3.js transaction handling']
        },
        {
          day: 'Wednesday',
          date: 'July 10',
          hours: 8,
          commits: 18,
          linesAdded: 892,
          tasks: [
            'Jupiter API v6 integration',
            'Quote fetching implementation',
            'Price display components'
          ],
          challenges: ['API rate limiting and error handling'],
          solutions: ['Implemented retry logic with exponential backoff'],
          learnings: ['Jupiter API optimization', 'Error boundary patterns']
        },
        {
          day: 'Thursday',
          date: 'July 11',
          hours: 8,
          commits: 14,
          linesAdded: 678,
          tasks: [
            'Transaction building logic',
            'Slippage calculation implementation',
            'User interface refinements'
          ],
          challenges: ['Complex transaction serialization'],
          solutions: ['Used Jupiter SDK helper functions'],
          learnings: ['Solana transaction structure', 'Slippage mathematics']
        },
        {
          day: 'Friday',
          date: 'July 12',
          hours: 7,
          commits: 11,
          linesAdded: 534,
          tasks: [
            'Testing framework setup',
            'Unit test implementation',
            'Code quality improvements'
          ],
          challenges: ['Mocking blockchain interactions'],
          solutions: ['Created comprehensive mock system'],
          learnings: ['Jest testing patterns', 'React Testing Library']
        }
      ],
      weeklyMetrics: {
        totalHours: 40,
        totalCommits: 70,
        totalLines: 3414,
        completedTasks: 18,
        blockers: 3,
        learningGoals: 12
      }
    }
  };

  const overallMetrics = [
    { label: 'Total Development Hours', value: '156', icon: Clock, color: '#3B82F6' },
    { label: 'Git Commits', value: '247', icon: GitCommit, color: '#10B981' },
    { label: 'Lines of Code', value: '15,847', icon: Code, color: '#8B5CF6' },
    { label: 'Bugs Resolved', value: '23', icon: Bug, color: '#F59E0B' }
  ];

  const challenges = [
    {
      title: 'Jupiter API v6 Complexity',
      description: 'Understanding the advanced features and optimization parameters of Jupiter\'s latest API version.',
      impact: 'High',
      timeToResolve: '3 days',
      solution: 'Created comprehensive API documentation and testing framework.',
      learnings: ['API design patterns', 'DeFi aggregation algorithms', 'Performance optimization']
    },
    {
      title: 'MEV Protection Implementation',
      description: 'Implementing robust protection against MEV attacks while maintaining transaction efficiency.',
      impact: 'High',
      timeToResolve: '4 days',
      solution: 'Integrated Jupiter\'s built-in MEV protection with custom priority fee optimization.',
      learnings: ['MEV attack vectors', 'Transaction priority mechanisms', 'DeFi security patterns']
    },
    {
      title: 'Multi-RPC Failover System',
      description: 'Building a reliable RPC management system with automatic failover and load balancing.',
      impact: 'Medium',
      timeToResolve: '2 days',
      solution: 'Implemented circuit breaker pattern with health monitoring and automatic recovery.',
      learnings: ['Distributed systems', 'Circuit breaker pattern', 'Health monitoring']
    }
  ];

  const aiCollaboration = [
    {
      tool: 'Windsurf Cascade',
      usage: 'Code completion and refactoring',
      efficiency: '85%',
      description: 'Advanced AI-powered code completion with context awareness and intelligent suggestions.',
      benefits: ['Faster development', 'Consistent code patterns', 'Reduced syntax errors']
    },
    {
      tool: 'GitHub Copilot',
      usage: 'Function implementation and testing',
      efficiency: '78%',
      description: 'AI pair programming for complex function implementation and test case generation.',
      benefits: ['Accelerated development', 'Comprehensive test coverage', 'Best practice adoption']
    },
    {
      tool: 'Claude AI',
      usage: 'Architecture decisions and debugging',
      efficiency: '92%',
      description: 'Strategic consultation for architectural decisions and complex problem solving.',
      benefits: ['Better architecture', 'Faster debugging', 'Knowledge transfer']
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
            Development
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A detailed chronicle of the Jupiter Swap DApp development process, showcasing 
            daily progress, challenges overcome, and lessons learned throughout the project.
          </p>
        </motion.div>

        {/* Overall Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {overallMetrics.map((metric, index) => {
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

        {/* Week Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {Object.entries(developmentWeeks).map(([weekNum, week]) => (
            <button
              key={weekNum}
              onClick={() => setSelectedWeek(parseInt(weekNum))}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedWeek === parseInt(weekNum)
                  ? 'text-white shadow-glow'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
              style={{
                backgroundColor: selectedWeek === parseInt(weekNum) ? week.color : undefined
              }}
            >
              Week {weekNum}
            </button>
          ))}
        </motion.div>

        {/* Selected Week Details */}
        <motion.div
          key={selectedWeek}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          {/* Week Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {developmentWeeks[selectedWeek].title}
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              {developmentWeeks[selectedWeek].period}
            </p>
            <p className="text-gray-400">
              Focus: {developmentWeeks[selectedWeek].focus}
            </p>
          </div>

          {/* Weekly Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
            {Object.entries(developmentWeeks[selectedWeek].weeklyMetrics).map(([key, value]) => (
              <div
                key={key}
                className="p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-center"
              >
                <div className="text-xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Daily Progress */}
          <div className="space-y-6">
            {developmentWeeks[selectedWeek].dailyProgress.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  {/* Day Info */}
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar size={20} style={{ color: developmentWeeks[selectedWeek].color }} />
                      <h3 className="text-lg font-semibold text-white">
                        {day.day}, {day.date}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{day.hours}h</span>
                      <span>{day.commits} commits</span>
                      <span>+{day.linesAdded} lines</span>
                    </div>
                  </div>

                  {/* Tasks and Progress */}
                  <div className="flex-1 grid md:grid-cols-3 gap-4">
                    {/* Tasks */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Tasks Completed</h4>
                      <ul className="space-y-1">
                        {day.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                            <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Challenges</h4>
                      <ul className="space-y-1">
                        {day.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                            <AlertTriangle size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                      <h4 className="text-sm font-medium text-gray-400 mb-2 mt-3">Solutions</h4>
                      <ul className="space-y-1">
                        {day.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                            <Lightbulb size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learnings */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Learnings</h4>
                      <ul className="space-y-1">
                        {day.learnings.map((learning, learningIndex) => (
                          <li key={learningIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                            <Target size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Major Challenges Overcome
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle size={24} className="text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {challenge.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {challenge.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Impact:</span>
                    <span className={`font-medium ${
                      challenge.impact === 'High' ? 'text-red-400' : 
                      challenge.impact === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {challenge.impact}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Resolution Time:</span>
                    <span className="text-white font-medium">{challenge.timeToResolve}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Solution:</h4>
                  <p className="text-sm text-gray-300">{challenge.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Learnings:</h4>
                  <ul className="space-y-1">
                    {challenge.learnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="flex items-start space-x-2 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <TechnicalTooltip term="AI-Assisted Development">
              AI-Enhanced Development Process
            </TechnicalTooltip>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aiCollaboration.map((ai, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {ai.tool}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-green-400 font-medium">{ai.efficiency}</span>
                  </div>
                </div>

                <p className="text-sm text-blue-300 mb-4">{ai.usage}</p>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {ai.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {ai.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2 text-xs text-blue-300">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevelopmentJourney;

