describe('example-app-vue', () => {
    it('should display welcome message', () => {
        cy.visit('/');
        cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
    });
});
