describe('index', () => {
  it('returns page', () => {
    cy.visit({ url: '/' });
    cy.injectAxe();
  });
});
