import { $, except } from '@wdio/globals';

class SwipePage {
  dot(index) {
    return $(
      `//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup/android.view.ViewGroup[${index}]`
    );
  }

  cardTitle(text) {
    return $(`//android.widget.TextView[@text="${text}"]`);
  }

  async goToSlide(index) {
    if (index > 1) {
      const dotElement = await this.dot(index);
      await dotElement.waitForDisplayed();
      await dotElement.click();
    }
  }

  async verifyTitle(expectedTitle) {
    const titleElement = await this.cardTitle(expectedTitle);
    await titleElement.waitForDisplayed();
    console.log('Card title:', await titleElement.getText());
    await expect(titleElement).toHaveText(expectedTitle);
  }
}

export default new SwipePage();
