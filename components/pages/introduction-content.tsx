export function IntroductionContent() {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        </div>
  
        <div className="space-y-4" id="overview">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p>
            Unofficial PHP wrapper/library for Okeconnect Transaction API with built in validator, parser to assoc array, and greater security. Compatible with Composer.
          </p>
        </div>
  
        <div className="space-y-4 mt-12" id="features">
          <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Input Validation</li>
            <li>Response Parser</li>
            <li>Greater Security</li>
          </ul>
        </div>
      </div>
    )
  }
  