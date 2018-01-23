
Feature('login page')

Scenario('see login page', (I) => {
  I.amOnPage('/login')
  I.seeElement('#login')
})

Scenario('see tapin know logo', (I) => {
  I
})
// figure out how to see a logo image that would be in the css headers probably 

Scenario('can login', (I) => {
  const userName = 'johnsmith'
  const password = 'password'
  I.amOnPage('/login')
  I.fillField('.input', userName)
  I.fillField('.input', password)
  I.click('Submit')
})

// fuzzy locator?? use css locators when using the I.click helper
