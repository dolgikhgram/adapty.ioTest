import './HeroSection.css';

const HeroSection = () => {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Email submitted:', email);
  };

  return (
    <section className="hero-section" id="hello">
      <div className="hero-container" id="hero-container">
        <div className="hero-content" id="hero-content">
          <a
            className="promo-banner"
            href="https://adapty.io/ru/ebooks/100k-app-playbook/"
            target="_blank"
            rel="noopener noreferrer"
            id="promotion-banner"
          >
            <span className="promo-banner-text">Гайд</span>
            <span className="promo-banner-link">
              Как вырасти до $100K | Скачать
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <h1 className="hero-title text-gradient-anim" id="adapty-slogan">
            Платформа для роста мобильных приложений
          </h1>

          <div className="hero-subtitle" id="page-subtitle">
            Сэкономьте месяцы на внедрении подписок и удвойте доход от приложения благодаря
            эффективному управлению пейволлами.
          </div>

          <div className="hero-actions">
            <form className="email-form" onSubmit={handleEmailSubmit}>
              <div className="input-wrapper">
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  required
                  placeholder="Email адрес"
                  inputMode="email"
                  autoComplete="email"
                  className="email-input"
                />
                <button type="submit" className="start-button">
                  Начать
                </button>
              </div>
            </form>

            <a
              className="demo-button"
              href="https://adapty.io/ru/schedule-demo/"
              id="hero-demo-btn"
            >
              Запись на демо
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-media" id="hero-media">
          <picture className="hero-image-wrapper" id="creative-image">
            <source
              media="(max-width: 358px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@1x.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 432px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@1.5x.webp"
              type="image/webp"
            />
            <source
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
              type="image/webp"
            />
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
              alt="Adapty Paywall Demo Preview"
              className="hero-image"
              decoding="async"
              draggable="false"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <picture className="hero-image-wrapper hero-image-overview" id="creative-overview">
            <source
              media="(max-width: 432px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-overview@1x.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 575px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp"
              type="image/webp"
            />
            <source
              media="(max-width: 991px)"
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp"
              type="image/webp"
            />
            <source
              srcSet="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
              type="image/webp"
            />
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
              alt="Adapty Overview"
              className="hero-image"
              decoding="async"
              draggable="false"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

