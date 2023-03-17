describe('DASHBOARD DATA ATLIT', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/DataAtlit')
      })

      it('Click Dashboard', () => {
        cy.get('#username').type('heaven')
        cy.get('#password').type('sendutsek123')
        cy.get('.ant-form-item-control-input').contains('Log in').click() 
        cy.get('a[href="/DataAtlit"]').click()
        cy.get('#mutbgttt').click()
        cy.get('#nama').type("daniel iman k")
        cy.get('#ttl').type("yogyakarta,4 Januari 1996")
        cy.get('#alamat').type("Wetan pasar,Wates,KulonProgo")
        cy.get('#telephone').type("08124214255")
        cy.get('#gender').type("Laki-Laki")
        cy.get('#cabor_id').type("KEMPO")
        cy.get('.rc-virtual-list-holder-inner').first().click()
        cy.get('.ant-modal-footer').contains('OK').click()
    })
})
