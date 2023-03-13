describe('DASHBOARD DATA ATLIT', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/DataAtlit')
      })

      it('Click Dashboard', () => {
        cy.get('#mutbgt').click()
        cy.get('.ant-modal-confirm-btns > button').contains('OK').click()
    })
})
