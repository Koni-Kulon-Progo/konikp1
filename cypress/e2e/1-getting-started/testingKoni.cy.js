describe('TESTING KONI HOMEPAGE', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

    it('Click Dashboard', () => {

        cy.get('#buttonNavbar').click()
    })

    it('Click Lebih lanjut', () => {

        cy.get('#buttonIndex').click()
    })
    it('Click Visi & Misi', () => {

        cy.get('a[href="/VisiMisi"]').click()
    })
    it('Click News', () => {

        cy.get('a[href="/News"').click()
    })
})
