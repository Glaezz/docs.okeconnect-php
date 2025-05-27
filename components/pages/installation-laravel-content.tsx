import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import { CodeEditor } from "../animate-ui/components/code-editor";

const createproject = {
    bash: `composer create-project laravel/laravel my-app`,
  };

const COMMANDS1 = {
  bash: `composer require glaezz/okeconnect-php`,
};

const COMMANDS2 = {
    bash: `php artisan vendor:publish --tag=okeconnect-config`,
};

const COMMANDS3 = {
    ".env": `OKECONNECT_MERCHANT_ID= <your_merchant_id>
OKECONNECT_MERCHANT_PIN= <your_merchant_pin>
OKECONNECT_ACCOUNT_PASSWORD= <your_account_password>
OKECONNECT_SERVER_URL= <default "https://h2h.okeconnect.com", alternative "https://b2b.okeconnect.com">`,
};

const COMMANDS4 = {
  "php": `
use Glaezz\\Okeconnect\\Config;
use Glaezz\\Okeconnect\\ClientApi;

function createTransaction() {
  Config::load(config('okeconnect')); //load the config

  $response = ClientApi::createTransaction(); //example of using after load the config
}`, 
};



export function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Laravel</h1>
        <span>Install and configure glaezz/okeconnect-php for Laravel framework</span>
      </div>

      <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Create Project</h3>
            <span>Start by creating a new Laravel project using composer</span>
        </div>
        <CodeTabs defaultValue="bash" className="max-w-[650px]" codes={createproject} />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Install Library</h3>
            <span>Install library using composer</span>
        </div>
        <CodeTabs defaultValue="bash" className="max-w-[650px]" codes={COMMANDS1} />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Publish okeconnect config</h3>
            <span>This will add okeconnect.php to your laravel config folder</span>
        </div>
        <CodeTabs defaultValue="bash" className="max-w-[650px]" codes={COMMANDS2} />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Edit .env file </h3>
            <span>Add this configuration to your .env file</span>
        </div>
        <CodeTabs defaultValue=".env" className="max-w-[650px]" codes={COMMANDS3} lang="json" />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Start using it </h3>
            <span>Load your config, place this loader code where the function is first accessed by user (ex. create transaction)</span>
        </div>
        <CodeEditor
      className="max-w-[650px] max-h-[300px]"
      lang="php"
      title="create-transaction.php"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {COMMANDS4.php}
      </CodeEditor>
        {/* <CodeTabs defaultValue="php" className="max-w-[650px]" codes={COMMANDS3} lang="php" /> */}
        </div>
    </div>
    
  )
}
