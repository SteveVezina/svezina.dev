import Link from 'next/link';
import {Container} from '@/components/container';
import {PostList} from '@/components/post-list';
import {getPublishedPosts} from '@/lib/posts';

const topics = ['Agent infrastructure', 'Identity', 'Gateways', 'Sandboxes', 'Distributed systems'];

export default async function Home(){
  const posts=await getPublishedPosts();
  return <Container>
    <section className="page hero">
      <div className="eyebrow">Steve Vezina · field notes</div>
      <h1 className="page-title">Systems for software that can act.</h1>
      <p className="page-deck">Engineering notes on the trust boundaries, runtimes, and infrastructure behind useful AI agents.</p>
      <div className="topic-rail" aria-label="Topics">{topics.map(topic=><span key={topic}>{topic}</span>)}</div>
    </section>
    <section className="section latest-section">
      <div className="section-head"><div><div className="eyebrow">From the notebook</div><h2>Latest writing</h2></div><Link className="meta" href="/writing">All writing →</Link></div>
      <PostList posts={posts}/>
    </section>
  </Container>
}
