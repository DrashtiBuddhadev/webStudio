import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GraphicElement from "@/components/GraphicElement";

const TermsAndConditions = () => {
  return (
    <Layout fullWidth>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-gradient-to-b from-white via-pastel-blue/5 to-white">
        {/* Animated background layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_at_top_left,rgba(211,228,253,0.1)_0%,transparent_50%)] animate-[pulse_15s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 right-0 left-0 h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,222,226,0.1)_0%,transparent_50%)] animate-[pulse_18s_ease-in-out_infinite_1s]"></div>
          
          {/* Floating blob animations */}
          <div className="absolute top-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] rounded-full bg-pastel-purple/[0.03] blur-3xl animate-[floating_20s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[20%] right-[15%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full bg-pastel-blue/[0.03] blur-3xl animate-[floating_25s_ease-in-out_infinite_2s]"></div>
        </div>

        {/* Decorative graphic elements */}
        <div className="absolute top-20 left-10 opacity-40 hidden md:block animate-[floating_6s_ease-in-out_infinite]">
          <GraphicElement type="dots" color="pink" size="lg" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-40 hidden md:block animate-[floating_8s_ease-in-out_infinite_0.5s]">
          <GraphicElement type="dots" color="blue" size="lg" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-6xl font-semibold mb-6 fade-in">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-4 slide-up" style={{ animationDelay: "0.2s" }}>
              Last updated: April 15, 2025
            </p>
            <p className="text-gray-600 text-lg mb-8 slide-up max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
              Please read these Terms and Conditions carefully before using the WebStudio website.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <p className="lead font-medium text-gray-800 mb-6 border-l-4 border-pastel-blue pl-4 py-2 bg-pastel-blue/5">
                Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
              </p>

              {[
                {
                  title: "Agreement to Terms",
                  content: "By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.",
                  color: "pastel-blue"
                },
                {
                  title: "Intellectual Property",
                  content: "The service and its original content, features, and functionality are and will remain the exclusive property of WebStudio and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WebStudio.",
                  color: "pastel-pink"
                },
                {
                  title: "User Content",
                  content: [
                    "Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.",
                    "By posting content to the service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such content on and through the service. You retain any and all of your rights to any content you submit, post or display on or through the service and you are responsible for protecting those rights."
                  ],
                  color: "pastel-green"
                },
                {
                  title: "Links To Other Web Sites",
                  content: [
                    "Our service may contain links to third-party web sites or services that are not owned or controlled by WebStudio.",
                    "WebStudio has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that WebStudio shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services."
                  ],
                  color: "pastel-yellow"
                },
                {
                  title: "Termination",
                  content: [
                    "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
                    "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."
                  ],
                  color: "pastel-purple"
                },
                {
                  title: "Limitation Of Liability",
                  content: "In no event shall WebStudio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.",
                  color: "pastel-blue"
                },
                {
                  title: "Disclaimer",
                  content: "Your use of the service is at your sole risk. The service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.",
                  color: "pastel-pink"
                },
                {
                  title: "Governing Law",
                  content: [
                    "These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.",
                    "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect."
                  ],
                  color: "pastel-green"
                },
                {
                  title: "Changes to Terms",
                  content: [
                    "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
                    "By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service."
                  ],
                  color: "pastel-yellow"
                }
              ].map((section, index) => (
                <div 
                  key={index} 
                  className="mb-10 slide-up" 
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className={`flex items-center mb-4 pb-2 border-b border-${section.color}/30`}>
                    <div className={`h-8 w-8 rounded-full bg-${section.color}/20 flex items-center justify-center mr-3`}>
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <h2 className="font-newsreader text-2xl font-semibold text-gray-800">{section.title}</h2>
                  </div>
                  <div className={`pl-11 pr-4 py-4 rounded-lg bg-${section.color}/5 border-l-4 border-${section.color}/30`}>
                    {Array.isArray(section.content) ? (
                      section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
                      ))
                    ) : (
                      <p className="text-gray-700">{section.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-pastel-purple/10 rounded-xl p-8 shadow-sm slide-up" style={{ animationDelay: "0.9s" }}>
              <h2 className="font-newsreader text-2xl font-semibold mb-4 text-center">Contact Us</h2>
              <p className="text-gray-700 text-center mb-6">
                If you have any questions about these Terms, please contact us.
              </p>
            </div>

            <div className="text-center mt-12 slide-up" style={{ animationDelay: "1s" }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;