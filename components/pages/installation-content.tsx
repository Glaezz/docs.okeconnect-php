import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
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


const COMMANDS = {
  composer: `npx shadcn@latest add "https://animate-ui.com/r/code-tabs"`,
};

const reqParam = [
  { var: 'merchantId', type: 'string', default: '-' },
  { var: 'merchantPin', type: 'string', default: '-' },
  { var: 'accountPassword', type: 'string', default: '-' },
  { var: 'serverUrl', type: 'string', default: '"https://h2h.okeconnect.com"' },
]

export function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <span>Install and configure glaezz/okeconnect-php</span>
      </div>

      {/* <h2 className="font-heading mt-16 scroll-m-20 border-b pb-4 text-xl font-semibold tracking-tight first:mt-0" id="frameworks"><a className="font-medium underline underline-offset-4 subheading-anchor" aria-label="Link to section" href="#frameworks"><span className="icon icon-link"></span></a>Frameworks</h2> */}
      <div className="grid sm:grid-cols-2 gap-4 mt-8 sm:gap-6">
        
        <a
    className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
    href="/installation/laravel"
  ><svg
      role="img"
      viewBox="0 0 62 65"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    ><path
        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
      ></path></svg><p className="font-medium mt-2">Laravel</p></a>

  <a
    className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
    href="/installation/php"
  ><svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512" className="w-12 h-12"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e39be"> <path display="inline" d="M171.844,204.374c-11.137-12.748-28.856-19.123-53.146-19.123H37.96L0.5,377.99h41.984l9.96-51.241 h35.963c15.869,0,28.923-1.663,39.173-5.003c10.247-3.33,19.562-8.92,27.945-16.767c7.037-6.467,12.725-13.599,17.087-21.4 c4.354-7.797,7.448-16.401,9.278-25.812C186.333,234.919,182.98,217.124,171.844,204.374z M138.493,254.823 c-2.903,14.917-8.492,25.563-16.775,31.941c-8.288,6.38-20.897,9.569-37.822,9.569H58.354l15.678-80.667H102.8 c15.952,0,26.582,2.943,31.896,8.832C140.006,230.39,141.275,240.497,138.493,254.823z M337.828,237.059l-17.429,89.69h-42.317 l16.572-85.278c1.884-9.702,1.193-16.32-2.084-19.847c-3.272-3.529-10.242-5.296-20.9-5.296h-33.289l-21.458,110.421h-41.656 l37.46-192.739h41.656l-9.959,51.241h37.111c23.346,0,39.452,4.077,48.317,12.218C338.718,205.615,341.371,218.813,337.828,237.059 z M499.554,204.374c-11.137-12.748-28.856-19.123-53.142-19.123h-80.738l-37.46,192.739h41.984l9.96-51.241h35.963 c15.869,0,28.918-1.663,39.169-5.003c10.247-3.33,19.562-8.92,27.945-16.767c7.036-6.467,12.729-13.599,17.088-21.4 c4.354-7.797,7.447-16.401,9.277-25.812C514.042,234.919,510.694,217.124,499.554,204.374z M466.206,254.823 c-2.902,14.917-8.491,25.563-16.779,31.941c-8.284,6.38-20.896,9.569-37.822,9.569h-25.537l15.678-80.667h28.765 c15.952,0,26.581,2.943,31.899,8.832C467.72,230.39,468.984,240.497,466.206,254.823z"> </path> </g> </g></svg>
  <p className="font-medium mt-2">PHP Native</p></a>
      
      </div>

      <div >
        <div className="my-2">
          <h1 className="text-3xl font-bold tracking-tight">Setup</h1>
        </div>

        <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Integration Overview</h1>
          <div className="m-2">
            <img src="diagram sequence.jpg" alt="" />  
          </div>
        </div>

        <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Required Credential</h1>
          <div className="m-2">
            <span>there's important setup Credential</span>
          

          <Table className="my-4">
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[100px]">Variable</TableHead>
                <TableHead>type</TableHead>
                <TableHead>default</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reqParam.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.var}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.default}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>


          <span>You can find merchant id / user id and account password  on <a href="https://okeconnect.com/integrasi/trx_ip" className="font-bold">here</a>. You need to set your merchant pin on <a href="https://okeconnect.com/integrasi/pin" className="font-bold">here</a>, there are 2 option for server url "https://h2h.okeconnect.com" and "https://b2b.okeconnect.com".</span>
          </div>
        </div>

        <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">IP Whitelist</h1>
          <div className="m-2">
            <span>If you want to make transaction, you need to whitelist your IP server where your program running. you can whitelist up to 3 IP on <a href="https://okeconnect.com/integrasi/pin" className="font-bold">here</a>.</span>
            <span> Don't know what your IP?, you can test with <Link className="font-bold" href="/core/get-transaction">get balance</Link> to know your IP.</span>
          </div>
        </div>


        <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Callback</h1>
          <div className="m-2">
            <span>Every time you make a transaction, the okeconnect server will inform you whether the transaction was successful or failed. To receive the information you need to make endpoint, <a href="https://stackoverflow.com/questions/23347056/what-is-a-callback-url-in-relation-to-an-api" className="font-bold">how it's work</a>.</span>
            <span> You can make callback endpoint with <Link className="font-bold" href="/core/callback-handler">callback handler</Link>. That function has two-factor verification to prevent fake callbacks</span>
          </div>
        </div>

        {/* <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Callback</h1>
          <div className="m-2">
            <span>If you want to make transaction, you need to whitelist your IP server where your program running. you can whitelist up to 3 IP on <a href="https://okeconnect.com/integrasi/pin" className="font-bold">here</a>.</span>
            <span> Don't know what your IP?, you can test with <Link className="font-bold" href="/core/get-transaction">get balance</Link> to know your IP.</span>
          </div>
        </div> */}


      </div>
      
    </div>
  )
}
