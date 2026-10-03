import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom'
import { BLOG_POSTS } from '../data.js'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'
import { SITE_URL, SITE_NAME } from '../seo.js'

export default function BlogArticlePage() {
  const { slug } = useParams()
  const { onBookDemo } = useOutletContext()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useSeo({
    title: post ? post.title : 'Blog',
    description: post ? post.excerpt : undefined,
  })

  if (!post) return <Navigate to="/blog" replace />

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: post.title }]} />

      <PageHero image={post.heroImage} eyebrow={post.tag} title={post.title} subtitle={`Seven Swaras Music Academy · ${post.readTime}`} />

      <section className="ssma-section">
        <article className="ssma-article">
          <div className="ssma-article-body">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          <div className="ssma-article-foot">
            <button className="ssma-btn ssma-btn-amber" onClick={() => onBookDemo()}>Book a FREE Demo</button>
          </div>
        </article>
      </section>

      <section className="ssma-section ssma-section-tint">
        <div className="ssma-section-head">
          <h2>More From the Blog</h2>
        </div>
        <div className="ssma-related-row">
          {related.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="ssma-chip">{p.title}</Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
