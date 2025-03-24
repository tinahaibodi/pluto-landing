import TerminalEditor from "../components/terminal-editor"

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

export default function TerminalDemoPage() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-white text-2xl mb-6 font-mono">Terminal-Style iFrame Editor</h1>
        <TerminalEditor initialCode={initialCode} title="iFrame.js" visibleLines={15} />
        <div className="mt-6 text-gray-400 text-sm">
          <p>
            This terminal-styled editor mimics the look and feel of a development console with timestamps, colored
            output, and command prefixes.
          </p>
        </div>
      </div>
    </div>
  )
}

