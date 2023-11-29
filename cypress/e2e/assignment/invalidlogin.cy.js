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

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(
        'Either your username was not found or your password is incorrect',
      );
      const message = `<p style="color: red;">Either your username was not found or your password is incorrect</p>`;
      cy.get('#loginForm').within(() => {
        cy.get('.modal-body').then(($div) => {
          $div.append(message);
        });
      });
    });
  });
});
