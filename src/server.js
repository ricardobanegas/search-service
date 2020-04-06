// Libraries
const express = require('express')
const app = express()

// Configuration (in a larger app - separate to standalone config-file)
const config = {
    PORT: 9000
}

// Load results into memory
// XXX

// Routes
app.get('/search', function (req, res) {
    res.send('hello world')
})

// Catch-all - in production this should include error states like 404, 500
app.get('*', function (req, res) {
    res.send('*')
})

// Start server
app.listen(config.PORT, () => {
    console.log(`Search service started on port ${config.PORT}`)
})