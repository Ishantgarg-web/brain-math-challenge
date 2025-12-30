import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-card/30 backdrop-blur-md py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-bold text-xl tracking-tight">Brain Math Challenge</p>
          <p className="text-sm text-muted-foreground">© 2025 All rights reserved.</p>
        </div>

        <nav className="flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/disclaimer" className="hover:text-foreground transition-colors">
            Disclaimer
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
