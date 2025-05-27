import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AlertCircle, Clipboard } from "lucide-react"
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import Link from "next/link";
import { describe } from "node:test";

const reqParam = [
  { var: 'productCode', type: 'string', default: '-', description: 'code for the product to be purchased on Okeconnect. (example: "T5", "S20", "SM20")' },
  { var: 'destination', type: 'string', default: '-', description: 'destination number for the product to be purchased on Okeconnect. (example: 088123456789)' },
  { var: 'referenceId', type: 'string', default: '-', description: 'unique reference ID for the transaction from your system. (example: 135 or "trx-1")' },
  { var: 'amount', type: 'integer', default: '0', description: 'amount for the product to be purchased with open denomination. (minimum 10000)' },
]

const COMMANDS1 = {
  "200 - Result": `{
    "status_code": 200,
    "reference_id": "999",
    "destination": "0898020406000",
    "product": {
        "code": "T5",
        "detail": "Three 5.000",
        "amount": 5000,
        "price": 6487
    },
    "transaction_status": "success",
    "serial_number": "R25042218462100b7."
}`,
  "200 - Failed": `{
    "status_code": 200,
    "reference_id": "4",
    "destination": "08529500692700",
    "product": {
        "code": "S2",
        "detail": "Telkomsel 2.000",
        "amount": 2000,
        "price": 3320
    },
    "transaction_status": "failed",
    "message": "mohon diperiksa kembali No tujuan sebelum di ulang"
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
}`,
  "404 - Not Found": `{
    "status_code": 404,
    "message": "Tidak ada data transaksi"
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
    $response = \\Glaezz\\Okeconnect\\ClientApi::getTransactionStatus($productCode, $destination, $referenceId, $amount);
    if ($response["status_code"] == 200) {
      // handle success response
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
        <h1 className="text-3xl font-bold tracking-tight">Get Transaction Status</h1>
        <span>Function to track your transaction.</span>
      </div>
      <div>
        <Alert variant="default" className="my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Transaction can be tracked only for a day after the transaction is created. After that, the transaction will can't be tracked.
            <p>(Conditional use, dont use for your history transaction. save every transaction to your database!)</p>
          </AlertDescription>
        </Alert>
      </div>

      <div>
      <CodeEditor
      className="w-full lg:w-[650px] max-h-[100px]"
      lang="php"
      title="getTransactionStatus()"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {`ClientApi::getTransactionStatus($productCode, $destination, $referenceId, $amount);`}
      </CodeEditor>
      </div>

      <div>
      <Table className="my-4" title="Request Parameters">
          <TableCaption>
            The request parameters for the <code>getTransactionStatus()</code> function.
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
        <CodeTabs lang="json" className="max-w-[650px]" codes={COMMANDS1} defaultValue={"200 - Result"} />
        </div>

        <div>
        <div className="mb-4">
            <h3 className="font-heading mt-8 text-lg font-semibold tracking-tight" id="create-project">
              Usage recommendation</h3>
            <span>Use this code structure: <p>make sure you load the config before using function, <Link className="font-bold" href="/installation">check it on Installation</Link> based on your framework.</p></span>
        </div>
        <div>
      <CodeEditor
      className="max-w-[650px] lg:w-[650px] max-h-[400px]"
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
