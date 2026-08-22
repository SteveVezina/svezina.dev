export type PostMeta={slug:string;title:string;description:string;date:string;status:string;tags:string[];readingMinutes:number}; export type Post={meta:PostMeta;source:string};
// @ts-expect-error local ESM module intentionally has no declaration file
import * as impl from './posts.mjs'; export const getPublishedPosts=impl.getPublishedPosts as()=>Promise<PostMeta[]>; export const getPost=impl.getPost as(slug:string)=>Promise<Post|null>; export const getPostSlugs=impl.getPostSlugs as()=>Promise<string[]>;
