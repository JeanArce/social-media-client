describe("login", () => {
  it("can login and access profile", () => {
    cy.clock();
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.tick(1000);
    cy.get("#registerForm").within(() => {
      cy.get('button[data-bs-target="#loginModal"]').click();
    });
    cy.tick(1000);
    cy.get("#loginEmail").type("jnrcnal616@noroff.no", { delay: 500 });
    cy.get("#loginPassword").type("jean@*05{enter}", { delay: 500 });
     
    cy.tick(1000);
 

    cy.get("header").within(() => {
       cy.wait(8000).get('button[data-auth="logout"]').click();
    });

  });
});
