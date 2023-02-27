describe('TESTING KONI HOMEPAGE', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/DataAtlit')
      })

      it('Click Dashboard', () => {

        cy.get('#buttonNavbar').click()
    })
})
