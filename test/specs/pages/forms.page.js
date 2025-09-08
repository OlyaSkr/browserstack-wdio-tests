class FormsPage {
  get inputField() {
    return $(`~text-input`);
  }
  get resultInputField() {
    return $(`~input-text-result`);
  }

  get switchToggle() {
    return $(`~switch`);
  }

  get switchText() {
    return $(`~switch-text`);
  }

  get activeButton() {
    return $(`~button-Active`);
  }

  get messagePopup() {
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get okButton() {
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }

  async enterText(value) {
    await this.inputField.waitForDisplayed();
    await this.inputField.click();
    await this.inputField.setValue(value);
  }

  async toggleSwitch() {
    await this.switchToggle.waitForDisplayed();
    await this.switchToggle.click();
  }

  async clickActiveButton() {
    await this.activeButton.waitForDisplayed();
    await this.activeButton.click();
  }

  async confirmPopup() {
    await this.okButton.waitForDisplayed();
    await this.okButton.click();
  }
}

export default new FormsPage();
