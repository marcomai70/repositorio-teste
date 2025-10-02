import { Dado, Quando, Então } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Dado("que o usuário esteja na página de demo do PHPTravels", () => {
  cy.visit("https://phptravels.com/demo/");
});

Quando("ele preenche o formulário de solicitação com dados válidos", () => {
  loginPage.preencherFormulario(
    "Marcos",
    "Maia",
    "MinhaEmpresa",
    "Brazil",
    "11979999999",
    "teste.email@exemplo.com"
  );
});

Quando("envia o formulário", () => {
  loginPage.enviarFormulario();
});

Então("as credenciais de acesso devem ser exibidas", () => {
  loginPage.validarCredenciaisGeradas();
});
