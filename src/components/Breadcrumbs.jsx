import { Link } from 'react-router-dom'
import { SITE_URL } from '../seo.js'

/**
 * items: [{ label, to }, ...] — the last item is the current page and
 * should be passed WITHOUT a `to` (rendered as plain text, not a link).
 */
export function Breadcrumbs({ items }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: `${SITE_URL}${item.to}` } : {}),
    })),
  }

  return (
    <nav className="ssma-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i}>
              {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>}
              {!isLast && <span className="ssma-breadcrumb-sep" aria-hidden="true">/</span>}
            </li>
          )
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  )
}
