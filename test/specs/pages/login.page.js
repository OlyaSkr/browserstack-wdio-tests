class LoginPage {
  get emailField() {
    return $(`~input-email`);
  }

  get passwordField() {
    return $(`~input-password`);
  }

  get submitButton() {
    return $(`//android.widget.TextView[@text="LOGIN"]`);
  }

  emailErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    );
  }

  passwordErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    );
  }

  async fillEmail(email) {
    await this.emailField.waitForDisplayed();
    await this.emailField.click();
    await this.emailField.setValue(email);
  }

  async fillPassword(password) {
    await this.passwordField.waitForDisplayed();
    await this.passwordField.click();
    await this.passwordField.setValue(password);
  }

  async submitLogin() {
    await this.submitButton.waitForDisplayed();
    await this.submitButton.click();
  }

  async verifyEmailError(expectedText) {
    const element = await this.emailErrorMessage();
    await expect(element).toHaveText(expectedText);
  }

  async verifyPasswordError(expectedText) {
    const element = await this.passwordErrorMessage();
    await expect(element).toHaveText(expectedText);
  }
}

export default new LoginPage();
