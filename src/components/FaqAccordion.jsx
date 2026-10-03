import { useState } from 'react'

export function FaqAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="ssma-faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`ssma-faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
            <button
              className="ssma-faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="ssma-faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="ssma-faq-answer">
              <div className="ssma-faq-answer-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
