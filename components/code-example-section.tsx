import TerminalEditor from "./terminal-editor"

const initialCode = `const oAuthUser = async () =>
oauth({
  title: 'Connect with GitHub',
  description: 'Connect your GitHub account to verify your identity',
  clientId: 'Ov23lixm9nuYEQObaldJ',
  clientSecret: 'e9fc6afe0ec970237d66c213e33b56b3afd583c8',
  scopes: ['read:accounts'],
  authUrl: 'https://github.com/login/oauth/authorize',
  tokenUrl: 'https://github.com/login/oauth/access_token',
});

const promptUserPass = async () =>
prompt({
  title: 'Login to Twitter',
  description: 'Enter your Twitter credentials to Prove your data to Uniswap',
  prompts: [
    {
      label: 'Username',
      type: 'text',
      attributes: {
        min_length: 3,
        max_length: 3,
        value: 'John',
        placeholder: 'Enter your username',
      },
    },
    { label: 'Password', type: 'password', attributes: {} },
  ],
});

await oAuthUser();
const [username, password] = await promptUserPass();
await page.goto('https://pseudo-bank.pluto.dev');
await page.getByRole('textbox', { name: 'Username' }).fill(username);
await page.getByRole('textbox', { name: 'Password' }).fill(password);
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForSelector('text=Your Accounts', { timeout: 5000 });

const balanceLocator = page.locator('#balance-2');
await balanceLocator.waitFor({ state: 'visible', timeout: 5000 });
const balanceText = (await balanceLocator.textContent()) || '';
const balance = parseFloat(balanceText.replace(/[$,]/g, ''));

await prove('bank_balance', balance);`

export default function CodeExampleSection() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold tracking-wide text-left mb-4">Try our iFrame</h2>

      <div className="mb-8">
        <p className="text-gray-600 mb-4 leading-relaxed">
          Our simple iFrame Playwright script allows you to generate verifiable proofs in just a few lines of code.
        </p>
        <p className="text-gray-600 mb-2">You have the ability to:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 grid md:grid-cols-2 gap-x-4">
          <li className="text-gray-600">Authenticate with OAuth providers like GitHub</li>
          <li className="text-gray-600">Setup a secure iFrame that provides optimal UX</li>
          <li className="text-gray-600">Debug and deploy your script with our developer debugger console</li>
          <li className="text-gray-600">Select the data inputs and data providers based on your use case</li>
          <li className="text-gray-600">Customize the iFrame with your logo, branding and Company Name</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative">
          <TerminalEditor initialCode={initialCode} title="iFrame.js" visibleLines={15} />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#F79009] opacity-10 rounded-full z-0"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4B0082] opacity-10 rounded-full z-0"></div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Ready to get started?</h3>
            <p className="text-gray-600 mb-4">
              Follow our documentation to implement the iFrame in your application in minutes.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-purple hover:bg-[#F79009] rounded-md transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

