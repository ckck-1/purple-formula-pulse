import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="min-h-screen py-28 px-6 container mx-auto text-foreground">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold neon-text">Privacy Policy</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-neon-glow underline">
            ← Back to Homepage
          </Link>
        </header>

        <div className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
          <article className="prose prose-invert prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 max-w-none">
            <h2>Privacy Policy of La Formula Capital Group</h2>
            <p>
              At La Formula Capital Group, we value and respect your privacy. This Privacy Policy describes how we collect, use, and protect the personal information you provide to us through our online and offline services. By accessing our services, you agree to the terms and conditions of this Privacy Policy.
            </p>

            <h3>1. Information We Collect:</h3>
            <p>
              We collect personal information that you voluntarily provide, such as your name, email address, phone number, and other relevant information when you interact with us through our website, mobile applications, online forms, events, or in any other way. Additionally, we may automatically collect information through cookies and similar technologies when you visit our website. This information may include data about your device, IP address, browsing patterns, and preferences.
            </p>

            <h3>2. Use of Information:</h3>
            <p>
              We use the collected information to provide our services, enhance your experience, personalize content, send you relevant communications, and comply with legal obligations. We will not share your personal information with third parties without your consent, except when necessary for the provision of services, legal compliance, or protection of our rights.
            </p>

            <h3>3. Information Security:</h3>
            <p>
              We implement security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no internet data transmission or storage system can guarantee 100% security.
            </p>

            <h3>4. Access and Control of Your Information:</h3>
            <p>
              You have the right to access, correct, update, or delete your personal information. You can also opt-out of receiving direct marketing communications. You can exercise these rights by emailing us at <a href="mailto:contact@laformulacg.net">contact@laformulacg.net</a>
            </p>

            <h3>5. Changes to the Privacy Policy:</h3>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Any significant changes will be communicated through our website or other appropriate channels. We recommend checking this Policy periodically to stay informed about how we protect your information.
            </p>

            <p>
              By using our services, you agree to the terms of this Privacy Policy. If you have questions or concerns, please contact us at <a href="mailto:contact@laformulacg.net">contact@laformulacg.net</a>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
