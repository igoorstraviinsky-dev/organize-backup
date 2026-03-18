# Implementation Plan: Fix Agent Access

## Summary
Correct the profile matching logic in `openai.js` and add check for `approval_status`. Ensure that `admin` role bypasses approval, while `collaborator` requires it.

## Changes:
1. **Server (`server/src/agent/openai.js`)**:
   - Update `profiles` select to include `approval_status`.
   - Update `currentUser` identification to be more robust (maybe use a helper function).
   - Add the check for `approval_status !== 'approved'` if role is not `admin`.
   - Return a specific message if user exists but is NOT approved yet.
2. **Webhook (`server/src/routes/uazapi.js`)**:
   - Update the `isCollaborator` check to also check for `approval_status === 'approved'` or `role === 'admin'`.

## Verification:
- Send message from Admin account (should work even if not approved, though typically they are).
- Send message from Approved collaborator (should work).
- Send message from Pending collaborator (should receive the "Aguardando aprovação" message).
