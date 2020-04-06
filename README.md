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
`curl 'http://localhost:9000/search?service=massage&lat=59.313357&lng=18.022400'`

### Run cypress tests - make sure server is already running
`npm test`

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
- Separated HTTP engine logic and business logic (search engine) for possibly reusability
- Used simple [Levenshtein distance](https://github.com/gustf/js-levenshtein) library for scoring of service name match
- Used simple [Geo distance](https://github.com/walling/geo-distance) library for calculating distance between two GPS coordinates.
- Used [Cypress](https://cypress.io) for API tests

## Further improvements for real-life use

- Error handling & Tests needs to be improved & cover more cases
- Use Elasticache or similar search engine to align with real-life expectations
- TypeScript, ESlinting, separate configuration files, Loggers, CORS-checking...
- [PM2](https://pm2.keymetrics.io/) or similar process manager to serve multiple processes

## Test runner screenshot

![Cypress](https://ucf9087fb7e018c2fba152242af9.previews.dropboxusercontent.com/p/thumb/AAzHGtv5MPJ0P5BLxPbQlAW2e83X-5L9AZ23nlGui2gHXQnbXsOdh6CML0EL-2Lc_rkioP-v82iI9jBeBsFRJxDiOEixTIL1qPjUNXU1O0bAsRZhNwONIhi77z8GiLak2yuMNF6kNmQr_Hl0sAnYhUc8fIs8m7yjoMsAP9VYIc5mt7pUbMV3l3WEkk9OAzJZGIvjlSgZkvXVp-GCKjhk8F1TTngeXogWJ0ATkpK7MiIzx9wZO_y1GkK0GqSsMykBhe-PFGNUzQU1W1ZUwFfXBpI3UqmTI9joFK6C3qZvj6r2yx29TnSVl58wtAf4sopud-j8w0pVU5T24q-n8Fj1gFh8i2gdeQOskcHPXh_GAv3jF_p0SKovfB5lnpbgBIEpFPg8GvIx9blnJ2SF1tkzN9d7_m2PYEXeJr3eWbwhi_9bJujFr-UAOM-oUhy4ASTZB5Uv5KWxHbEQmJdv50I9hlo-LgahcmqmrLNV0lHs9wnmnw/p.png?fv_content=true&size_mode=5 "Cypress")
