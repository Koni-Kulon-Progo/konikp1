describe('DASHBOARD DATA SARPRAS', () => {
    beforeEach(() => 
    {
        cy.visit('http://localhost:3000/DataSarpras')
    })
    it('Click Dashboard', () => {
        cy.get('#btn_sarpras1').click()
    })
    
})
