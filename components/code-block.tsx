'use client';

import {useRef, useState, type ComponentPropsWithoutRef} from 'react';

export function CodeBlock(props: ComponentPropsWithoutRef<'pre'>) {
  const {children, className, ...rest} = props;
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    const code = preRef.current?.innerText ?? '';
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="code-block">
      <button
        type="button"
        className="code-copy-button"
        aria-label="Copy code"
        onClick={copyCode}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre ref={preRef} className={className} {...rest}>
        {children}
      </pre>
    </div>
  );
}
