import 'cypress-plugin-snapshots/commands'
describe('Organization Diagrams page for Diagram', () => {

    beforeEach(() => {
        cy.visit('');
    });

    it('Should match screenshot :DIAGRAM', () => {
        cy.get('h1').find('b', { timeout: 20000 }).should('have.text','MY BLOG');
        //Take a screenshot and match the screenshot.
        cy.get('body').toMatchImageSnapshot();
    });

});

