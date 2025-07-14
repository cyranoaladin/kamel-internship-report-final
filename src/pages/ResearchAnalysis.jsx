import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const ResearchAnalysis = () => {
  const [activeTab, setActiveTab] = useState('platforms');
  const [selectedPlatform, setSelectedPlatform] = useState('jupiter');

  const platforms = {
    jupiter: {
      name: 'Jupiter',
      network: 'Solana',
      type: 'DEX Aggregator',
      score: 94.2,
      tvl: '$2.1B+',
      volume: '$450M+',
      slippage: '0.1%',
      fees: '$0.001',
      color: '#3B82F6',
      strengths: [
        'Best-in-class aggregation across 20+ DEXs',
        'Advanced MEV protection mechanisms',
        'Superior price discovery algorithms',
        'Comprehensive API v6 with excellent documentation',
        'Lowest transaction costs on Solana',
        'Smart routing with multi-hop optimization'
      ],
      weaknesses: [
        'Limited to Solana ecosystem',
        'Newer platform compared to Ethereum alternatives',
        'Dependency on Solana network stability'
      ],
      features: [
        'Smart Routing', 'MEV Protection', 'Limit Orders', 'DCA Orders',
        'API v6', 'Multi-hop Routing', 'Dynamic Slippage', 'Fee Optimization'
      ]
    },
    raydium: {
      name: 'Raydium',
      network: 'Solana',
      type: 'AMM DEX',
      score: 87.3,
      tvl: '$1.8B+',
      volume: '$280M+',
      slippage: '0.3%',
      fees: '$0.001',
      color: '#10B981',
      strengths: [
        'Largest individual DEX on Solana',
        'Serum orderbook integration',
        'High liquidity pools',
        'Concentrated liquidity features'
      ],
      weaknesses: [
        'No aggregation capabilities',
        'Higher slippage for large trades',
        'Limited routing optimization'
      ],
      features: [
        'AMM Trading', 'Liquidity Pools', 'Yield Farming', 'Concentrated Liquidity'
      ]
    },
    orca: {
      name: 'Orca',
      network: 'Solana',
      type: 'AMM DEX',
      score: 84.7,
      tvl: '$1.2B+',
      volume: '$180M+',
      slippage: '0.25%',
      fees: '$0.001',
      color: '#8B5CF6',
      strengths: [
        'Excellent user experience',
        'Whirlpools concentrated liquidity',
        'Clean interface design',
        'Strong mobile support'
      ],
      weaknesses: [
        'Lower volume than competitors',
        'Limited advanced features',
        'Less comprehensive API'
      ],
      features: [
        'Whirlpools', 'AMM Trading', 'Mobile App', 'User-friendly UI'
      ]
    },
    oneinch: {
      name: '1inch',
      network: 'Multi-chain',
      type: 'DEX Aggregator',
      score: 82.1,
      tvl: '$500M+',
      volume: '$200M+',
      slippage: '0.4%',
      fees: '$15-50',
      color: '#F59E0B',
      strengths: [
        'Multi-chain support',
        'Pathfinder routing algorithm',
        'Established brand reputation',
        'Limit order functionality'
      ],
      weaknesses: [
        'High gas fees on Ethereum',
        'Slower transaction speeds',
        'No Solana support'
      ],
      features: [
        'Multi-chain', 'Pathfinder', 'Limit Orders', 'Chi Gas Token'
      ]
    },
    uniswap: {
      name: 'Uniswap',
      network: 'Ethereum',
      type: 'AMM DEX',
      score: 88.9,
      tvl: '$4.2B+',
      volume: '$1.2B+',
      slippage: '0.3%',
      fees: '$20-80',
      color: '#EF4444',
      strengths: [
        'Largest DEX by volume',
        'Strong brand recognition',
        'Concentrated liquidity v3',
        'Extensive ecosystem'
      ],
      weaknesses: [
        'High gas fees',
        'No aggregation features',
        'Limited to single DEX'
      ],
      features: [
        'AMM v3', 'Concentrated Liquidity', 'NFT Positions', 'Governance'
      ]
    }
  };

  const researchMethodology = [
    {
      phase: 'Market Research',
      duration: '3 days',
      description: 'Comprehensive analysis of DeFi landscape and platform identification',
      activities: [
        'Identified 15+ major DeFi platforms',
        'Analyzed market share and volume data',
        'Studied ecosystem positioning',
        'Evaluated growth trajectories'
      ]
    },
    {
      phase: 'Technical Analysis',
      duration: '4 days',
      description: 'Deep dive into technical architecture and capabilities',
      activities: [
        'API documentation review',
        'Performance benchmarking',
        'Security audit analysis',
        'Integration complexity assessment'
      ]
    },
    {
      phase: 'Comparative Evaluation',
      duration: '2 days',
      description: 'Structured comparison using weighted scoring methodology',
      activities: [
        'Defined evaluation criteria',
        'Weighted scoring implementation',
        'Cross-platform comparison',
        'Decision matrix creation'
      ]
    },
    {
      phase: 'Strategic Recommendation',
      duration: '1 day',
      description: 'Final recommendation with implementation roadmap',
      activities: [
        'Risk assessment',
        'Implementation strategy',
        'Future roadmap planning',
        'Stakeholder presentation'
      ]
    }
  ];

  const evaluationCriteria = [
    { name: 'Technical Architecture', weight: 20, description: 'Scalability, performance, innovation' },
    { name: 'Liquidity & Volume', weight: 18, description: 'TVL, daily volume, market depth' },
    { name: 'Price Efficiency', weight: 16, description: 'Slippage, fees, price discovery' },
    { name: 'Developer Experience', weight: 14, description: 'API quality, documentation, tools' },
    { name: 'Security & Reliability', weight: 12, description: 'Audit history, uptime, incident response' },
    { name: 'Ecosystem Integration', weight: 10, description: 'Partnerships, protocol support' },
    { name: 'User Experience', weight: 6, description: 'Interface design, ease of use' },
    { name: 'Innovation & Roadmap', weight: 4, description: 'Future features, research initiatives' }
  ];

  const technologyStack = {
    frontend: [
      { name: 'React 18', reason: 'Component-based architecture ideal for complex DeFi interfaces' },
      { name: 'Next.js 14', reason: 'SSR/SSG capabilities for optimal performance and SEO' },
      { name: 'TypeScript', reason: 'Type safety crucial for financial applications' },
      { name: 'Tailwind CSS', reason: 'Utility-first CSS for rapid UI development' },
      { name: 'Framer Motion', reason: 'Smooth animations for enhanced user experience' }
    ],
    blockchain: [
      { name: 'Solana Web3.js', reason: 'Official Solana JavaScript SDK for blockchain interactions' },
      { name: 'Wallet Adapter', reason: 'Standardized wallet integration across multiple providers' },
      { name: 'Jupiter API v6', reason: 'Advanced swap aggregation with optimal routing' },
      { name: 'SPL Token', reason: 'Solana token standard for asset management' }
    ],
    infrastructure: [
      { name: 'Helius RPC', reason: 'High-performance RPC provider with enhanced features' },
      { name: 'Alchemy RPC', reason: 'Reliable backup RPC with excellent uptime' },
      { name: 'Vercel', reason: 'Optimal deployment platform for Next.js applications' },
      { name: 'Sentry', reason: 'Error tracking and performance monitoring' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research &
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive analysis of DeFi platforms, technology stack evaluation, 
              and strategic decision-making process for the Jupiter Swap DApp project.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'platforms', label: 'Platform Analysis', icon: '🏛️' },
              { id: 'methodology', label: 'Research Methodology', icon: '🔬' },
              { id: 'technology', label: 'Technology Stack', icon: '⚙️' },
              { id: 'criteria', label: 'Evaluation Criteria', icon: '📊' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Analysis Tab */}
      {activeTab === 'platforms' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Platform List */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-6">Analyzed Platforms</h3>
                <div className="space-y-4">
                  {Object.entries(platforms).map(([key, platform]) => (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedPlatform(key)}
                      whileHover={{ scale: 1.02 }}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                        selectedPlatform === key
                          ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/50'
                          : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{platform.name}</h4>
                        <div 
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                        >
                          {platform.score}/100
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        {platform.network} • {platform.type}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Platform Details */}
              <div className="lg:col-span-2">
                <motion.div
                  key={selectedPlatform}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white">
                      {platforms[selectedPlatform].name}
                    </h3>
                    <div 
                      className="px-4 py-2 rounded-lg text-xl font-bold"
                      style={{ 
                        backgroundColor: `${platforms[selectedPlatform].color}20`, 
                        color: platforms[selectedPlatform].color 
                      }}
                    >
                      {platforms[selectedPlatform].score}/100
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-gray-400">TVL</div>
                      <div className="text-lg font-semibold text-white">
                        {platforms[selectedPlatform].tvl}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-gray-400">Daily Volume</div>
                      <div className="text-lg font-semibold text-white">
                        {platforms[selectedPlatform].volume}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-gray-400">Avg Slippage</div>
                      <div className="text-lg font-semibold text-white">
                        {platforms[selectedPlatform].slippage}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50">
                      <div className="text-sm text-gray-400">Transaction Cost</div>
                      <div className="text-lg font-semibold text-white">
                        {platforms[selectedPlatform].fees}
                      </div>
                    </div>
                  </div>

                  {/* Strengths and Weaknesses */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Strengths</h4>
                      <ul className="space-y-2">
                        {platforms[selectedPlatform].strengths.map((strength, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Limitations</h4>
                      <ul className="space-y-2">
                        {platforms[selectedPlatform].weaknesses.map((weakness, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {platforms[selectedPlatform].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm border"
                          style={{ 
                            backgroundColor: `${platforms[selectedPlatform].color}20`,
                            borderColor: `${platforms[selectedPlatform].color}50`,
                            color: platforms[selectedPlatform].color
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research Methodology Tab */}
      {activeTab === 'methodology' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Research Methodology
            </h3>
            <div className="space-y-8">
              {researchMethodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8"
                >
                  <div className="flex-shrink-0 w-full md:w-48">
                    <div className="p-4 rounded-lg bg-blue-600 text-white text-center">
                      <div className="font-semibold">{phase.phase}</div>
                      <div className="text-sm opacity-90">{phase.duration}</div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {phase.phase}
                    </h4>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Stack Tab */}
      {activeTab === 'technology' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Technology Stack Selection
            </h3>
            <div className="space-y-12">
              {Object.entries(technologyStack).map(([category, technologies]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-2xl font-semibold text-white capitalize">
                    {category} Technologies
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                      >
                        <h5 className="text-lg font-semibold text-white mb-2">
                          <TechnicalTooltip term={tech.name}>
                            {tech.name}
                          </TechnicalTooltip>
                        </h5>
                        <p className="text-gray-300 text-sm">{tech.reason}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Evaluation Criteria Tab */}
      {activeTab === 'criteria' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Evaluation Criteria & Scoring
            </h3>
            <div className="space-y-6">
              {evaluationCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      {criterion.name}
                    </h4>
                    <div className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg font-semibold">
                      {criterion.weight}%
                    </div>
                  </div>
                  <p className="text-gray-300">{criterion.description}</p>
                  <div className="mt-4">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${criterion.weight * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Final Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/30"
            >
              <h4 className="text-2xl font-bold text-white mb-4">
                🏆 Final Recommendation: Jupiter
              </h4>
              <p className="text-gray-300 mb-6">
                Based on comprehensive analysis across all evaluation criteria, Jupiter emerges 
                as the optimal choice with a score of 94.2/100. The platform's superior 
                aggregation technology, cost efficiency, and strategic alignment with the 
                Solana ecosystem make it the ideal foundation for our DeFi trading platform.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-green-800/30">
                  <div className="text-2xl font-bold text-green-400">94.2/100</div>
                  <div className="text-sm text-gray-300">Overall Score</div>
                </div>
                <div className="p-4 rounded-lg bg-green-800/30">
                  <div className="text-2xl font-bold text-green-400">20+</div>
                  <div className="text-sm text-gray-300">DEX Sources</div>
                </div>
                <div className="p-4 rounded-lg bg-green-800/30">
                  <div className="text-2xl font-bold text-green-400">0.1%</div>
                  <div className="text-sm text-gray-300">Avg Slippage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ResearchAnalysis;

