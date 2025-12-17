import { useState } from 'react';
import './CodeSection.css';

const CodeSection = () => {
  const [activeTab, setActiveTab] = useState('Swift');

  const tabs = [
    { id: 'Swift', label: 'Swift' },
    { id: 'Kotlin', label: 'Kotlin' },
    { id: 'React Native', label: 'React Native' },
    { id: 'Flutter', label: 'Flutter' },
    { id: 'Unity', label: 'Unity' },
  ];

  const codeExamples: Record<string, string> = {
    Swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
  
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    Kotlin: `// Your app's code
import com.adapty.Adapty

Adapty.activate(context, "PUBLIC_SDK_KEY") { result ->
    result.onSuccess {
        // Make a purchase, Adapty handles the rest
        Adapty.makePurchase(context, product) { purchaseResult ->
            purchaseResult.onSuccess {
                // successful purchase
            }
        }
    }
}`,
    'React Native': `// Your app's code
import Adapty from 'react-native-adapty';

await Adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
const purchaseResult = await Adapty.makePurchase(product);
// successful purchase`,
    Flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
final purchaseResult = await Adapty.makePurchase(product);
// successful purchase`,
    Unity: `// Your app's code
using AdaptySDK;

Adapty.Activate("PUBLIC_SDK_KEY", (error) => {
    if (error == null) {
        // Make a purchase, Adapty handles the rest
        Adapty.MakePurchase(product, (purchaseResult, error) => {
            // successful purchase
        });
    }
});`,
  };

  const githubLinks: Record<string, string> = {
    Swift: 'https://github.com/adaptyteam/AdaptySDK-iOS',
    Kotlin: 'https://github.com/adaptyteam/AdaptySDK-Android',
    'React Native': 'https://github.com/adaptyteam/AdaptySDK-React-Native',
    Flutter: 'https://github.com/adaptyteam/AdaptySDK-Flutter',
    Unity: 'https://github.com/adaptyteam/AdaptySDK-Unity',
  };

  const sdkPlatforms = [
    {
      name: 'Swift SDK',
      href: 'https://adapty.io/ru/sdk/ios/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-swift-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-swift-outline.svg',
      ariaLabel: 'Swift SDK',
    },
    {
      name: 'Kotlin SDK',
      href: 'https://adapty.io/ru/sdk/android/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-kotlin-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-kotlin-outline.svg',
      ariaLabel: 'Kotlin SDK',
    },
    {
      name: 'React Native SDK',
      href: 'https://adapty.io/ru/sdk/react-native/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-react-native-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-react-native-outline.svg',
      ariaLabel: 'React Native SDK',
    },
    {
      name: 'Unity SDK',
      href: 'https://adapty.io/ru/sdk/unity/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-unity-white-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-unity-outline.svg',
      ariaLabel: 'Unity SDK',
    },
    {
      name: 'Capacitor SDK',
      href: 'https://adapty.io/ru/sdk/capacitor/',
      icon: 'https://adapty.io/assets/uploads/2025/10/capacitor-logo.svg',
      pattern: 'https://adapty.io/assets/uploads/2025/10/capacitor-stroke-gradient-logo.webp',
      ariaLabel: 'Capacitor SDK',
    },
    {
      name: 'Kotlin Multiplatform',
      href: 'https://adapty.io/ru/sdk/kmp/',
      icon: 'https://adapty.io/assets/uploads/2025/10/kmp-logo.svg',
      pattern: 'https://adapty.io/assets/uploads/2025/10/kmp-stroke-gradient-logo.webp',
      ariaLabel: 'Kotlin Multiplatform (KMP) SDK',
    },
    {
      name: 'Flutter SDK',
      href: 'https://adapty.io/ru/sdk/flutter/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-flutter-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-flutter-outline.svg',
      ariaLabel: 'Flutter SDK',
    },
    {
      name: 'FlutterFlow',
      href: 'https://adapty.io/ru/sdk/flutterflow/',
      icon: 'https://adapty.io/assets/uploads/2024/09/icon-flutterflow-64x64-1.svg',
      pattern: 'https://wp-prod-new.adapty.io/assets/uploads/2024/09/icon-flutterflow-outline.svg',
      ariaLabel: 'FlutterFlow',
    },
    {
      name: 'Web API',
      href: 'https://adapty.io/ru/sdk/web/',
      icon: 'https://adapty.io/assets/uploads/2024/01/icon-web-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/01/icon-web-outline.svg',
      ariaLabel: 'Web API',
    },
    {
      name: 'Stripe',
      href: 'https://adapty.io/ru/integrations/stripe/',
      icon: 'https://adapty.io/assets/uploads/2024/02/icon-stripe-64x64-1.svg',
      pattern: 'https://adapty.io/assets/uploads/2024/02/icon-stripe-outline.svg',
      ariaLabel: 'Stripe Integrations',
    },
  ];

  return (
    <>
      {/* Code Section */}
      <section className="code-section" id="code">
        <div className="code-container">
          <h2 className="code-heading">
            Интегрируйте покупки в приложении с помощью нескольких строк кода
          </h2>
          
          <div className="code-top-content">
            <div className="code-description">
              Интегрируйте IAP за несколько часов без серверного кодирования с помощью простого и удобного SDK. А дальше, Adapty будет управлять работой и состоянем каждой вашей подписки – от активации, до возврата.
            </div>
            <a
              href="https://adapty.io/ru/sdk/"
              className="code-integration-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Быстрая интеграция
            </a>
          </div>

          <div className="code-quote-and-editor">
            <div className="code-quote-content">
              <div className="code-quote-block">
                <img
                  src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp"
                  alt="Smitten"
                  className="quote-logo"
                  decoding="async"
                  loading="eager"
                />
                <div className="quote-message">
                  «С SDK Adapty, добавить покупки в приложение оказалось проще простого. С помощью всего нескольких строк кода я смог без проблем добавить подписки как для iOS, так и для Android.»
                </div>
                <div className="quote-author">
                  <img
                    src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                    alt="Magnus Olafsson Smitten"
                    className="quote-author-avatar"
                    decoding="async"
                    loading="eager"
                  />
                  <div className="quote-author-info">
                    <div className="quote-author-name">Магнус Олафссон</div>
                    <div className="quote-author-position">Главный технический директор в Smitten</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="code-editor-media">
              <div className="code-tabs-container">
                <div className="code-tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`code-tab ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="code-block-wrapper">
                  <pre className="code-block">
                    <code>{codeExamples[activeTab]}</code>
                  </pre>
                </div>
                <div className="code-footer">
                  <div className="code-footer-text">100% Open Source</div>
                  <a
                    href={githubLinks[activeTab]}
                    className="code-footer-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Platforms Section */}
      <section className="sdk-section" id="sdk">
        <div className="sdk-container">
          <h2 className="sdk-heading">Установите SDK для своей платформы</h2>
          <div className="sdk-grid">
            {sdkPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                className="sdk-item"
                aria-label={platform.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  '--pattern-image': platform.pattern ? `url("${platform.pattern}")` : 'none',
                } as React.CSSProperties & { '--pattern-image': string }}
              >
                <figure className="sdk-logo">
                  <img
                    src={platform.icon}
                    alt={`${platform.name} Icon`}
                    className="sdk-icon"
                    aria-hidden="true"
                    decoding="async"
                    loading="eager"
                  />
                </figure>
                <div className="sdk-label">
                  <h3 className="sdk-title">{platform.name}</h3>
                  <img
                    src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-violet-400__16x16-size.svg"
                    alt="Small arrow: right (violet 400) [16x16]"
                    className="sdk-arrow-icon"
                    aria-hidden="true"
                    decoding="async"
                    loading="eager"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CodeSection;

