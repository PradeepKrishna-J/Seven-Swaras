import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SCROLL_TARGET_KEY = 'ss_scroll_target'

/**
 * Returns a function that scrolls to a section id on the home page.
 * If called from a route other than "/", it navigates home first and
 * stashes the target id so HomePage can pick it up after it mounts.
 */
export function useSectionNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return useCallback((id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem(SCROLL_TARGET_KEY, id)
      navigate('/')
    }
  }, [location.pathname, navigate])
}
