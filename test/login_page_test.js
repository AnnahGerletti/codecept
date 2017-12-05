

Feature('login page')

Scenario('see login page', (I) =>{
  I.amOnPage("http://tapin.nz/tapinknow/login")
  I.seeElementInDOM('#form')
})
