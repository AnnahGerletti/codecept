
Feature('Landing Page');

Scenario('Am I running', (I) => {
  I.amOnPage("/")
  I.click("tapinDecide")
  I.amOnPage("/products/decide")
});
