export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: December 30, 2025</p>
        </header>

        <section className="space-y-12 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            Brain Math Challenge (“we”, “our”, “this website”) respects your privacy and is committed to protecting any
            information you share with us.
          </p>

          <div className="space-y-8">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p>When you submit feedback through our website, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name</li>
                <li>Email address</li>
                <li>Age group</li>
                <li>Country</li>
                <li>Profession</li>
                <li>Feedback, comments, or suggestions</li>
              </ul>
              <p className="text-sm italic text-muted-foreground">
                This information is collected only when you voluntarily submit it through our feedback form.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p>The information collected is used solely for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Understanding user feedback</li>
                <li>Improving the Brain Math Challenge experience</li>
                <li>Analyzing general usage trends</li>
              </ul>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Data Storage</h2>
              <p>
                Feedback submitted through the website is stored securely using Google Forms / Google Sheets. We do not
                maintain our own database or servers to store personal information.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal information with any third parties.</p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Cookies & Tracking</h2>
              <p>
                Brain Math Challenge does not use cookies to track personal user behavior. Basic analytics may be used
                in the future to understand site performance.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">6. External Links</h2>
              <p>
                Our website may contain links to external websites. We are not responsible for the privacy practices of
                those websites.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
              <p>
                This website is intended for educational and entertainment purposes. We do not knowingly collect
                personal information from children under the age of 13.
              </p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
              <p>This Privacy Policy may be updated occasionally. Any changes will be reflected on this page.</p>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, you can contact us through the feedback form on the
                website.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
