import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('homepage exposes the editorial thesis and topic rail', async () => {
  const page = await read('app/page.tsx');
  assert.match(page, /Systems for software that can act/);
  assert.match(page, /Agent infrastructure/);
  assert.match(page, /Identity/);
  assert.match(page, /Sandboxes/);
});

test('first essay makes the demo a primary call to action', async () => {
  const post = await read('content/writing/agents-shouldnt-own-credentials.mdx');
  assert.match(post, /Deploy the experiment/);
  assert.match(post, /public GitHub repository/);
  assert.match(post, /Vercel Sandbox/);
  assert.match(post, /AI Gateway/);
});

test('article stylesheet contains demo and thesis treatments', async () => {
  const css = await read('app/globals.css');
  assert.match(css, /\.topic-rail/);
  assert.match(css, /\.prose a\[href\*="vercel\.com\/new\/clone"\]/);
  assert.match(css, /\.prose blockquote/);
});
