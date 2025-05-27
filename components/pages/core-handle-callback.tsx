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
  { var: 'callbackData', type: 'string', default: '-', description: 'pass the message parameter from callback request here.' },
]

const COMMANDS1 = {
  "200 - success": `{
    "status_code": 200,
    "transaction_id": "41168891",
    "reference_id": "1234",
    "destination": "08529500692700",
    "product": {
        "code": "S5",
        "detail": "Telkomsel 5.000",
        "amount": 5000,
        "price": 1275
    },
    "transaction_status": "success",
    "serial_number": "R210630.2203.210045"
}`,
  "200 - failed": `{
    "status_code": 200,
    "transaction_id": "790060331",
    "reference_id": "4",
    "destination": "08529500692700",
    "product": {
        "code": "S2",
        "detail": "Telkomsel 5.000",
        "amount": 5000
    },
    "transaction_status": "failed",
    "message": "Nomor HP tidak benar"
}`,
  "401 - Unathorized": `{
    "status_code": 401,
    "message": "IP tidak sesuai @103.146.184.112"
}`,
  "400 - Bad Request": `{
    "status_code": 400,
    "message": "Transaction status not match"
}`,
  "422 ": `{
    "status_code": 422,
    "message": "Unprocessable response format",
    "raw": <raw response from okeconnect>
}`,
  "500 ": `{
    "status_code": 500,
    "message": "Callback not compatible with open denomination product",
    "data": {
        "status_code": 200,
        "transaction_id": "794794190",
        "reference_id": "6",
        "destination": "08529500692700",
        "product": {
            "code": "BBSDN",
            "detail": "H2H DANA Topup (Bebas Nominal)",
            "amount": 0
        },
        "transaction_status": "failed",
        "message": "Nomor Tujuan Salah"
    }
}`
};

const COMMANDS2 = {
    "php": `function callbackProcess($request){
  try {
    {/* LOAD OKECONNECT CONFIG HERE */}
    $response = \\Glaezz\\Okeconnect\\ClientApi::callbackHandler($request["message"]); //pass the message parameter from callback request here
    if ($response["status_code"] == 200) {
      // update your database here
    } else {
      // handle error response
      throw new Exception($response["message"]);
    }
    // your code here
  } catch (Exception $e) {
    // handle exception here
    echo $e->getMessage();
  }
}
`,
};

const COMMANDS3 = {
    "php": `function callbackProcess($messageParameter){
  try {
    {/* LOAD OKECONNECT CONFIG HERE */}
    $response = \\Glaezz\\Okeconnect\\ClientApi::callbackHandler($messageParameter); //pass the message parameter from callback request here
    if ($response["status_code"] == 200) {
      // if the product is not open denom will success and return callback data
      // update your database
    } else if ($response["status_code"] == 500){
      // for open denom product, compare callback with transaction id from your database and callback
      // make sure to NOT show your transaction_id from okeconnect to your user
      if($response["data"]["transaction_id"] == "transaction_id data from create transaction that you saved on database"){
        //update your database
      } else {
        // throw error
      }
    } else {
      // handle error response
      throw new Exception($response["message"]);
    }
    // your code here
  } catch (Exception $e) {
    // handle exception here
    echo $e->getMessage();
  }
}`, 
};



export function Page() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Callback Handler</h1>
        <span>Function to handle callback request from Okeconnect.</span>
        <p>Has built-in transaction status check verification, so you don't need to check the transaction status manually.</p> 
      </div>
      <div>
        <Alert variant="default" className="">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
          <span>Callback is a request from Okeconnect to your server after the transaction is completed.
          You can set your callback endpoint URL on <a href="https://okeconnect.com/integrasi/trx_ip" className="font-bold">here</a>.
          <p>NOT COMPATIBLE WITH OPEN DENOM PRODUCT, Alternatively use <a href="#alternative" className="font-bold">this</a></p></span>
          </AlertDescription>
        </Alert>
      </div>
        <img src="../callback.jpg" alt="" />
      
      <div>
      <CodeEditor
      className="w-full lg:w-[650px] max-h-[100px]"
      lang="php"
      title="calbackHandler()"
      // icon={<ReactIcon />}
      writing={false}
      cursor={false}
      copyButton
    >
      {`ClientApi::callbackHandler($callbackData);`}
      </CodeEditor>
      </div>

      <div>
      <Table className="my-4" title="Request Parameters">
          <TableCaption>
            The request parameters for the <code>callbackHandler()</code> function.
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

        {/* <div>
          <div className="mb-4">
              <h3 className="font-heading mt-8 text-lg font-semibold tracking-tight" id="create-project">
                Usage recommendation</h3>
              <span>Use this code structure:</span>
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
        </div> */}

        <div id="alternative">
          <div className="mb-4">
              <h3 className="font-heading mt-8 text-lg font-semibold tracking-tight" id="create-project">
                Usage recommendation</h3>
              <span>for open denom product, you can compare the transaction id between your database and callback from okeconnect <p>make sure you load the config before using function, <Link className="font-bold" href="/installation">check it on Installation</Link> based on your framework.</p></span>
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
            {COMMANDS3.php}
            </CodeEditor>
          </div>
        </div>
    </div>
    
  )
}
