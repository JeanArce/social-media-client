describe('login', () => {
  it('can login and access profile', () => {
    cy.clock();
    cy.visit('/');
    cy.tick(1000);
    cy.get('#registerForm').within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.tick(1000);
    cy.get('#loginEmail').type('gabriel@noroff.no', { delay: 500 });
    cy.get('#loginPassword').type('gabriel@*05{enter}', { delay: 500 });
    cy.wait(15000);

    cy.window().then((win) => {
      cy.log('localstorage', win.localStorage);
      expect(win.localStorage.getItem('token')).to.not.be.null;
    });
  });
});
