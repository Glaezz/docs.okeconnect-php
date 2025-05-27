import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clipboard } from "lucide-react"
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import { File, Folder, Files } from '@/components/animate-ui/components/files';
import { CodeEditor } from '@/components/animate-ui/components/code-editor';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { describe } from "node:test";

const reqParam = [
  { var: 'productCode', type: 'string', default: '-', description: 'code for the product to be purchased on Okeconnect. (example: "T5", "S20", "SM20")' },
  { var: 'destination', type: 'string', default: '-', description: 'destination number for the product to be purchased on Okeconnect. (example: 088123456789)' },
  { var: 'referenceId', type: 'string', default: '-', description: 'unique reference ID for the transaction from your system. (example: 135 or "trx-1")' },
  { var: 'amount', type: 'integer', default: '0', description: 'amount for the product to be purchased with open denomination. (minimum 10000)' },
]

const COMMANDS1 = {
  "201 - Result": `{
    "status_code": 201,
    "transaction_id": "788978132",
    "reference_id": "3",
    "destination": "08529500692700",
    "transaction_status": "process",
    "product": {
        "code": "S2",
        "detail": "Telkomsel 2.000",
        "amount": 2000,
        "price": 3320
    }
}`,
  "201 - Result (open denom)": `{
    "status_code": 201,
    "transaction_id": "788973432",
    "reference_id": "2",
    "destination": "08529500692700000",
    "transaction_status": "process",
    "product": {
        "code": "BBSDN",
        "detail": "H2H DANA Topup (Bebas Nominal)",
        "amount": 10000,
        "price": 10090
    }
}`,
  "401 - Unauthorized": `{
    "status_code": 401,
    "message": "IP tidak sesuai @103.146.184.112"
}`,
  "400 - Bad request": `{
    "status_code": 400,
    "message": "One or more parameters is invalid.",
    "validation_message": {
        "destination": "destination is required"
    }
}
    
//other error response
{
    "status_code": 400,
    "reference_id": "4",
    "message": "Nomor HP tidak benar."
}`,
"422 ": `{
  "status_code": 422,
  "message": "Unprocessable response format",
  "raw": <raw response from okeconnect>
}`
};

const COMMANDS2 = {
    "php": `//*optional PHP transaction (Begin Transaction) to prevent race conditions
try {
    //check your Okeconnect balance before transaction (must be greater than price)  
    //check user balance before transaction

    {/* LOAD OKECONNECT CONFIG HERE */}
    $response = \\Glaezz\\Okeconnect\\ClientApi::createTransactione($productCode, $destination, $referenceId, $amount);
    if ($response["status_code"] == 201) {
      //save transaction to your database
      //decrement user balance
    } else {
      // handle error response
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
        <h1 className="text-3xl font-bold tracking-tight">Create Transaction</h1>
        <span>Function to create okeconnect transaction (open denom support) </span>
      </div>

      <div>
      <CodeEditor
      className="w-full lg:w-[650px] max-h-[100px]"
      lang="php"
      title="createTransaction()"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {`ClientApi::createTransaction($productCode, $destination, $referenceId, $amount);`}
      </CodeEditor>
      </div>

      <div>
      <Table className="my-4" title="Request Parameters">
          <TableCaption>
            The request parameters for the <code>createTransaction()</code> function.
          </TableCaption>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Variable</TableHead>
                <TableHead>type</TableHead>
                <TableHead>default</TableHead>
                <TableHead>description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reqParam.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.var}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.default}</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
