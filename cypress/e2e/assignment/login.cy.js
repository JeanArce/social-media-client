describe('login', () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/');
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

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
    cy.wait(15000);

    cy.window().then((win) => {
      expect(win.localStorage.token).to.exist;
    });
  });
});
