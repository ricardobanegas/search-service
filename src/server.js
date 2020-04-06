// Libraries
const express = require('express')
const app = express()
const searchService = require('./service/search')
const fs = require('fs');

// Instantiate and load data into memory
const rawdata = fs.readFileSync('./db/data.json')
const data = JSON.parse(rawdata)
const search = new searchService(data)

// Configuration (in a larger app - separate to standalone config-file)
const config = {
    PORT: 9000
}

// Routes
app.get('/search', async (req, res) => {
    let result
    // Error handling of query
    try {
        result = await search.find(req.query.service, req.query.lat, req.query.lng)
        res.json(result)
    } catch(error) {
        res.json({
            error
        })
    }
})

app.get('*', (req, res) => {
    // Catch-all - in production this should include error states like 4xx, 5xx
    res.json({
        "error": 'No such URL'
    })
})

// Start server
app.listen(config.PORT, () => {
    console.log(`Search service started on port ${config.PORT}`)
})