const levenshtein = require('js-levenshtein');

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
    get all () {
        return this._data
    }

    /**
     * Searches through results and returns all possible matches
     * @param {*} searchObject Search object
     */
    find (query, lat, lng) {
        return levenshtein('Massage', 'Massage');
    }
}

module.exports = searchService