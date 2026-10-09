export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="ssma-page-hero">
      <div className="ssma-page-hero-inner">
        {eyebrow && <p className="ssma-eyebrow ssma-page-hero-eyebrow">{eyebrow}</p>}
        <h1 className="ssma-page-hero-title">{title}</h1>
        {subtitle && <p className="ssma-page-hero-subtitle">{subtitle}</p>}
        {children && <div className="ssi-cta-row">{children}</div>}
      </div>
    </section>
  )
}
