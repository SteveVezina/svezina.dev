import {MDXRemote} from 'next-mdx-remote-client/rsc';
import {CodeBlock} from './code-block';

export function MdxContent({source}:{source:string}){
  return <div className="prose"><MDXRemote source={source} components={{pre: CodeBlock}}/></div>;
}
