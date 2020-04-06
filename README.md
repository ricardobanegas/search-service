# Search service

Simple HTTP search service that returns a list of services based on the given query & coordinate.

## Installation & usage

### Install dependencies
`npm install`

### Start server (on port 9000)
`npm run server`

### Now fetch the result (new terminal tab)
`curl localhost:9000/search?service=<SERVICE_NAME>&lat=<LAT>&lng=<LNG>`

### Example
`curl localhost:9000/search?service=massage&lat=59.313357&lng=18.022400`

### Run mocha tests
`npm run tests`

## Tested on

```
➜ npm --version
6.11.3
➜ node --version
v12.12.0
```

## Approach

- NodeJS using Express web server
- Kept the application Vanilla ES6/ES7 using camelCase standard
- Load results into memory for startup of application, so that application doesn't need to re-read results for every request
- Used simple [Levenshtein distance](https://github.com/gustf/js-levenshtein) library for scoring of service name match
- Used simple [Geo distance](https://github.com/walling/geo-distance) library for calculating distance between two GPS coordinates.
- Separated HTTP engine logic and business logic (search engine) for possibly reusability

## Further improvements for real-life use

- Error handling & Tests needs to be improved & cover more cases
- Use Elasticache or similar search engine to align with real-life expectations
- TypeScript, ESlinting, separate configuration files, Loggers, CORS-checking...
- [PM2](https://pm2.keymetrics.io/) or similar process manager to serve multiple processes