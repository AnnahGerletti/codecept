//tapin:know

Feature('site knows users pressence');

Scenario('new user 1st time to site', (I) => {
  I.amOnPage("http://tapin.nz/tapinknow")
  I.see('Hello First time user')
});
// would need a cookie or not have a cookie

// Scenario('')
