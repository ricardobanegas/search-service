const levenshtein = require('js-levenshtein')
const distance = require('geo-distance')

/**
 * Search service
 */
class searchService {
    /**
     * Constructor
     * @param {*} data Data object to load into memory
     */
    constructor (data) {
        this._data = data
    }

    /**
     * Get all results
     */
    get data () {
        return this._data
    }

    /**
     * Find matching results
     * @param {*} service Service string to match
     * @param {*} lat Latitude of the user
     * @param {*} lng Longtide of the user
     */
    find (service, lat, lng) {
        // Simple error handling
        if (service === null || service === '' || typeof service !== 'string') {
            throw 'Invalid service name'
        }

        if (lat === null || lat === '' || typeof lat !== 'string') {
            throw 'Invalid latitude'
        }

        if (lng === null || lng === '' || typeof lng !== 'string') {
            throw 'Invalid longtitude'
        }

        const results = this.data

        return results
    }
}

module.exports = searchService