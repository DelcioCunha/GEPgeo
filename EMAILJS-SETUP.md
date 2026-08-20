# EmailJS — Ajuste para o limite de 2 templates (plano gratuito)

Descobrimos que o plano gratuito do EmailJS só permite **2 templates** (não 4
como previsto inicialmente). Em vez de pagar por mais templates, ajustei o
site para que os **4 formulários partilhem os teus 2 templates já criados**:

| Template já criado | Passa a ser usado por |
|---|---|
| **Contacto Geral** — `template_jkfv32p` | Contacto Geral **+** Agendamento |
| **Solicitar Serviço** — `template_72ixmfw` | Solicitar Serviço **+** Cursos |

Isto foi possível porque o site agora monta o assunto e o corpo do email
**em JavaScript, antes de enviar** — ou seja, os templates deixam de precisar
de campos específicos como `{{mensagem}}` ou `{{itens_carrinho}}`, e passam a
usar só **4 campos genéricos**: `{{nome}}`, `{{email}}`, `{{assunto}}` e
`{{corpo}}`. O `{{corpo}}` já vem com tudo formatado (incluindo os itens do
carrinho, quando existem) — é exactamente o mesmo texto que aparece na
pré-visualização do site.

Não precisas de criar nenhum template novo — só **editar o conteúdo dos 2
que já tens**.

---

## O que fazer no painel do EmailJS

Para cada um dos 2 templates (`template_jkfv32p` e `template_72ixmfw`):

1. Vai a **Email Templates** → clica no template.
2. Substitui o **Subject** por:
   ```
   {{assunto}}
   ```
3. Substitui o **Content** por:
   ```
   {{corpo}}

   ---
   Responde directamente a este email para falar com o cliente.
   ```
4. Confirma que:
   - **To Email:** `delciobentocunha007@gmail.com`
   - **Reply To:** `{{email}}`
   - **From Name:** `Site GEPGEO` (ou o que preferires)
5. Clica em **Save**.

Repete para o segundo template. Não precisas de mexer no Service ID nem
criar nada de novo — só isto, nos 2 templates já existentes.

## O que já foi feito no site (não precisas de fazer nada aqui)

Já actualizei o código (`assets/js/main.js` e `contactos.html`) para:
- Contacto Geral e Agendamento → enviam para `template_jkfv32p`
- Solicitar Serviço e Cursos → enviam para `template_72ixmfw`
- Os 6 valores de configuração (Public Key, Service ID, os 2 Template ID) já
  estão preparados no topo do `assets/js/main.js` — só falta colares a
  **Public Key** e o **Service ID** (os 2 Template ID já estão lá, os que me
  enviaste):

```js
emailjs: {
  publicKey: "SUBSTITUIR_PUBLIC_KEY",   // ← falta colar (Account → API Keys)
  serviceId: "SUBSTITUIR_SERVICE_ID",   // ← falta colar (Email Services)
  templates: {
    geral: "template_jkfv32p",          // já preenchido
    pedido: "template_72ixmfw"          // já preenchido
  }
}
```

## Testar

1. Publica o site actualizado (ou substitui só `assets/js/main.js` e
   `contactos.html` no teu alojamento).
2. Em **Contactos**, testa as 4 abas uma a uma.
3. Cada uma deve chegar a `delciobentocunha007@gmail.com` com o assunto e o
   texto exactamente como aparecem na pré-visualização do site.

## Se no futuro precisares de mais de 200 emails/mês ou mais templates

O plano pago mais barato do EmailJS (~$9/mês) já dá 6 templates e mais
volume de envio — nessa altura podes voltar a ter um template por
formulário, se preferires. Por agora, esta solução de 2 templates
partilhados funciona sem custos e sem perder nenhuma informação nos emails.
