
Feature('login page')

Scenario('see login page', (I) => {
  const userName = 'johnsmith'
  const password = 'password'
  I.amOnPage('/login')
  I.fillField('.input', userName)
  I.fillField('.input', password)
  I.click('Submit')
})

// fuzzy locator?? use css locators when using the I.click helper