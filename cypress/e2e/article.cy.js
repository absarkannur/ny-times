// Cypress Testing

describe( "Articles", () => {
    it( "User can see the list of Articles", () => {

        // Host
        cy.visit('http://localhost:5173/');

        // Click the list
        cy.wait(3000);
        cy.get('[data-cy=article-list-item-0]').click();

        // Click the Home Link to Back home Page
        cy.wait(1000);
        cy.get('[data-cy=back-to-home]').click();

    });
});