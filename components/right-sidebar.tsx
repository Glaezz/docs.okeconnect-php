export function RightSidebar() {
    return (
      <div className="py-6 pl-8 pr-6">
        <div className="space-y-6">
          <div>
            <h4 className="mb-1 text-sm font-medium">On This Page</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#installation" className="text-sm text-muted-foreground hover:text-foreground">
                Installation
              </a>
              <a href="#usage" className="text-sm text-muted-foreground hover:text-foreground">
                Usage
              </a>
              <a href="#link" className="text-sm text-muted-foreground hover:text-foreground">
                Link
              </a>
              <div className="pl-4 space-y-3">
                <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground">
                  Examples
                </a>
                <div className="pl-4 space-y-3">
                  <a href="#primary" className="text-sm text-muted-foreground hover:text-foreground">
                    Primary
                  </a>
                  <a href="#secondary" className="text-sm text-muted-foreground hover:text-foreground">
                    Secondary
                  </a>
                  <a href="#destructive" className="text-sm text-muted-foreground hover:text-foreground">
                    Destructive
                  </a>
                  <a href="#outline" className="text-sm text-muted-foreground hover:text-foreground">
                    Outline
                  </a>
                  <a href="#ghost" className="text-sm text-muted-foreground hover:text-foreground">
                    Ghost
                  </a>
                  <a href="#link" className="text-sm text-muted-foreground hover:text-foreground">
                    Link
                  </a>
                  <a href="#icon" className="text-sm text-muted-foreground hover:text-foreground">
                    Icon
                  </a>
                  <a href="#with-icon" className="text-sm text-muted-foreground hover:text-foreground">
                    With Icon
                  </a>
                  <a href="#loading" className="text-sm text-muted-foreground hover:text-foreground">
                    Loading
                  </a>
                  <a href="#as-child" className="text-sm text-muted-foreground hover:text-foreground">
                    As Child
                  </a>
                </div>
              </div>
              <a href="#changelog" className="text-sm text-muted-foreground hover:text-foreground">
                Changelog
              </a>
              <div className="pl-4">
                <a href="#2024-10-16" className="text-sm text-muted-foreground hover:text-foreground">
                  2024-10-16 Classes for icons
                </a>
              </div>
            </nav>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Deploy your shadcn/ui app on Vercel</h3>
            <p className="mt-2 text-sm text-muted-foreground">Trusted by OpenAI, Sonos, Chick-fil-A, and more.</p>
            <a
              href="https://vercel.com"
              className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Deploy Now
            </a>
          </div>
        </div>
      </div>
    )
  }
  