describe('Cargar la pag. principal', () => {
  it('Cargar la pagina principal', () => {
    //conectar el proyecto a cypress
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
    //verificar elementos y texto
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
    //verificar que exita elemento
    cy.get('[data-cy="titulo-proyecto"]').should('exist');
    //verificar que exita el elemento y contenta un texto en especifico
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');
    //verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('not.equal', 'No Hay Citas, comienza creando');
  })
})