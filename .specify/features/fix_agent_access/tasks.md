# Tasks: Fix Agent Access (CONCLUÍDO)

- [x] Task 1: Update `server/src/agent/openai.js` Profile Query.
  - Adicionado `approval_status` no `select`.
  - Melhorado para normalizar o telefone do banco antes de comparar.
- [x] Task 2: Implement Admin Bypass & Approval Check in `openai.js`.
  - Se `currentUser.role === 'admin'`, acesso total garantido.
  - Se `currentUser.approval_status !== 'approved'`, retorna mensagem amigável solicitando aprovação.
- [x] Task 3: Update `server/src/routes/uazapi.js` for Webhook consistency.
  - Atualizado para garantir que Admins passem pelo filtro inicial de `only_collaborators`.
  - Adicionado check de `approved` no webhook.
- [ ] Task 4: Test and Verify.
  - O Igor (Admin) deve conseguir falar com o agente agora, mesmo com o ajuste de prefixo `55`.
