//tapin:know

Feature('site knows users pressence');

//
Scenario('new user 1st time to site', (I) => {
  I.amOnPage("http://tapin.nz/tapinknow")
  I.see('Hello First time user')
});

//eventually will need to add cookie permissions, to be able to test what a returning user looks like.
Scenario('return user', (I) => {
  I.amOnPage("http://tapin.nz/tapinknow")
  I.see('Wellcome Back')
})


//aproved invitation, the website will decide which path to take you too based if you have a Tapin cookie
