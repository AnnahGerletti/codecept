 the main page of tapin:know is the website but then there are routes to
 different pages, so how do you distringuish within codeceptjs

I.amOnPage(tapinwebsite) but also on login('/login') page vs mainpage
 ('/')??? 
 
 ATDD there is a logo not where is the logo, you don't put contraints
on the design of the site 

ATDD tests will be used to create the original site (tests should start to pass once the site starts to look right), <is ATDD only testing only surface testing of what they site has to look like?> after its developed the code will be tested using another testing framework, such as JEST the ATDD testing will be pushed out to the CI to make sure the site is not changing. 
 
 
 Test locally with Jest or any other testing framework, TRAVIS(CI continuous integration testing) would run in the staging area on github, on a remote server. 