import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ResearchAnalysis from './pages/ResearchAnalysis';
import TechnicalArchitecture from './pages/TechnicalArchitecture';
import DevelopmentJourney from './pages/DevelopmentJourney';
import AuditResults from './pages/AuditResults';
import ConfigurationSetup from './pages/ConfigurationSetup';
import WorkflowAutomation from './pages/WorkflowAutomation';
import DocumentationHub from './pages/DocumentationHub';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchAnalysis />} />
          <Route path="/architecture" element={<TechnicalArchitecture />} />
          <Route path="/development" element={<DevelopmentJourney />} />
          <Route path="/audit" element={<AuditResults />} />
          <Route path="/configuration" element={<ConfigurationSetup />} />
          <Route path="/workflow" element={<WorkflowAutomation />} />
          <Route path="/documentation" element={<DocumentationHub />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

