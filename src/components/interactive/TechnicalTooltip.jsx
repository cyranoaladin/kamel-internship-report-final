import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const TechnicalTooltip = ({ term, children, definition, details = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Technical definitions database
  const technicalDefinitions = {
    'Jupiter API v6': {
      definition: 'Latest version of Jupiter\'s aggregation API providing optimal swap routing across 20+ DEXs on Solana.',
      details: [
        'Smart routing algorithms for best price discovery',
        'MEV protection mechanisms built-in',
        'Support for limit orders and DCA strategies',
        'Advanced slippage optimization',
        'Fee recovery system for cost reduction'
      ]
    },
    'MEV Protection': {
      definition: 'Maximal Extractable Value protection prevents front-running and sandwich attacks on DeFi transactions.',
      details: [
        'Transaction batching to reduce attack surface',
        'Priority fee optimization for faster inclusion',
        'Smart routing to avoid predictable patterns',
        'Slippage protection mechanisms',
        'Anti-sandwich attack algorithms'
      ]
    },
    'Dynamic Slippage': {
      definition: 'Intelligent slippage calculation that adjusts based on market conditions, trade size, and liquidity depth.',
      details: [
        'Real-time market volatility analysis',
        'Liquidity depth assessment',
        'Trade size impact calculation',
        'Historical slippage data integration',
        'Automatic adjustment algorithms'
      ]
    },
    'RPC Management': {
      definition: 'Robust Remote Procedure Call management system with automatic failover and load balancing.',
      details: [
        'Multiple RPC provider support (Helius, Alchemy, Eclipse)',
        'Circuit breaker pattern for fault tolerance',
        'Automatic failover on endpoint failures',
        'Load balancing across providers',
        'Performance monitoring and optimization'
      ]
    },
    'AI-Assisted Development': {
      definition: 'Modern development approach leveraging AI tools for enhanced productivity and code quality.',
      details: [
        'Windsurf Cascade for intelligent code completion',
        'GitHub Copilot for code suggestions',
        'Claude AI for complex problem solving',
        'Automated code review and optimization',
        '85% faster development cycles'
      ]
    },
    'Intelligent Code Review': {
      definition: 'AI-powered code analysis providing automated quality checks, security scanning, and optimization suggestions.',
      details: [
        'Automated security vulnerability detection',
        'Performance bottleneck identification',
        'Code pattern recognition and suggestions',
        'Best practices enforcement',
        'Technical debt analysis'
      ]
    },
    'Documentation Generation': {
      definition: 'Automated creation of comprehensive technical documentation using AI assistance.',
      details: [
        'API documentation auto-generation',
        'Code comment analysis and enhancement',
        'User guide creation from code structure',
        'Technical specification generation',
        'Multi-format output support'
      ]
    },
    'Circuit Breaker Pattern': {
      definition: 'Design pattern that prevents cascading failures by monitoring service health and automatically switching to fallback options.',
      details: [
        'Real-time health monitoring',
        'Automatic failure detection',
        'Graceful degradation strategies',
        'Recovery mechanism implementation',
        'Performance metrics tracking'
      ]
    },
    'Solana Web3.js': {
      definition: 'Official JavaScript SDK for interacting with the Solana blockchain network.',
      details: [
        'Transaction creation and signing',
        'Account management and queries',
        'Program interaction capabilities',
        'RPC connection management',
        'Wallet adapter integration'
      ]
    },
    'TypeScript': {
      definition: 'Strongly typed programming language that builds on JavaScript by adding static type definitions.',
      details: [
        'Compile-time error detection',
        'Enhanced IDE support and autocomplete',
        'Better code maintainability',
        'Improved refactoring capabilities',
        'Enterprise-grade development experience'
      ]
    }
  };

  const tooltipData = technicalDefinitions[term] || { 
    definition: definition || `Technical term: ${term}`, 
    details: details 
  };

  return (
    <div className="relative inline-block">
      <span
        className="relative cursor-help border-b border-dotted border-jupiter-400 text-jupiter-400 hover:text-jupiter-300 transition-colors duration-200"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children || term}
        <Info size={12} className="inline ml-1 opacity-70" />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-80 p-4 bg-slate-800/95 backdrop-blur-md border border-slate-600/50 rounded-lg shadow-xl bottom-full left-1/2 transform -translate-x-1/2 mb-2"
          >
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-600/50"></div>
            
            {/* Header */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-jupiter-500 rounded-full"></div>
              <h4 className="font-semibold text-white text-sm">{term}</h4>
            </div>

            {/* Definition */}
            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              {tooltipData.definition}
            </p>

            {/* Details */}
            {tooltipData.details && tooltipData.details.length > 0 && (
              <div className="space-y-1">
                <h5 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  Key Features:
                </h5>
                <ul className="space-y-1">
                  {tooltipData.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-xs text-gray-400">
                      <div className="w-1 h-1 bg-jupiter-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnicalTooltip;

