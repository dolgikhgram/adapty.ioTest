import './FeaturesQuotesSection.css';

const FeaturesQuotesSection = () => {
  const features = [
    {
      heading: 'Тестируйте пейволлы без релизов приложения',
      desc: 'Управляйте пейволлами, таргетируйте их, локализуйте и персонализируйте не выходя из браузера.',
      btnText: 'Больше про A/B-тесты',
      btnHref: 'https://adapty.io/ru/paywall-ab-testing/',
      imageSrc: 'https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp',
      imageAlt: 'Paywall A/B testing',
      layout: 'default',
      quote: {
        logo: 'https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png',
        logoAlt: 'Logo Smartist Black',
        appRowClass: 'quote-white-block__app app-row--alt',
        message: '«Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения».',
        authorName: 'Ильгар Тали',
        authorPosition: 'Основатель и директор по позиционированию',
        authorAvatar: 'https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp'
      }
    },
    {
      heading: 'Сократите ставку возврата на 40%',
      desc: 'Перестаньте терять доход из-за возвратов – Adapty автоматически делится данными о действиях пользователей с Apple для запросов на возврат и уменьшает их.',
      btnText: 'Настройка Refund Saver',
      btnHref: 'https://adapty.io/ru/refund-saver/',
      imageSrc: 'https://adapty.io/assets/uploads/2025/05/refund-rate@2x-768x576.webp',
      imageAlt: 'Refund Rate',
      layout: 'revert',
      quote: {
        appName: 'Fotorama',
        appDesc: 'Фото и видео',
        message: '"Я никогда не думала, что возврат денег может иметь такое значение. Мы просто щелкнули выключателем, настроили его, и вдруг нам показалось, что мы перестали позволять деньгам ускользать".',
        authorName: 'Берк Чагатай Албайрак',
        authorPosition: 'Старший менеджер по продуктам',
        authorAvatar: 'https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp'
      }
    },
    {
      heading: 'Смотрите показатели подписок в любой момент',
      desc: 'Следите за экономикой приложения в реальном времени, используя готовую систему аналитики с более чем 20 показателями.',
      btnText: 'Больше об аналитике',
      btnHref: 'https://adapty.io/ru/ltv-analytics/',
      imageSrc: 'https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp',
      imageAlt: 'App Monetization Strategies',
      layout: 'default',
      quote: {
        appName: 'Moonly',
        appDesc: 'Лунный календарь',
        message: '«Аналитика Adapty предоставляет неоценимые сведения об успешности нашего приложения. Благодаря подробным показателям дохода, оттока и ARPU, мы принимаем обоснованные решения для оптимизации нашей финансовой стратегии.»',
        authorName: 'Николай Чеботарев',
        authorPosition: 'Руководитель UA в Moonly.app',
        authorAvatar: 'https://adapty.io/assets/uploads/2024/02/Nikolay.png'
      }
    },
    {
      heading: 'Конструктор пейволлов',
      desc: 'Создавайте красивые нативные пейволлы для iOS, Android, Flutter и React Native без единой строчки кода.',
      btnText: 'Больше о создании пейволлов',
      btnHref: 'https://adapty.io/ru/paywall-builder/',
      imageSrc: 'https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp',
      imageAlt: 'No Code Paywall Builder',
      layout: 'revert',
      quote: {
        appName: 'Moodworks Inc',
        appDesc: 'Здоровье',
        logo: 'https://adapty.io/assets/uploads/2024/02/app-icon-cat.png',
        logoAlt: 'Moodworks Inc App Icon',
        message: '«Конструктор пейволлов и инструменты A/B-тестирования Adapty в сочетании друг с другом — это революция для всех, кто пытается проводить много тестов и находить быстрые выигрышные решения.»',
        authorName: 'Майк МакСуини',
        authorPosition: 'Директор по продукту',
        authorAvatar: 'https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp'
      }
    },
    {
      heading: 'Быстро увеличьте доход от приложения с помощью веб-воронок',
      desc: 'Создавайте и запускайте веб-воронки для приложений, интегрируйте платежи, оптимизируйте с помощью A/B-тестирования и развивайтесь по всему миру — всё в одной платформе, без необходимости в программировании.',
      btnText: 'Познакомьтесь с FunnelFox',
      btnHref: 'https://funnelfox.com/',
      imageSrc: 'https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x-768x631.webp',
      imageAlt: 'FunnelFox',
      layout: 'default',
      quote: null
    },
    {
      heading: 'Синхронизируйте данные о покупках с другими сервисами',
      desc: 'Отправляйте подписочные события в сервисы аналитики и атрибуции.',
      btnText: 'Больше об интеграциях',
      btnHref: 'https://adapty.io/ru/integrations/',
      imageSrc: 'https://adapty.io/assets/uploads/2023/12/adapty-logo-white.svg',
      imageAlt: 'Adapty',
      layout: 'revert',
      quote: {
        logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png',
        logoAlt: 'Bickster Logo',
        message: '«У них есть отличный внешний API, который позволяет легко передавать связанные события в другие инструменты аналитики, такие как Amplitude и Mixpanel.»',
        authorName: 'Крис Бик',
        authorPosition: 'Основатель и генеральный директор',
        authorAvatar: 'https://adapty.io/assets/uploads/2024/01/avatar-chris-bick.webp'
      }
    }
  ];

  return (
    <section className="features-quotes-section" id="features">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`features-quotes ${feature.layout === 'revert' ? 'features-quotes--revert' : ''}`}
        >
          <div className="features-quotes__content">
            <h3 className="features-quotes__heading">{feature.heading}</h3>
            <div className="features-quotes__desc">{feature.desc}</div>
            <a
              href={feature.btnHref}
              className="features-quotes__btn btn-link bricks-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {feature.btnText}
            </a>
            {feature.quote && (
              <div className="quote-block features-quotes__quote">
                {(feature.quote.appName || feature.quote.logo) && (
                  <div className={`quote-block__app app-row ${feature.quote.appRowClass || ''}`}>
                    {feature.quote.appName ? (
                      <>
                        <div className="app-row__name">{feature.quote.appName}</div>
                        {feature.quote.appDesc && (
                          <div className="app-row__desc">{feature.quote.appDesc}</div>
                        )}
                      </>
                    ) : feature.quote.logo ? (
                      <img
                        src={feature.quote.logo}
                        alt={feature.quote.logoAlt || 'App Logo'}
                        className="app-row__logo"
                        decoding="async"
                        loading="eager"
                      />
                    ) : null}
                  </div>
                )}
                <div className="quote-block__message">{feature.quote.message}</div>
                <div className="quote-block__author">
                  {feature.quote.authorAvatar && (
                    <img
                      src={feature.quote.authorAvatar}
                      alt={feature.quote.authorName}
                      className="quote-block__author-avatar"
                      decoding="async"
                      loading="eager"
                    />
                  )}
                  <div className="quote-block__author-info">
                    <div className="quote-block__author-name">{feature.quote.authorName}</div>
                    <div className="quote-block__author-position">{feature.quote.authorPosition}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {feature.imageSrc && (
            <div className="features-quotes__image">
              <img
                src={feature.imageSrc}
                alt={feature.imageAlt || ''}
                className="features-quotes__img"
                decoding="async"
                loading="eager"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FeaturesQuotesSection;

