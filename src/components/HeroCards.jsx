import { HERO_CARD_IDS, HERO_CARD_MEDIA } from '../i18n/media.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function HeroCards() {
  const { t } = useLanguage()

  return (
    <div className="hero__cards">
      {HERO_CARD_IDS.map((id, index) => (
        <article
          key={id}
          className="hero__card"
          data-hero="card"
          data-hero-animate
          style={{ '--card-i': index }}
        >
          <div className="hero__card-media">
            <img
              src={HERO_CARD_MEDIA[id].image}
              alt=""
              className="hero__card-image"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <div className="hero__card-media-overlay" aria-hidden="true" />
          </div>
          <div className="hero__card-body">
            <h3 className="hero__card-title">{t(`hero.cards.${id}`)}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}
