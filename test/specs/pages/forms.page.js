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

  get dropdown() {
    return $(
      '//android.view.ViewGroup[@content-desc="Dropdown" or @resource-id="android_touchable_wrapper"]'
    );
  }

  dropdownOption(optionText) {
    return $(`//android.widget.CheckedTextView[@text="${optionText}"]`);
  }

  editText(optionText) {
    return $(`//android.widget.EditText[contains(@text, "${optionText}")]`);
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

  async selectOption(optionText) {
    await this.dropdown.waitForDisplayed();
    await this.dropdown.click();

    const optionElement = this.dropdownOption(optionText);
    await optionElement.waitForDisplayed();
    await optionElement.click();

    const editElement = this.editText(optionText);
    await editElement.waitForDisplayed();

    const value = await editElement.getText();
    console.log(value);
    await expect(value).toEqual(optionText);
  }
}

export default new FormsPage();
