Feature: Solicitação para cadastro PHPTravels

  @demo
  Cenário: Solicitar demo e visualizar credenciais geradas
    Dado que o usuário esteja na página de demo do PHPTravels
    Quando ele preenche o formulário de solicitação com dados válidos
    E envia o formulário
    Então as credenciais de acesso devem ser exibidas
    


