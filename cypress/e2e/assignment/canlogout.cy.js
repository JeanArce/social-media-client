describe('login', () => {
  it('can login and access profile', () => {
    cy.clock();
    cy.visit('/');
    cy.tick(1000);
    cy.get('#registerForm').within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.tick(1000);
    cy.get('#loginEmail').type('TEST_EMAIL', { delay: 500 });
    cy.get('#loginPassword').type('TEST_PASSWORD{enter}', { delay: 500 });

    cy.tick(1000);

    cy.get('header').within(() => {
      cy.wait(8000).get('button[data-auth="logout"]').click();
    });
  });
});
