describe('DASHBOARD DATA WASIT', () => {
    beforeEach(() => 
    {
        cy.visit('http://localhost:3000/DataWasit')
    })
    it('Click Dashboard', () => {
        cy.get('#btn_wasit12').click()
    })
    
})
