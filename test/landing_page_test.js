
//tapin:know landing page
Feature('Landing Page');

Scenario('Am I running', (I) => {
  I.amOnPage("/")
  I.see("Wellcome to Tapin")
  done()
});
