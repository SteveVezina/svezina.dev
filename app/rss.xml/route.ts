import { getPublishedPosts } from '@/lib/posts';

const SITE_URL = 'https://svezina.dev';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const posts = await getPublishedPosts();

  const items = posts.map((post) => {
    const url = `${SITE_URL}/writing/${post.slug}`;
    return `\n    <item>\n      <title>${escapeXml(post.title)}</title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>\n      <description>${escapeXml(post.description)}</description>\n    </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>svezina.dev</title>\n    <link>${SITE_URL}</link>\n    <description>Notes on agent infrastructure, distributed systems, and the infrastructure behind AI.</description>\n    <language>en</language>${items}\n  </channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
