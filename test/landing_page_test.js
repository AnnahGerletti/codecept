const assert = require('assert')
const globals = ('../globals.json')

// tapin:know product page
Feature('Landing Page')

Scenario('is the page title visable', function * (I) {
  I.amOnPage(globals.tapinknow)
  let title = yield I.grabTitle()
  assert.equal(title, 'Tapin:Know')
})

Scenario('Am I running', (I) => {
  I.amOnPage(globals.tapinknow)
  I.see("")
})

Scenario('three headers', (I) => {
  I.amOnPage(globals.tapinknow)

}

Scenario('', (I) => {
  I.amOnPage(globals.tapinknow)

}

Scenario('three headers', (I) => {
  I.amOnPage(globals.tapinknow)

}

Scenario('three headers', (I) => {
  I.amOnPage(globals.tapinknow)

}
 
// the main page of tapin:know is the website but then there are routes to different pages, so how do you distringuish within codeceptjs I.amOnPage(tapinwebsite) but also on login('/login') page vs mainpage ('/')???

