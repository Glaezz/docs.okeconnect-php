import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import { File, Folder, Files } from '@/components/animate-ui/components/files';
import { CodeEditor } from "../animate-ui/components/code-editor";

const createproject = {
    bash: `composer create-project laravel/laravel my-app`,
  };

const COMMANDS1 = {
  bash: `composer require glaezz/okeconnect-php`,
};

const COMMANDS2 = {
    "okeconnect.php": `<?php
return [
    /*
    |--------------------------------------------------------------------------
    | Okeconnect Merchant ID
    |--------------------------------------------------------------------------
    |
    | ID merchant yang diberikan oleh sistem Okeconnect.
    |
    */
    'merchantId' => 'your_merchant_id_here',

    /*
    |--------------------------------------------------------------------------
    | Okeconnect Merchant PIN
    |--------------------------------------------------------------------------
    |
    | PIN merchant yang dibuat di laman Okeconnect.
    |
    */
    'merchantPin' => 'your_merchant_pin_here',

    /*
    |--------------------------------------------------------------------------
    | Okeconnect Account Password
    |--------------------------------------------------------------------------
    |
    | password akun Orderkuota.
    |
    */
    'accountPassword' => 'your_account_password_here',

    /*
    |--------------------------------------------------------------------------
    | Okeconnect server url
    |--------------------------------------------------------------------------
    |
    | server url untuk transaksi Okeconnect. 
    | default: https://h2h.okeconnect.com/
    | alternative: https://b2b.okeconnect.com/
    |
    */
    'serverUrl' => 'your_server_url_here',
];
`,
};

const COMMANDS3 = {
    "php": `require_once __DIR__ . '/vendor/autoload.php'; //adjust the path to vendor autoload.php

use Glaezz\\Okeconnect\\Config;
use Glaezz\\Okeconnect\\ClientApi;

function createTransaction() {
  Config::load([
        'merchantId' => 'YOUR_MERCHANT_ID',
        'merchantPin'  => 'YOUR_MERCHANT_PIN',
        'accountPassword' => 'YOUR_ACCOUNT_PASSWORD',
        'serverUrl' => //default "https://h2h.okeconnect.com", alternative "https://b2b.okeconnect.com"
    ]); //load the config

  $response = ClientApi::createTransaction(); //example of using after load the config
}`, 
};



export function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">PHP Native</h1>
        <span>Install and configure glaezz/okeconnect-php for PHP Native</span>
      </div>

      <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Create Project</h3>
            <span>First, create your project.</span>
        </div>
        {/* <CodeTabs defaultValue="bash" className="max-w-[650px]" codes={createproject} /> */}
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
                Start using it </h3>
            <span>Load your config, place this loader code where the function is first accessed by user (ex. create transaction)</span>
        </div>
        <CodeEditor
      className="max-w-[650px] max-h-[400px]"
      lang="php"
      title="create-transaction.php"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {COMMANDS3.php}
      </CodeEditor>
        {/* <CodeTabs defaultValue="php" className="max-w-[650px]" codes={COMMANDS3} lang="php" /> */}
        </div>
    </div>
    
  )
}
