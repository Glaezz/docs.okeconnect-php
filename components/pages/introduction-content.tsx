export function IntroductionContent() {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        </div>
  
        <div className="space-y-4" id="overview">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p>
            Welcome to our library documentation. This library provides a set of reusable components for building modern
            web applications with React.
          </p>
          <p>Our components are built with accessibility, customization, and developer experience in mind.</p>
        </div>
  
        <div className="space-y-4 mt-12" id="features">
          <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fully accessible components following WAI-ARIA guidelines</li>
            <li>Fully customizable with Tailwind CSS</li>
            <li>Dark mode support</li>
            <li>TypeScript support</li>
            <li>React 18 support</li>
          </ul>
        </div>
  
        <div className="space-y-4 mt-12" id="getting-started">
          <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
          <p>To get started with our library, you need to install it first. You can use npm, yarn, or pnpm.</p>
          <div className="relative">
            <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                <span className="text-pink-500">npm</span> install @library/ui
              </code>
            </pre>
          </div>
          <p className="mt-4">
            After installation, you can import components from the library and use them in your application.
          </p>
          <div className="relative">
            <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`import { Button } from '@library/ui'
  
  function App() {
    return (
      <Button>Click me</Button>
    )
  }`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
  