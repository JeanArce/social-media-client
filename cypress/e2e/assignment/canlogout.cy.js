describe('login', () => {
  it('can login and access profile then logout afterwards', () => {
    cy.clock();
    cy.visit('/');
    cy.tick(1000);
    cy.get('#registerForm').within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.tick(1000);
    cy.get('#loginEmail').type('gabriel@noroff.no', { delay: 500 });
    cy.get('#loginPassword').type('gabriel@*05{enter}', { delay: 500 });

    cy.tick(1000);

    cy.get('header').within(() => {
      cy.wait(8000).get('button[data-auth="logout"]').click();
    });
    cy.wait(3000);
    cy.window().its('localStorage.token').should('not.exist');
  });
});
