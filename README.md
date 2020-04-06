# Search service

Simple HTTP search service that returns a list of services based on the given query & coordinate.

## Installation & usage

### Install dependencies
`npm install`

### Start server
`npm start` # runs on port 9000

### Now fetch the result (new terminal tab)
`curl localhost:9000/search?query=<search_query>`

### Run tests
`npm run tests`

## Approach

- NodeJS using Express web server
- Kept the application Vanilla ES6/ES7
- Separated HTTP engine logic and business logic (search engine) for possibly reusability
- Loads results in memory for faster response
- Usage of XXX algoritm for freetext search
- Few simple libraries for GPS coordinate calculations and result scoring used

## Further improvements for real-life use

- Error handling needs to be improved
- Use Elasticache or similar search engine to align with real-life expectations
- TypeScript, ESlinting
- Improved test cases
- pm2 or similar process manager to serve multiple deamons