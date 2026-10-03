import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SITE_NAME } from './seo.js'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets the document title, meta description and canonical/OG tags for the
 * current route. Each page calls this with its own unique title+description
 * so every URL is independently indexable instead of sharing the one static
 * <title>/<meta> from index.html.
 */
export function useSeo({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const url = `${SITE_URL}${location.pathname}`

    document.title = fullTitle
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertLink('canonical', url)
  }, [title, description, location.pathname])
}
