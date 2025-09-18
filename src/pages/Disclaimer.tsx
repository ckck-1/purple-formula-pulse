import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <main className="min-h-screen py-28 px-6 container mx-auto text-foreground">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold neon-text">Disclaimer</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-neon-glow underline">
            ← Back to Homepage
          </Link>
        </header>

        <div className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
          <article className="prose prose-invert prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-3 max-w-none">
            <p>The information provided on this website is for informational purposes only and does not constitute professional advice or should be considered as such.</p>
            <p>Formula Capital Group assumes no responsibility for any action taken based on the information presented on this site.</p>
            <p>While we strive to keep the information up to date and accurate, we do not guarantee the accuracy, completeness, or suitability of the information and materials contained on this site.</p>
            <p>The use of this website and reliance on its content are at your own risk.</p>
            <p>Formula Capital Group is not liable for any direct or indirect damages, loss, or inconvenience arising from the use of this website or the information provided on it.</p>
            <p>All trademarks, logos, and company names mentioned on this website are the property of their respective owners.</p>
            <p>This disclaimer applies to all content on the Formula Capital Group website and any related communications.</p>
            <p>Please contact us if you have any questions or concerns regarding this disclaimer.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
