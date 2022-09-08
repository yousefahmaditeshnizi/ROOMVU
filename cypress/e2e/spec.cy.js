describe('empty spec', () => {
  it('passes',
      () => {
          cy.visit('https://example.cypress.io')
          cy.contains('Kitchen Sink').should('be.visible')
          cy.request('https://example.cypress.io').its('body').should('include', '<h1>Kitchen Sink</h1>')
          cy.contains('type').click()
          cy.url().should('include', '/commands/action')
          cy.get('#email1').type('yousef.ahmadi.t@gmail.com').should('have.value', 'yousef.ahmadi.t@gmail.com')
          cy.request('https://jsonplaceholder.typicode.com/todos').as('todos')
          cy.get('@todos').its('body.0').then((Id) => {
              expect(Id).property('id').to.be.a('number')
              cy.get('@todos').its('body.0').then((userId) => {
                  expect(userId).property('userId').to.be.a('number')
                  cy.get('@todos').its('body.0').then((title) => {
                      expect(title).property('title').to.be.a('string')
                      cy.get('@todos').its('body.0').then((completed) => {
                          expect(completed).property('completed').to.be.a('boolean')

                      cy.request('POST', 'https://jsonplaceholder.typicode.com/todos', {
                          title: 'foo',
                          body: 'bar',
                          userId: 1,
                      })
                  })
              })
          })
      })
            .then((response) => {
                expect(response).property('status').to.equal(201)
                expect(response).property('body').to.contain({
                    title: 'foo',
                })
                expect(response.body).property('id').to.be.a('number')
                    .and.to.be.gt(100)
                expect(response.body).property('userId').to.be.a('number')
            })


      })


})