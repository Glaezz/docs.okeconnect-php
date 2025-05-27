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
  { var: 'productCode', type: 'string', value: '<anything>' },
  { var: 'destination', type: 'string', value: '08123456789000' },
  { var: 'referenceId', type: 'string', value: '<anything unique>' },
  { var: 'amount', type: 'integer', value: '<anything if the product open denom>' },
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
        <h1 className="text-3xl font-bold tracking-tight">Testing</h1>
        <span>Transaction parameter for testing purpose.</span>
      </div>

      <div>
      <Table className="my-4" title="Request Parameters">
          <TableCaption>
            recommendation for testing parameter
          </TableCaption>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Variable</TableHead>
                <TableHead>type</TableHead>
                <TableHead>value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reqParam.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.var}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>

      <span>If you want to testing create transaction, and handling callback. These parameter enough</span>

    </div>
    
  )
}
