# Template de formulário Bootstrap

O cadastro em web/cadastro.html foi adaptado do exemplo oficial gratuito Checkout do Bootstrap 5.3.3.

- Demonstração: https://getbootstrap.com/docs/5.3/examples/checkout/
- Código da versão utilizada: https://github.com/twbs/bootstrap/blob/v5.3.3/site/content/docs/5.3/examples/checkout/index.html
- Licença: MIT; texto integral em LICENSE.txt.
- Cópia do modelo original: original.html.txt (referência, não é uma página do site).

## Adaptações realizadas

Foram reaproveitados o layout responsivo row g-5, as colunas col-md-7 col-lg-8 e col-md-5 col-lg-4 order-md-last, o resumo lateral com list-group, a grade de campos row g-3/col-sm-6, os separadores de seções e o botão de conclusão em largura total. O formulário usa needs-validation e novalidate com mensagens invalid-feedback.

O resumo de compras foi convertido em orientação para o cadastro. Os campos foram adaptados à Rede de Apoio e mantêm a diferenciação entre usuários e voluntários. As validações próprias em web/js/funcoes.js controlam is-invalid e as mensagens, no lugar do script de validação genérico do exemplo. Não foram adicionados campos de pagamento nem chamadas de envio.
