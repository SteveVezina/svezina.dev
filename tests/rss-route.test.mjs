import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const route = await readFile(new URL('../app/rss.xml/route.ts', import.meta.url), 'utf8').catch(() => '');

test('rss route exists and emits RSS XML from published posts', () => {
  assert.match(route, /getPublishedPosts/);
  assert.match(route, /application\/rss\+xml/);
  assert.match(route, /<rss version="2\.0">/);
  assert.match(route, /https:\/\/svezina\.dev\/writing\//);
});
