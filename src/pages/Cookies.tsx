import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <main className="min-h-screen py-28 px-6 container mx-auto text-foreground">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold neon-text">Cookies Policy</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-neon-glow underline">
            ← Back to Homepage
          </Link>
        </header>

        <div className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
          <article className="prose prose-invert prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 max-w-none">
            <h2>La Formula Capital Group Cookie Policy</h2>
            <p>
              At La Formula Capital Group, we use cookies and similar technologies to enhance your experience when visiting our website and using our services. This Cookie Policy explains how we utilize these technologies and how you can control them.
            </p>

            <h3>1. What are Cookies?</h3>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. These cookies contain information used to improve the functionality of the site and personalize your user experience.
            </p>

            <h3>2. Types of Cookies We Use:</h3>
            <p><strong>a. Essential Cookies:</strong> These cookies are necessary for the basic functioning of the website, allowing you to navigate and use its features.</p>
            <p><strong>b. Performance Cookies:</strong> These cookies collect information about how visitors use our website, such as which pages they visit most frequently. This information helps us enhance the functionality of the site.</p>
            <p><strong>c. Functionality Cookies:</strong> These cookies enable the website to remember your preferences and choices, providing you with a more personalized experience.</p>
            <p><strong>d. Advertising and Tracking Cookies:</strong> We use third-party cookies to display relevant advertising on our site and other websites. They also allow tracking your browsing activity to provide personalized ads.</p>

            <h3>3. Cookie Control:</h3>
            <p>
              You can control and manage cookies on your device through your browser settings. Please note that disabling certain cookies may affect the functionality of the site and your user experience.
            </p>

            <h3>4. Third-Party Cookies:</h3>
            <p>
              Some cookies used on our site are provided by third parties, such as analytics service providers and advertising partners. These cookies are subject to the privacy policies of these third parties.
            </p>

            <h3>5. Changes to the Cookie Policy:</h3>
            <p>
              We reserve the right to modify this Cookie Policy at any time. Significant changes will be communicated through our website or other appropriate channels.
            </p>

            <h3>6. More Information:</h3>
            <p>
              If you have questions or concerns about our Cookie Policy, please contact us at <a href="mailto:contact@laformulacg.net">contact@laformulacg.net</a>
            </p>

            <p>
              By continuing to use our website, you agree to the use of cookies as described in this Policy.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
