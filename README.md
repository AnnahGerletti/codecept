# codecept
### A testing framework, for writing Acceptance tests (ATDD)
#### Documentation is good - can be confussing  

https://codecept.io/

# codecept with the Nightmare helper
#### Makes writing test easier 

https://codecept.io/helpers/Nightmare/

- Test writen for Devs from project Job Stories  
- Normal traffic light testing
- THe idea is these test would be wrtien by a BA which would define the app, they would be given to the Devs would would build it to pass the tests. 

# Key things to rememeber

1. KEY: Don't get *codecept.io* mixed up with *codeception* different. 
- codeceptjs = codecept.io

2. Helpful github repo
- https://github.com/Codeception/CodeceptJS

3. Personal repo with codecept tests added
 - https://github.com/AnnahGerletti/redo-tutorial
 
 #### Example Test code
 ```sh
 Scenario('Can user see page title', function * (I) {
  I.amOnPage(globals.pageUrl)
  let title = yield I.grabTitle()
  // I.seeInTitle("Video Player") wrong title
  assert.equal(title, 'React Redux')
})
```
- The 'I' key word is part of the Acceptance testing framewrok 
- `I.amOnPage` is one of the Codecept.io helpers
- `yield` is an ES6 genorator function, can read about these here:
  https://davidwalsh.name/es6-generators

  
