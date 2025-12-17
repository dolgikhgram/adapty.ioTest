import './TrustSection.css';

const TrustSection = () => {
  const logos = [
    {
      src: 'https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg',
      alt: 'Feeld',
    },
    {
      src: 'https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg',
      alt: 'Bumble',
    },
    {
      src: 'https://adapty.io/assets/uploads/2025/02/weewoo.svg',
      alt: 'WeeWoo',
    },
    {
      src: 'https://adapty.io/assets/uploads/2025/02/AppNation.webp',
      alt: 'AppNation',
    },
    {
      src: 'https://adapty.io/assets/uploads/2025/02/almus.svg',
      alt: 'Almus',
    },
    {
      src: 'https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg',
      alt: 'Impala Studios',
    },
    {
      src: 'https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg',
      alt: 'HUBX',
    },
  ];

  return (
    <section className="trust-section" id="apps">
      <div className="trust-container" id="brxe-nualzc">
        <h2 className="trust-title" id="brxe-hdrvbb">
          Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
        </h2>
        <div className="trust-apps">
          {logos.map((logo, index) => (
            <div key={index} className="trust-app">
              <img
                src={logo.src}
                alt={logo.alt}
                className="trust-icon"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

