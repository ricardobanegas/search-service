# Search service

Simple HTTP search service that returns a list of services based on the given query & coordinate.

## Installation & usage

### Install dependencies
`npm install`

### Start server (on port 9000)
`npm start`

### Now fetch the result (new terminal tab)
`curl localhost:9000/search?query=<SERVICE_NAME>&lat=<LAT>&lng=<LNG>`

### Example
`curl localhost:9000/search?query=&lat=<lat>&lng=<lng>`

### Run tests
`npm run tests`

## Approach

- NodeJS using Express web server
- Kept the application Vanilla ES6/ES7 using camelCase standard
- Load results into memory for startup of application, so that application doesn't need to re-read results for every request
- Used simple [Levenshtein distance](https://github.com/gustf/js-levenshtein) library for scoring of service name match
- Separated HTTP engine logic and business logic (search engine) for possibly reusability
- Few simple libraries for GPS coordinate calculations and result scoring used

## Further improvements for real-life use

- Error handling & Tests needs to be improved & cover more cases
- Use Elasticache or similar search engine to align with real-life expectations
- TypeScript, ESlinting, separate configuration files, Loggers, CORS-checking...
- [PM2](https://pm2.keymetrics.io/) or similar process manager to serve multiple processes