/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ChatbotWidget } from './components/ChatbotWidget';

const AboutAdamPage = lazy(() => import('./pages/AboutAdamPage').then(m => ({ default: m.AboutAdamPage })));
const PracticeAreaDetail = lazy(() => import('./pages/PracticeAreaDetail').then(m => ({ default: m.PracticeAreaDetail })));
const WhyChooseUsDetail = lazy(() => import('./pages/WhyChooseUsDetail').then(m => ({ default: m.WhyChooseUsDetail })));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage').then(m => ({ default: m.DisclaimerPage })));

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-charcoal-950" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-adam" element={<AboutAdamPage />} />
          <Route path="/practice-areas/:slug" element={<PracticeAreaDetail />} />
          <Route path="/why-choose-us" element={<WhyChooseUsDetail />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </Suspense>

      {/* Legal Concierge Chatbot Widget (Bottom Right) */}
      <ChatbotWidget />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
