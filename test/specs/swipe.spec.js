import SwipePage from './pages/swipe.page';
import NavigationPage from './pages/navigation.page';
import allureReporter from '@wdio/allure-reporter';
import { testData } from '../../data/testData';

describe('Verify Swipe page', () => {
  it('Verify swipe menu', async () => {
    allureReporter.addDescription(
      'Verify that each card in the swipe menu displays the correct title when navigating via dots.'
    );

    const cardTitles = testData.swipePage.cardTitles;

    allureReporter.addStep('Navigate to Swipe page');
    await NavigationPage.goToSwipe();

    for (let i = 1; i <= cardTitles.length; i++) {
      await SwipePage.goToSlide(i);

      allureReporter.addStep('Verify card title');
      await SwipePage.verifyTitle(cardTitles[i - 1]);
    }
  });
});
