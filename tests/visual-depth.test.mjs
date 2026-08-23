import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const read=(path)=>readFile(new URL(`../${path}`,import.meta.url),'utf8');

test('post metadata supports editorial thumbnails',async()=>{
  const posts=await read('lib/posts.mjs');
  const types=await read('lib/posts.ts');
  assert.match(posts,/thumbnail/);
  assert.match(types,/thumbnail:string/);
});

test('post list renders a visual thumbnail',async()=>{
  const list=await read('components/post-list.tsx');
  assert.match(list,/post-thumb/);
  assert.match(list,/thumbnail/);
});

test('essay includes researched security model and visual schema',async()=>{
  const post=await read('content/writing/agents-shouldnt-own-credentials.mdx');
  assert.match(post,/The confused deputy problem/);
  assert.match(post,/Prompt injection changes the credential threat model/);
  assert.match(post,/Vercel Connect/);
  assert.match(post,/OWASP/);
  assert.match(post,/credential-path/);
});
