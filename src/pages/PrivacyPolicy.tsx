import Layout from "@/components/Layout";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <Layout>
    <div className="bg-gray-50 min-h-screen">
      {/* Header - Updated with pastel theme */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-pastel-blue/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-pastel-pink/20 text-gray-700 font-medium text-sm mb-4">
              Last Updated: April 15, 2025
            </span>
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6">
              Privacy <span>Policy</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your privacy matters to us. This document outlines how we collect, use, and protect your information in compliance with Indian law.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto">
            {["overview", "collection", "usage", "security"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab 
                    ? "text-purple-700 border-b-2 border-pastel-pink" 
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {tab.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </button>
            ))}
          </div>

          {/* Content Area - Updated with pastel theme */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div>
                <div className="bg-pastel-blue/10 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Points Summary</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>We collect only necessary personal information with your consent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Your data is protected with industry-standard security measures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>You have the right to access, correct, and delete your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>We comply with Indian Information Technology Act, 2000 and IT Rules 2021</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Your data is only shared with third parties as outlined in this policy</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 border-l-4 border-pastel-pink pl-4 italic mb-6">
                  At WebStudio, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <p className="text-gray-600 mb-4">
                  This policy is designed to comply with Indian laws including the Information Technology Act, 2000
                  and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-pastel-yellow/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Indian Grievance Officer</h4>
                    <p className="text-sm text-gray-600">
                      As required by IT Rules 2021, our designated Grievance Officer can be contacted at: 
                      grievance@webstudio.com
                    </p>
                  </div>

                  <div className="bg-pastel-green/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Data Storage in India</h4>
                    <p className="text-sm text-gray-600">
                      Primary data servers are maintained within Indian territory as per data localization requirements.
                    </p>
                  </div>

                  <div className="bg-pastel-pink/20 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Consent Requirement</h4>
                    <p className="text-sm text-gray-600">
                      We obtain explicit consent before collecting any sensitive personal information as required by law.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "collection" && (
              <div>
                <h2 className="font-newsreader text-3xl font-semibold mb-4">Information We Collect</h2>
                
                <div className="bg-pastel-blue/20 p-5 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Personal Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Name, email address, phone number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Login credentials and account preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Transaction and payment details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Communication records and feedback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Profile information and preferences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pastel-green/20 p-5 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Sensitive Personal Data (as defined by Indian law)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Passwords and financial information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Biometric information (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Health information (if applicable)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    Note: As per Indian IT Rules, we collect sensitive personal data only with your explicit consent and for necessary purposes.
                  </p>
                </div>

                <div className="bg-pastel-blue/10 p-5 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>IP address and device identifiers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Browser type and settings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Visit duration and pages viewed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Referring websites and clicks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>General location data (city/state level)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div>
                <h2 className="font-newsreader text-3xl font-semibold mb-4">How We Use Your Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-pastel-pink/20 p-5 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Service Provision</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Creating and managing your account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Processing transactions and payments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Providing customer support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Personalizing your experience</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pastel-yellow/20 p-5 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Communication</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Sending service updates and alerts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Responding to your inquiries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Marketing communications (with consent)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Surveys and feedback collection</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-pastel-blue/20 p-5 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Service Improvement</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Analyzing usage patterns and trends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Testing new features and improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Fixing bugs and technical issues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Enhancing security measures</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pastel-green/20 p-5 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Legal Compliance</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Preventing fraudulent activities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Complying with legal obligations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Enforcing our terms of service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Responding to legal requests</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-pastel-yellow rounded-lg bg-pastel-yellow/10">
                  <p className="text-sm text-gray-800">
                    <strong>Important:</strong> As per Indian law, we will not process your sensitive personal data 
                    for purposes beyond what is necessary for providing our services without obtaining additional consent.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="font-newsreader text-3xl font-semibold mb-4">Data Security & Sharing</h2>

                <div className="bg-pastel-blue/20 p-5 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Security Measures</h3>
                  <p className="text-gray-700 mb-3">
                    As required by Indian Information Technology Rules, we implement reasonable security practices:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>End-to-end encryption for sensitive data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>ISO 27001 certified security protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Regular security audits and assessments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Access controls and authentication systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Staff security training and awareness</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pastel-yellow/20 p-5 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-3">Data Sharing and Disclosure</h3>
                  <p className="text-gray-700 mb-3">
                    We may share your information with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span><strong>Service Providers:</strong> Who help us operate our business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span><strong>Business Partners:</strong> With your consent for specific services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span><strong>Legal Authorities:</strong> When required by law or government request</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span><strong>Corporate Affiliates:</strong> Our subsidiaries and affiliated companies</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    As per Indian IT Rules, we obtain your consent before transferring sensitive personal data to any third party.
                  </p>
                </div>

                <div className="bg-pastel-pink/20 p-5 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-3">Data Retention</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>We retain personal data only as long as necessary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Financial records kept for minimum 7 years (as per Indian tax laws)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Account information retained until you request deletion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Legal compliance records as required by applicable laws</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Contact Area - Updated with pastel theme */}
          <div className="bg-pastel-blue/5 p-6 border-t border-gray-100">
            <h3 className="font-newsreader text-xl font-medium text-gray-900 mb-4">Contact Our Privacy Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700">
                  <strong>WebStudio India Pvt. Ltd.</strong><br />
                  Green Park Society, Ahmedabad<br />
                  Gujarat, India
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  Email: grievance@webstudio.com<br />
                  Phone: +91-8866207909<br />
                  Response Time: Within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}