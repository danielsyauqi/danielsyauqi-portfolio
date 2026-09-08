<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project scope for generated guidance

This project-specific section controls the scope of the generated block above and is
outside its managed markers so framework regeneration preserves it.

- The documentation prerequisite applies to framework-sensitive changes: routing,
  rendering/caching, server/client boundaries, configuration and Next APIs. It does not
  require prereading for copy, ordinary styling, unrelated code or instruction edits.
- Resolve the installed Next package and version from this application directory.
  Read only the relevant local guide when node_modules/next/dist/docs is present.
  If absent, use the matching version's official Next.js docs; do not install dependencies
  merely to obtain documentation or assume the latest docs match this checkout.
- Preserve the existing stack, design language and runtime for scoped changes.
  Run relevant safe checks and report gaps; instruction-only edits need document/diff checks.
- Keep this section outside BEGIN/END:nextjs-agent-rules. Do not patch node_modules or
  repeatedly rewrite the generator-owned block to maintain these project rules.
