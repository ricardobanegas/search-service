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
        // Error handling
        if (service === null || service === '' || service.length < 2) {
            throw 'Invalid service name'
        }

        // Note: Could check if its real coordinates
        if (lat === null || lat === '' || typeof lat !== 'string') {
            throw 'Invalid latitude'
        }
        if (lng === null || lng === '' || typeof lng !== 'string') {
            throw 'Invalid longtitude'
        }

        // Note 1: This could be optimised to one loop by using .forEach or similar but for readability I kept this chainable with .filter and .map
        // Note 2: There could also be optimisations by limiting the results for the user
        const results = this.data
            // First filter results that are not relevant
            .filter(result => {
                return levenshtein(service, result.name) <= 5 // Only return values matched lower & equal to 5
            })
            // Now create new objects for the results
            .map(result => {
                const { ...rest } = result

                // Distance calculation
                const distanceObject = distance.between(
                    {
                        lat: result.position.lat,
                        lon: result.position.lng
                    },
                    {
                        lat: lat,
                        lon: lng
                    }
                ).human_readable()

                // Keep it short and neat
                const distanceString = `${distanceObject.distance} ${distanceObject.unit}`

                // Return mapped object
                return {
                    ...rest,
                    distance: distanceString,
                    score: levenshtein(service, result.name)
                }
            })

        return {
            totalHits: results.length,
            totalDocuments: this.data.length,
            results
        }
    }
}

module.exports = searchService