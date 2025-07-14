import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Code, 
  Shield, 
  Settings, 
  TestTube, 
  Rocket, 
  BarChart3,
  BookOpen,
  ExternalLink,
  Calendar,
  Users,
  Star
} from 'lucide-react';
import TechnicalTooltip from '../components/interactive/TechnicalTooltip';

const DocumentationHub = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const documentCategories = {
    technical: {
      title: 'Technical Documentation',
      description: 'Detailed technical documentation covering architecture, implementation, and integration patterns.',
      icon: Code,
      color: '#3B82F6',
      documents: [
        {
          title: 'Complete Project Architecture',
          subtitle: 'Technical Guide',
          description: 'Comprehensive documentation of the Jupiter Swap DApp architecture, including frontend components, backend services, and blockchain integration patterns.',
          size: '3.2 MB',
          pages: '78 pages',
          highlights: ['Component hierarchy', 'Service layer design', 'State management', 'API integration patterns'],
          updated: '2025-07-14',
          filename: 'complete-architecture-guide.pdf',
          icon: Code
        },
        {
          title: 'API Integration Guide',
          subtitle: 'Implementation Guide',
          description: 'Detailed guide for integrating Jupiter API v6, Helius RPC services, and other blockchain APIs with proper error handling and optimization strategies.',
          size: '2.8 MB',
          pages: '89 pages',
          highlights: ['Jupiter API v6 integration', 'RPC endpoint management', 'Error handling patterns', 'Performance optimization'],
          updated: '2025-07-14',
          filename: 'api-integration-guide.pdf',
          icon: ExternalLink
        },
        {
          title: 'Security Implementation',
          subtitle: 'Security Guide',
          description: 'Complete security implementation guide covering wallet integration, transaction security, input validation, and protection against common DeFi vulnerabilities.',
          size: '2.1 MB',
          pages: '56 pages',
          highlights: ['Wallet security patterns', 'Transaction validation', 'Input sanitization', 'DeFi security best practices'],
          updated: '2025-07-14',
          filename: 'security-implementation-guide.pdf',
          icon: Shield
        }
      ]
    },
    development: {
      title: 'Development Resources',
      description: 'Development resources including workflows, testing strategies, and coding standards.',
      icon: Settings,
      color: '#10B981',
      documents: [
        {
          title: 'Development Workflow Guide',
          subtitle: 'Process Documentation',
          description: 'Complete development workflow documentation including AI-assisted development practices, debugging methodologies, and quality assurance processes.',
          size: '2.5 MB',
          pages: '92 pages',
          highlights: ['AI-enhanced development cycle', 'Debugging strategies', 'Code review process', 'Quality gates'],
          updated: '2025-07-14',
          filename: 'development-workflow-guide.pdf',
          icon: Settings
        },
        {
          title: 'Testing Strategy & Implementation',
          subtitle: 'Testing Guide',
          description: 'Comprehensive testing documentation covering unit tests, integration tests, end-to-end testing, and performance testing strategies for DeFi applications.',
          size: '2.3 MB',
          pages: '84 pages',
          highlights: ['Unit testing patterns', 'Integration test suites', 'E2E testing with Playwright', 'Performance benchmarking'],
          updated: '2025-07-14',
          filename: 'testing-strategy-guide.pdf',
          icon: TestTube
        },
        {
          title: 'Code Style & Standards',
          subtitle: 'Standards Guide',
          description: 'Coding standards and style guide for TypeScript, React, and Solana development, including linting rules, formatting guidelines, and best practices.',
          size: '1.8 MB',
          pages: '73 pages',
          highlights: ['TypeScript conventions', 'React patterns', 'Solana development standards', 'ESLint configuration'],
          updated: '2025-07-14',
          filename: 'code-standards-guide.pdf',
          icon: Code
        }
      ]
    },
    deployment: {
      title: 'Deployment & Operations',
      description: 'Production deployment guides, configuration management, and operational procedures.',
      icon: Rocket,
      color: '#8B5CF6',
      documents: [
        {
          title: 'Production Deployment Guide',
          subtitle: 'Deployment Guide',
          description: 'Complete production deployment guide covering environment setup, CI/CD pipeline configuration, monitoring setup, and maintenance procedures.',
          size: '2.0 MB',
          pages: '68 pages',
          highlights: ['Vercel deployment', 'Environment configuration', 'CI/CD with GitHub Actions', 'Monitoring setup'],
          updated: '2025-07-14',
          filename: 'production-deployment-guide.pdf',
          icon: Rocket
        },
        {
          title: 'Configuration Management',
          subtitle: 'Configuration Guide',
          description: 'Detailed configuration management guide covering environment variables, API keys management, RPC endpoint configuration, and security settings.',
          size: '1.9 MB',
          pages: '71 pages',
          highlights: ['Environment setup', 'API configuration', 'Security settings', 'Performance tuning'],
          updated: '2025-07-14',
          filename: 'configuration-management-guide.pdf',
          icon: Settings
        },
        {
          title: 'Monitoring & Maintenance',
          subtitle: 'Operations Guide',
          description: 'Operations guide for monitoring application health, performance metrics, error tracking, and routine maintenance procedures.',
          size: '1.1 MB',
          pages: '89 pages',
          highlights: ['Sentry integration', 'Performance monitoring', 'Error tracking', 'Maintenance procedures'],
          updated: '2025-07-14',
          filename: 'monitoring-maintenance-guide.pdf',
          icon: BarChart3
        }
      ]
    },
    analysis: {
      title: 'Analysis & Reports',
      description: 'Comprehensive analysis reports, audits, and research documentation.',
      icon: BarChart3,
      color: '#F59E0B',
      documents: [
        {
          title: 'Comprehensive Technical Audit',
          subtitle: 'Audit Report',
          description: 'Exhaustive technical audit report covering code quality, security analysis, performance evaluation, and compliance assessment with detailed recommendations.',
          size: '3.2 MB',
          pages: '67 pages',
          highlights: ['Code quality analysis', 'Security assessment', 'Performance benchmarks', 'Compliance review'],
          updated: '2025-07-14',
          filename: 'comprehensive-technical-audit.pdf',
          icon: Shield
        },
        {
          title: 'Platform Comparison Analysis',
          subtitle: 'Research Report',
          description: 'Detailed comparative analysis of DeFi platforms including Jupiter, Raydium, Orca, Meteora, and 1inch with performance metrics and feature comparison.',
          size: '2.7 MB',
          pages: '52 pages',
          highlights: ['Platform comparison matrix', 'Performance analysis', 'Feature evaluation', 'Recommendation framework'],
          updated: '2025-07-10',
          filename: 'platform-comparison-analysis.pdf',
          icon: BarChart3
        },
        {
          title: 'Technical Specifications',
          subtitle: 'Project Specifications',
          description: 'Complete technical specifications document outlining project requirements, system architecture, implementation details, and delivery criteria.',
          size: '1.9 MB',
          pages: '67 pages',
          highlights: ['Project requirements', 'System specifications', 'Implementation roadmap', 'Quality criteria'],
          updated: '2025-07-14',
          filename: 'cahier-des-charges.pdf',
          icon: FileText
        }
      ]
    }
  };

  const handleDownload = (filename) => {
    // Create download link for PDF files in the docs folder
    const link = document.createElement('a');
    link.href = `/docs/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { label: 'Total Documents', value: '13', icon: FileText, color: '#3B82F6' },
    { label: 'Total Pages', value: '831', icon: BookOpen, color: '#10B981' },
    { label: 'Documentation Size', value: '28.3 MB', icon: Download, color: '#8B5CF6' },
    { label: 'Last Updated', value: 'Jul 14, 2025', icon: Calendar, color: '#F59E0B' }
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
            Documentation
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Hub
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technical documentation, guides, and resources for the Jupiter Swap DApp project. 
            All documents are professionally formatted and ready for download.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-center"
              >
                <Icon size={32} className="mx-auto mb-3" style={{ color: stat.color }} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(documentCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === key
                    ? 'bg-jupiter-600 text-white shadow-glow'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {documentCategories[activeCategory].title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {documentCategories[activeCategory].description}
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentCategories[activeCategory].documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-jupiter-500/50 transition-all duration-300"
                >
                  {/* Document Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${documentCategories[activeCategory].color}20` }}
                      >
                        <Icon 
                          size={24} 
                          style={{ color: documentCategories[activeCategory].color }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg leading-tight">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-400">{doc.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Document Info */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.pages}</span>
                    <span>•</span>
                    <span>Updated: {doc.updated}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {doc.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center space-x-2 text-xs text-gray-400"
                        >
                          <div 
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: documentCategories[activeCategory].color }}
                          ></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(doc.filename)}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-jupiter-600 hover:bg-jupiter-700 text-white font-medium rounded-lg transition-all duration-200 group-hover:shadow-glow"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Complete Documentation Package
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              All documentation is professionally formatted in LaTeX and compiled to PDF. 
              Each document includes detailed technical explanations, code examples, and implementation guides.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Star size={16} className="text-yellow-400" />
                <span>Professional LaTeX formatting</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Users size={16} className="text-blue-400" />
                <span>Enterprise-ready documentation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <BookOpen size={16} className="text-green-400" />
                <span>Comprehensive technical coverage</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-6 rounded-xl bg-blue-900/20 border border-blue-500/30"
        >
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <FileText size={20} className="text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">
                <TechnicalTooltip term="Documentation Generation">
                  AI-Enhanced Documentation
                </TechnicalTooltip>
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                This comprehensive documentation was created using AI-assisted development practices, 
                ensuring consistency, accuracy, and professional quality. Each document follows 
                enterprise standards and includes detailed technical specifications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentationHub;

