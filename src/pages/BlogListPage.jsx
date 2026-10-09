import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '../data.js'
import { Breadcrumbs } from '../components/Breadcrumbs.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useSeo } from '../useSeo.js'

export default function BlogListPage() {
  useSeo({
    title: 'Blog',
    description: 'Notes on learning music, choosing your first instrument, and life at Seven Swaras Music Academy.',
  })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />

      <PageHero
        eyebrow="Blog"
        title="From Our Blog"
        subtitle="Notes on our academy and the instruments we offer."
      />

      <section className="ssma-section">
        <div className="ssma-blog-grid">
          {BLOG_POSTS.map((post) => (
            <Link className="ssma-blog-card" to={`/blog/${post.slug}`} key={post.slug}>
              <span className="ssma-pill ssma-blog-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="ssma-blog-foot">
                <span>{post.readTime}</span>
                <span>Continue Reading →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
