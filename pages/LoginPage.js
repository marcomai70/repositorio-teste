const el = require('../elements/loginElements');

class LoginPage {
  preencherFormulario(nome, sobrenome, empresa, pais, whatsapp, email) {
    cy.get(el.firstNameInput).type(nome);
    cy.get(el.lastNameInput).type(sobrenome);
    cy.get(el.businessNameInput).type(empresa);
    cy.get(el.countrySelect).select(pais);
    cy.get(el.whatsappInput).type(whatsapp);
    cy.get(el.emailInput).type(email);
  }
  
  enviarFormulario() {
    cy.get(el.submitButton).click();
  }

  validarCredenciaisGeradas() {
    cy.get(el.frontendUrlBox).should('be.visible');
    cy.get(el.adminUrlBox).should('be.visible');
    cy.get(el.usernameBox).should('contain.text', '@');
    cy.get(el.passwordBox).should('not.be.empty');
  }
}

module.exports = new LoginPage();

