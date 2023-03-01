describe('DASHBOARD DATA PELATIH', () => {
    beforeEach(() => 
    {
        cy.visit('http://localhost:3000/DataPelatih')
    })
    it('Click Dashboard', () => {
        cy.get('#btn_pelatihhhh').click()
    })
    
})
