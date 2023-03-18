describe('llenaor los campos para nueva cita y clickear el submit y la edita', () => {
  it('campos nueva cita', () => {
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

    cy.get('[data-cy=mascota-input]')
      .type('Patotas'); 

    cy.get('[data-cy=propietario-input]')
      .type('Panfilo');

      cy.get('[data-cy=telefono-input]')
      .type('8595905');
    
      cy.get('[data-cy=fecha-input]')
      .type('2023-03-30');
    
      cy.get('[data-cy=hora-input]')
      .type('22:30');

      cy.get('[data-cy=sintomas-textarea]')
      .type('Le duelen las patotas');

      cy.get('[data-cy="submit-cita"]')
      .click();

    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('equal', 'Administra tus Citas');

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-success');

    //editando la cita
      cy.get('[data-cy=btn-editar')
        .click;

      cy.get('[data-cy=mascota-input]')
        .type('Patotas 2'); 

      cy.get('[data-cy="submit-cita"]')
        .click();
    });
  });
