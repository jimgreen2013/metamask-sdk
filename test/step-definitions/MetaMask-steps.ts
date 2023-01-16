import { Given, When, Then } from '@wdio/cucumber-framework';
import Gestures from '../utils/Gestures';
import ConnectDappPopup from '../screens/MetaMask/Components/ConnectDappPopup';
import GetStartedScreen from '../screens/MetaMask/GetStartedScreen';
import WalletSetupScreen from '../screens/MetaMask/WalletSetupScreen';
import OptinMetricsScreen from '../screens/MetaMask/OptinMetricsScreen';
import ImportFromSeedScreen from '../screens/MetaMask/ImportFromSeedScreen';
import SecurityUpdatesScreen from '../screens/MetaMask/SecurityUpdatesScreen';

Given(/^The MetaMask mobile app is installed$/u, async () => {
  /** This is automatically done by the automation framework **/
});

When(/^I open the MetaMask mobile app$/u, async () => {
  /** This is automatically done by the automation framework **/
});

// And I tap "Import Wallet" on MetaMask
When(/^I tap "([^"]*)?" on MetaMask/u, async (text) => {
  switch (text) {
    case 'Get Started':
      await driver.pause(7000);
      await new GetStartedScreen().tapGetStarted();
      break;
    case 'Import Wallet':
      // await driver.pause(7000); // TODO: Needs a smarter set timeout
      await new WalletSetupScreen().tapImportWithSRP();
      break;
    case 'Dont Share Analytics':
      await Gestures.swipeByPercentage({ x: 50, y: 80 }, { x: 50, y: 10 });
      await new OptinMetricsScreen().tapNoThanksOptinMetrics();
      break;
    case 'Import':
      await Gestures.tapOutside({ x: 1, y: 40 });
      await new ImportFromSeedScreen().tapImportButton();
      break;
    case 'No Security Updates':
      await new SecurityUpdatesScreen().tapNoThanksSecutityUpdates();
      break;
    default:
      throw new Error('Condition not found');
  }
});

When(
  /^I tap the "([^"]*)?" button on the MetaMask bottom prompt/u,
  async (button) => {
    switch (button) {
      case 'Approve':
        await new ConnectDappPopup().tapConnect();
        break;
      case 'Reject':
        await new ConnectDappPopup().tapCancel();
        break;
      default:
        throw new Error('Condition not found');
    }
  },
);

When(/^I fill the "([^"]*)?" with "([^"]*)?"/u, async (field, value) => {
  const srp =
    process.env.SRP ||
    'test test test test test test test test test test test test';
  switch (field) {
    case 'Secret Recovery Phrase':
      await new ImportFromSeedScreen().fillSrpField(srp);
      break;
    case 'FirstPassword':
      await new ImportFromSeedScreen().fillFirstPasswordInput(value);
      break;
    case 'SecondPassword':
      await new ImportFromSeedScreen().fillSecondPasswordInput(value);
      break;
    default:
      throw new Error('Condition not found');
  }
});

Then(/^I am routed to MetaMask and I see the bottom prompt/u, async () => {
  // await driver.pause(7000);
  expect(await new ConnectDappPopup().isConnectPopupDisplayed()).toBe(true);
});