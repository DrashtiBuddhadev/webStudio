
import Layout from "@/components/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-5xl font-semibold mb-6 fade-in">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-gray-600 slide-up" style={{ animationDelay: "0.2s" }}>
              Last updated: April 15, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead font-medium text-gray-800">
              Please read these Terms and Conditions carefully before using the PastelStudio website.
              Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, 
              then you may not access the service.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of 
              PastelStudio and its licensors. The service is protected by copyright, trademark, and other laws of both the 
              United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product 
              or service without the prior written consent of PastelStudio.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">User Content</h2>
            <p>
              Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, 
              videos, or other material. You are responsible for the content that you post to the service, including its legality, 
              reliability, and appropriateness.
            </p>
            <p>
              By posting content to the service, you grant us the right and license to use, modify, perform, display, reproduce, and 
              distribute such content on and through the service. You retain any and all of your rights to any content you submit, 
              post or display on or through the service and you are responsible for protecting those rights.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Links To Other Web Sites</h2>
            <p>
              Our service may contain links to third-party web sites or services that are not owned or controlled by PastelStudio.
            </p>
            <p>
              PastelStudio has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any 
              third party web sites or services. You further acknowledge and agree that PastelStudio shall not be responsible or liable, 
              directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance 
              on any such content, goods or services available on or through any such web sites or services.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, 
              without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Limitation Of Liability</h2>
            <p>
              In no event shall PastelStudio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
              any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the 
              service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and 
              (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort 
              (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
            <p>
              Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service 
              is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties 
              of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its 
              conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any 
              provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms 
              will remain in effect.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
              we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change 
              will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, please stop using the service.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <strong>PastelStudio</strong><br />
                123 Pastel Avenue, Design District<br />
                New York, NY 10001<br />
                Email: legal@pastelstudio.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
