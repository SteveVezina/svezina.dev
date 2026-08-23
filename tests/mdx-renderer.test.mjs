import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('blog uses the React 19 compatible RSC MDX renderer', async () => {
  const pkg = JSON.parse(await read('package.json'));
  const renderer = await read('components/mdx-content.tsx');

  assert.equal(pkg.dependencies['next-mdx-remote-client'], '2.1.12');
  assert.equal(pkg.dependencies['next-mdx-remote'], undefined);
  assert.match(renderer, /next-mdx-remote-client\/rsc/);
});
