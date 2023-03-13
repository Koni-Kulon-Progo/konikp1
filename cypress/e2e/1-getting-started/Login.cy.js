describe('DASHBOARD DATA ATLIT', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/LoginPage')
      })

      it('Click Dashboard', () => {
        cy.get('#username').type('heaven')
        cy.get('#password').type('sendutsek123')
        cy.get('.ant-form-item-control-input').contains('Log in').click()
    })
})
