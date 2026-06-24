const CARDS = [
  {
    title: 'Construction',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Logistics',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Supply chain',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Operations',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
]

export default function HeroCards() {
  return (
    <div className="hero__cards">
      {CARDS.map((card, index) => (
        <article
          key={card.title}
          className="hero__card"
          data-hero="card"
          data-hero-animate
          style={{ '--card-i': index }}
        >
          <div className="hero__card-media">
            <img
              src={card.image}
              alt=""
              className="hero__card-image"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <div className="hero__card-media-overlay" aria-hidden="true" />
          </div>
          <div className="hero__card-body">
            <h3 className="hero__card-title">{card.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}
