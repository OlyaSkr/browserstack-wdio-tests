import FormsPage from './pages/forms.page';
import NavigationPage from './pages/navigation.page';
import allureReporter from '@wdio/allure-reporter';
import { testData } from '../../data/testData.js';
import { faker } from '@faker-js/faker';

describe('Verify forms', () => {
  beforeEach(async () => {
    await browser.launchApp();
    await NavigationPage.goToForms();
  });

  it('Verify input field', async () => {
    allureReporter.addDescription(
      'This test verifies that a user can enter text into an input field and that the field displays the correct text.'
    );

    const randomText = faker.string.alphanumeric(8);

    allureReporter.addStep('Enter random text into input field');
    await FormsPage.enterText(randomText);

    allureReporter.addStep(
      'Verify that the input field contains the entered text'
    );
    await expect(FormsPage.resultInputField).toHaveText(randomText);
  });

  it('Should toggle switch ON and OFF', async () => {
    allureReporter.addDescription(
      'This test verifies that a switch can be toggled ON and OFF and that the displayed status text updates accordingly.'
    );

    const switchOnText = testData.formsPage.switchedText.on;
    const switchOffText = testData.formsPage.switchedText.off;

    allureReporter.addStep('Toggle the switch to OFF');
    await FormsPage.toggleSwitch();
    await expect(FormsPage.switchText).toHaveText(switchOffText);

    allureReporter.addStep('Toggle the switch back to ON');
    await FormsPage.toggleSwitch();
    await expect(FormsPage.switchText).toHaveText(switchOnText);
  });

  it('Verify active button', async () => {
    allureReporter.addDescription(
      'This test verifies that clicking the active button displays the correct message and allows confirmation of the popup.'
    );

    const activeButtonMessage = testData.formsPage.activeButtonMessage;

    allureReporter.addStep('Click the active button');
    await FormsPage.clickActiveButton();

    allureReporter.addStep('Verify the active button message');
    await expect(FormsPage.messagePopup).toHaveText(activeButtonMessage);

    allureReporter.addStep('Confirm the popup');
    await FormsPage.confirmPopup();
  });

  afterEach(async () => {
    await browser.closeApp();
  });
});
