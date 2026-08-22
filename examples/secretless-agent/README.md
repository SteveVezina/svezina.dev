# Secretless Repo Analyst

A deliberately small Vercel example: inspect a public GitHub repository inside Vercel Sandbox, then generate an architecture briefing through Vercel AI Gateway.

## Production credentials

No model-provider key is required when deployed on Vercel with AI Gateway OIDC enabled. The Sandbox is ephemeral and does not inherit the application's environment by default.

## Local development

For local development, provide an `AI_GATEWAY_API_KEY` or use `vc dev` with a linked project/OIDC setup.
