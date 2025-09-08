class NavigationPage {
  get homeButton() {
    return $(`~Home`);
  }
  get formsButton() {
    return $(`~Forms`);
  }
  get swipeButton() {
    return $(`~Swipe`);
  }

  get loginButton() {
    return $(`~Login`);
  }

  async goToHome() {
    await this.homeButton.waitForDisplayed();
    await this.homeButton.click();
  }

  async goToForms() {
    await this.formsButton.waitForDisplayed();
    await this.formsButton.click();
  }

  async goToSwipe() {
    await this.swipeButton.waitForDisplayed();
    await this.swipeButton.click();
  }

  async goToLogin() {
    await this.loginButton.waitForDisplayed();
    await this.loginButton.click();
  }
}

export default new NavigationPage();
