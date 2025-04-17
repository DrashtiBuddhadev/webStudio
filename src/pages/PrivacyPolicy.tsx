
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 bg-pastel-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-newsreader text-4xl md:text-5xl font-semibold mb-6 fade-in">
              Privacy <span className="text-gradient">Policy</span>
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
              At PastelStudio, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="font-medium mt-6 mb-2">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information or assistance</li>
              <li>Participate in contests or surveys</li>
              <li>Provide feedback</li>
            </ul>
            <p>
              This information may include your name, email address, mailing address, phone number, 
              and other contact or identifying information.
            </p>

            <h3 className="font-medium mt-6 mb-2">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may use cookies, web beacons, and other tracking 
              technologies to collect certain information about your equipment, browsing actions, and patterns, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referral source</li>
              <li>Length of visit and pages viewed</li>
            </ul>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various purposes, including to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our website</li>
              <li>Process and complete transactions</li>
              <li>Send administrative information</li>
              <li>Send marketing and promotional communications</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul>
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information is appropriate to comply with the law or protect our rights, property, or safety.
              </li>
              <li>
                <strong>Business Partners:</strong> With your consent, we may share your information with our business partners to offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf.
              </li>
            </ul>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the Internet or wireless network can be guaranteed to be 100% secure.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Your Choices About Your Information</h2>
            <p>
              You may at any time review or change the information in your account or unsubscribe from our email list by:
            </p>
            <ul>
              <li>Contacting us using the contact information provided below</li>
              <li>Using the unsubscribe link in our emails</li>
            </ul>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>

            <h2 className="font-newsreader text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <strong>PastelStudio</strong><br />
                123 Pastel Avenue, Design District<br />
                New York, NY 10001<br />
                Email: privacy@pastelstudio.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
