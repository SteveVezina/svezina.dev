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

test('fenced MDX code blocks use the shared copyable code block renderer', async () => {
  const renderer = await read('components/mdx-content.tsx');
  const codeBlock = await read('components/code-block.tsx');

  assert.match(renderer, /import \{CodeBlock\} from ['\"]\.\/code-block['\"]/);
  assert.match(renderer, /components=\{\{pre: CodeBlock\}\}/);
  assert.match(codeBlock, /navigator\.clipboard\.writeText/);
  assert.match(codeBlock, /aria-label=['\"]Copy code['\"]/);
  assert.match(codeBlock, /Copied/);
});
