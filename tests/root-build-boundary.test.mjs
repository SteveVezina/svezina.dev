import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('root TypeScript build excludes nested examples', async () => {
  const raw = await readFile(new URL('../tsconfig.json', import.meta.url), 'utf8');
  const config = JSON.parse(raw);
  assert.ok(config.exclude?.includes('examples'));
});
