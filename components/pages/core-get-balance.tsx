import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import { File, Folder, Files } from '@/components/animate-ui/components/files';
import { CodeEditor } from '@/components/animate-ui/components/code-editor';
import Link from "next/link";

const createproject = {
    bash: `composer create-project laravel/laravel my-app`,
  };

const COMMANDS1 = {
  "200 - Result": `{
    "status_code": 200,
    "balance": 398325
}`,
  "401 - Unauthorized": `{
    "status_code": 401,
    "message": "IP tidak sesuai @103.146.184.112"
}`,
"422 ": `{
  "status_code": 422,
  "message": "Unprocessable response format",
  "raw": <raw response from okeconnect>
}`
};

const COMMANDS2 = {
    "php": `try {
    {/* LOAD OKECONNECT CONFIG HERE */}
    $response = \\Glaezz\\Okeconnect\\ClientApi::getBalance();
    if ($response["status_code"] == 200) {
      $balance = $response->balance;
      // do something with the balance
    } else {
      // handle error
      throw new Exception($response["message"]);
    }
    // your code here
} catch (Exception $e) {
    // handle exception here
    echo $e->getMessage();
}
`,
};

const COMMANDS3 = {
    "php": `require_once __DIR__ . '/vendor/autoload.php'; //adjust the path to vendor autoload.php

use Glaezz\\Okeconnect\\Config;
use Glaezz\\Okeconnect\\ClientApi;

$config = require __DIR__ . '/config/okeconnect.php'; //adjust the path to your config file

Config::load($config); //load the config

$response = ClientApi::createTransaction(); //example of using after load the config`, 
};



export function Page() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Get Balance</h1>
        <span>Function to get your okeconnect balance</span>
      </div>

      <div>
      <CodeEditor
      className="w-full lg:w-[650px] max-h-[100px]"
      lang="php"
      title="getBalance()"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {`ClientApi::getBalance();`}
      </CodeEditor>
      </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8  text-lg font-semibold tracking-tight" id="create-project">
                Example Return</h3>
            <span>Choose an example to see the response</span>
        </div>
        <CodeTabs lang="json" className="max-w-[650px]" codes={COMMANDS1} />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8 text-lg font-semibold tracking-tight" id="create-project">
              Usage recommendation</h3>
            <span>Use this code structure: <p>make sure you load the config before using function, <Link className="font-bold" href="/installation">check it on Installation</Link> based on your framework.</p></span>
        </div>
        <div>
      <CodeEditor
      className="w-full lg:w-[650px] max-h-[400px]"
      lang="php"
      title=""
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {COMMANDS2.php}
      </CodeEditor>
      </div>

        </div>
    </div>
    
  )
}
