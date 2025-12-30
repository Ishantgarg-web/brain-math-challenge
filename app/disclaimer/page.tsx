export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Disclaimer</h1>
          <p className="text-muted-foreground text-lg italic">Last updated: December 30, 2025</p>
        </header>

        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="p-8 border rounded-2xl bg-card/50 backdrop-blur-sm space-y-6">
            <p className="text-xl leading-relaxed text-balance">
              {"Brain Math Challenge is for educational and entertainment purposes only."}
            </p>
            <p className="text-xl leading-relaxed text-balance font-medium">
              {"Scores, ratings, or performance should not be considered as an official measure of intelligence or IQ."}
            </p>
          </div>

          <div className="mt-12 space-y-6 text-muted-foreground">
            <p>
              The information provided by Brain Math Challenge on our website is for general informational purposes
              only. All information on the Site is provided in good faith, however we make no representation or warranty
              of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
              completeness of any information on the Site.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a
              result of the use of the site or reliance on any information provided on the site. Your use of the site
              and your reliance on any information on the site is solely at your own risk.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
