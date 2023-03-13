describe('DASHBOARD DATA WASIT', () => {
    beforeEach(() => 
    {
        cy.visit('http://localhost:3000/DataWasit')
    })
    it('Click Dashboard', () => {
        cy.get('#btn_wasit12').click()
        cy.get('#nama').type("daniel iman k")
        cy.get('#ttl').type("yogyakarta,4 Januari 1996")
        cy.get('#alamat').type("Wetan pasar,Wates,KulonProgo")
        cy.get('#telephone').type("08124214255")
        cy.get('#gender').type("Laki-Laki")
        cy.get('#keterangan').type('Wasit')
        cy.get('#cabor_id').type("KEMPO")
        cy.get('.rc-virtual-list-holder-inner').first().click()
        cy.get('.ant-modal-footer').contains('OK').click()
    })
    
})
