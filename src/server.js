// Libraries
const express = require('express')
const app = express()

// Services
const searchService = require('./service/search')

// Instanciate and results data into memory
const search = new searchService({
    mama: 'mama'
 })

// Configuration (in a larger app - separate to standalone config-file)
const config = {
    PORT: 9000
}

// Load results into memory
// XXX

// Routes
app.get('/search', (req, res) => {
    res.json(search.find())
})

app.get('*', (req, res) => {
    // Catch-all - in production this should include error states like 404, 500
    res.json({
        "error": 'No such URL'
    })
})

// Start server
app.listen(config.PORT, () => {
    console.log(`Search service started on port ${config.PORT}`)
})