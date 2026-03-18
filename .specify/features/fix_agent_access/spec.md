# Feature Specification: Fix Agent Access (Approval & Admin)

## Overview
Problem: O agente não está respondendo a usuários, mesmo que sejam administradores e estejam aprovados.
Context:
- Igor (Admin) calls logic from `openai.js`.
- The `currentUser` identification fails because of phone matching issues.
- The `approval_status` check is missing in the brain's logic.

## Technical Requirements
1. **Phone Matching**: Use a loose matching strategy for Brazilian phones in `openai.js` (ILike filter or better normalization).
2. **Access Control**:
   - If user is `role: admin`, ignore `approval_status`.
   - If user is `role: collaborator`, only allow if `approval_status === 'approved'`.
   - Update `profiles` select to include `approval_status`.
3. **Webhook consistency**: Update `uazapi.js` to also check `approval_status` if `only_collaborators` is active.
