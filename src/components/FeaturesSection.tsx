import './FeaturesSection.css';

const FeaturesSection = () => {
  const cards = [
    {
      href: 'https://adapty.io/ru/for-developers/',
      image: {
        src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
        alt: 'Card Cover Sdk Install',
      },
      title: 'Для разработчиков',
      features: [
        'Подписки SDK',
        'Сбережение на возвратах',
        'Удалённая конфигурация',
        'Резервные пейволлы',
      ],
    },
    {
      href: 'https://adapty.io/ru/for-app-owners/',
      image: {
        src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
        alt: 'Card Cover Charts',
      },
      title: 'Для владельцев',
      features: [
        'Аналитика доходов',
        'Аналитика LTV',
        'Прогнозы ИИ для LTV и доходов',
      ],
    },
    {
      href: 'https://adapty.io/ru/for-marketers/',
      image: {
        src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
        alt: 'Card Cover Paywalls',
      },
      title: 'Для маркетологов',
      features: [
        'A/B тестирование',
        'Конструктор без кода',
        'Локализации',
        'Ориентирование',
      ],
    },
  ];

  const counters = [
    {
      type: 'simple',
      prefix: '$',
      count: '2',
      suffix: 'млрд.',
      text: 'обрабатываемого дохода',
    },
    {
      type: 'decimal',
      count1: '99',
      decimal: '.',
      count2: '99',
      suffix: '%',
      text: 'времени безотказной работы',
    },
    {
      type: 'decimal',
      count1: '2',
      decimal: '.',
      count2: '5',
      suffix: 'млрд.',
      text: 'обслуживаемых пользователей',
    },
    {
      type: 'simple',
      count: '60',
      suffix: 'млрд.',
      text: 'обращений к API / месяц',
    },
  ];

  return (
    <section className="features-section" id="help">
      <div className="features-container">
        <h2 className="features-title">
          Управляйте своим подписочным бизнесом. Быстрее и дешевле.
        </h2>

        <div className="features-cards">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="feature-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={card.image.src}
                alt={card.image.alt}
                className="feature-card-image"
                decoding="async"
                loading="eager"
              />
              <div className="feature-card-content">
                <div className="feature-card-title-wrapper">
                  <h3 className="feature-card-title">{card.title}</h3>
                  <img
                    src="https://adapty.io/assets/uploads/2025/02/icon-arrow-acute-angle-pink.svg"
                    alt="Arrow"
                    className="feature-card-arrow"
                  />
                </div>
                <div className="feature-card-features">
                  {card.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <h2 className="features-title features-title-secondary">
          Adapty обрабатывает доход от подписок с самым высоким SLA уровнем в индустрии
        </h2>

        <div className="features-counters" id="brxe-odxuty">
          {counters.map((counter, index) => (
            <div key={index} className="feature-counter">
              <div className="counter-hard-value">
                {counter.type === 'simple' ? (
                  <div className="counter-value">
                    {counter.prefix && <span className="prefix">{counter.prefix}</span>}
                    <span className="count">{counter.count}</span>
                    <span className="suffix">{counter.suffix}</span>
                  </div>
                ) : (
                  <>
                    <div className="counter-value">
                      <span className="count">{counter.count1}</span>
                    </div>
                    <div className="counter-value counter-value-decimal">{counter.decimal}</div>
                    <div className="counter-value">
                      <span className="count">{counter.count2}</span>
                      <span className="suffix">{counter.suffix}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="counter-caption">{counter.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

