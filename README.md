# PetsQuotationHackathon

## What I set out to do
API simplified quotation for pets building off a forked repo from our teams hackathon through School of Code. Using Node.js with express for the server.

This hackathon was lots of fun and is something I am keen to continue playing with. As we were limited to four hours of work there are a number of features I'd like to 
add.

- Full validation of address and breed type from external APIs
- Persistent of some form to allow a quote to be revisited for a certain or unlimited time once it has been provided
- Jest unit tests for all functions
- Supertest for routes if possible
- Possibly explore Grafana and Cloudwatch if possible

## Reflections

- Was fun to get this up and running - still a lot of tidying up to do
  - the object structure that is expected on POST isn't ideal
    - some logic to deconstruct address into postcode or at least postcode into area would be better than those three all being key value pairs
  - tidy up console logs!
  - more tests
    - work out the best way (or if its needed?) to test the whole fetch (currently just logic that works on the response is tested)
    - replace the dummy tests for the last few functions with real tests
    
### Learning 

Biggest is probably Promise.all - learning that there is a way to await all and return once all resolved was a big one and I imagine quite useful for future projects. I came across a bug when a function that mapped through an array calling an async fetch function wasn't resolving so I spent a decent amount of time looking into that.

Secondly and only slightly behind the above is how important tests are.
This was a 4 hour hackathon in a team of four originally and in an effort to deliver a product quickly tests were skipped but after a bug due to incorrect capitalisation costing us at least 30 minutes and maybe even an hour TDD may have avoided a lot of that wasted time even though there would have been an upfront cost.

I may revisit this at some point but if not I learnt a lot and it was time well spent!
