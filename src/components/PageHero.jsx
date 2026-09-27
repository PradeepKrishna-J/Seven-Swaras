export function PageHero({ image, eyebrow, title, subtitle, children }) {
  return (
    <section className="ssma-page-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(30,27,75,0.55), rgba(30,27,75,0.78)), url(${image})` }}>
      <div className="ssma-page-hero-inner">
        {eyebrow && <p className="ssma-eyebrow ssma-page-hero-eyebrow">{eyebrow}</p>}
        <h1 className="ssma-page-hero-title">{title}</h1>
        {subtitle && <p className="ssma-page-hero-subtitle">{subtitle}</p>}
        {children && <div className="ssi-cta-row">{children}</div>}
      </div>
    </section>
  )
}
