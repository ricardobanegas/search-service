describe('Search', () => {
    it('Service - Incorrect url', () => {
        cy.request('/searchsa').as('result')

        cy.get('@result').should((response) => {
          expect(response.body).to.have.property('error', 'No such URL')
        })
      })

    it('Service - Incorrect parameters', () => {
      cy.request('/search').as('result')

      cy.get('@result').should((response) => {
        expect(response.body).to.have.property('error', 'Invalid service name')
      })
    })

    it('Service - Simple search', () => {
        cy.request('/search?service=massage&lat=0&lng=0').as('result')

        cy.get('@result').should((response) => {
          expect(response.body).to.have.property('totalHits', 5)
          expect(response.body).to.have.property('totalDocuments', 10)
        })
      })

    it('Service - Search with coordinates', () => {
        cy.request('/search?service=massage&lat=59.40411099999999&lng=18.109118499999962').as('result')

        cy.get('@result').should((response) => {
          expect(response.body).to.have.property('results')
          expect(response.body.results[0]).to.have.property('name', "Massage")
          expect(response.body.results[0]).to.have.property('distance', "11 km")
        })
      })
  })