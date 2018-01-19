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


Scenario('I see headers on page', (I) => {
  I.amOnPage("/")
  I.seeElement("<h2></h2>")
}

Scenario('clickable subheadings', (I) => {
  I.amOnPage("/")
  I click()
  //how to define the clickable subheadings in prototype. Where would that be in code.

}
 

