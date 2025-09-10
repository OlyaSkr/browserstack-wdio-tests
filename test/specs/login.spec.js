import NavigationPage from './pages/navigation.page';
import LoginPage from './pages/login.page';
import { testData } from '../../data/testData';
import { faker } from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter';

describe('Login page', () => {
  it('login with invalid required fields', async () => {
    allureReporter.addDescription(
      'Verify that login fails with invalid email and password and shows proper validation messages.'
    );

    const invalidEmail = faker.internet.email().replace('@', '');
    const invalidPassword = faker.string.alphanumeric(4);
    const emailError = testData.loginPage.emailError;
    const passwordError = testData.loginPage.passwordError;

    await NavigationPage.goToLogin();

    allureReporter.addStep(
      `Fill email field with invalid value: ${invalidEmail}`
    );
    await LoginPage.fillEmail(invalidEmail);

    allureReporter.addStep(
      `Fill password field with invalid value: ${invalidPassword}`
    );
    await LoginPage.fillPassword(invalidPassword);

    allureReporter.addStep('Submit login form');
    await LoginPage.submitLogin();

    allureReporter.addStep(`Verify email validation message: "${emailError}"`);
    await LoginPage.verifyEmailError(emailError);

    allureReporter.addStep(
      `Verify password validation message: "${passwordError}"`
    );
    await LoginPage.verifyPasswordError(passwordError);
  });
});
