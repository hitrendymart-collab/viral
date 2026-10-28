
"use client";

import { useEffect } from "react";

const SMART_LINK =
  "https://www.profitableratecpmnetwork.com/bs53kqygr8?key=86673c8a90f3a1dfc426eea66db81670";

const adKeys = [
  "banner300",
  "skyscraper",
  "banner728",
  "banner320",
  "banner468",
  "vertical160",
] as const;

type AdKey = (typeof adKeys)[number];

type AdScript = {
  key: string;
  src: string;
  width: number;
  height: number;
};

type AdBannerProps = {
  type?: AdKey;
  mobile?: boolean;
};

const AD_SCRIPTS: Record<AdKey, AdScript> = {
  banner300: {
    key: "32306c4a1fb08995ab0b95416f0a575e",
    src: "https://biomanos.org/22/32306c4a1fb08995ab0b95416f0a575e",
    width: 300,
    height: 250,
  },
  skyscraper: {
    key: "19557fc639af84f3a0957fb3c4197872",
    src: "https://biomanos.org/22/19557fc639af84f3a0957fb3c4197872",
    width: 160,
    height: 600,
  },
  banner728: {
    key: "9cddd15eb03ddc3d2a7ee956f121fd57",
    src: "https://www.highrevenueformat.com/9cddd15eb03ddc3d2a7ee956f121fd57/invoke.js",
    width: 728,
    height: 90,
  },
  banner320: {
    key: "324fc6eaa24bdbe9a3a33b7df8aa848d",
    src: "https://www.highrevenueformat.com/324fc6eaa24bdbe9a3a33b7df8aa848d/invoke.js",
    width: 320,
    height: 50,
  },
  banner468: {
    key: "294e864bde558a8467aebcfe4fa7c828",
    src: "https://www.highrevenueformat.com/294e864bde558a8467aebcfe4fa7c828/invoke.js",
    width: 468,
    height: 60,
  },
  vertical160: {
    key: "a503ff881851f4b78ae458bd7de0b192",
    src: "https://www.highrevenueformat.com/a503ff881851f4b78ae458bd7de0b192/invoke.js",
    width: 160,
    height: 300,
  },
};

const AD_SIZES: Record<AdKey, string> = {
  banner300: "300 × 250",
  skyscraper: "160 × 600",
  banner728: "728 × 90",
  banner320: "320 × 50",
  banner468: "468 × 60",
  vertical160: "160 × 300",
};

const downloadOptions = [
  { quality: "1080p", description: "Full HD · Best quality" },
  { quality: "720p", description: "HD · Smooth playback" },
  { quality: "420p", description: "Standard · Smaller file" },
  { quality: "4K UHD", description: "Ultra HD · Highest quality" },
];

function AdBanner({
  type = "banner728",
  mobile = false,
}: AdBannerProps) {
  useEffect(() => {
    const ad = AD_SCRIPTS[type];
    const container = document.getElementById(`ad-${type}`);

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    const options = document.createElement("script");
    options.text = `atOptions = ${JSON.stringify({
      key: ad.key,
      format: "iframe",
      height: ad.height,
      width: ad.width,
      params: {},
    })};`;

    const script = document.createElement("script");
    script.src = ad.src;
    script.async = true;

    container.appendChild(options);
    container.appendChild(script);

    return () => {
      options.remove();
      script.remove();
      delete container.dataset.loaded;
    };
  }, [type]);

  const [width, height] = AD_SIZES[type].split(" × ");

  return (
    <div className={`ad-slot ${mobile ? "mobile-ad" : ""}`}>
      <div className="ad-label">ADVERTISEMENT</div>

      <div
        id={`ad-${type}`}
        className={`ad-content ${type}`}
        style={{
          width: `${width}px`,
          minHeight: `${height}px`,
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

type VideoPageProps = {
  videoPath: string;
};

export default function Page({ videoPath }: VideoPageProps) {
  useEffect(() => {
    const scriptUrls = [
      "https://pl32060441.profitableratecpmnetwork.com/6e/95/2a/6e952a39dbc9f8bd3ae98ab13b65e9e2.js",
      "https://pl32060438.profitableratecpmnetwork.com/58/ef/57/58ef571dc2f6d6f788c1bf9482306edc.js",
    ];

    const scripts = scriptUrls.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <main className="site">
      <div className="container">
        <div className="breadcrumb">Videos</div>

        <div className="page-layout">
          <section className="main-content">
            {/* Video preview */}
            <div className="relative flex aspect-video min-h-[230px] items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-black text-center sm:min-h-[300px] lg:min-h-[340px]">
              <video
                id="previewVideo"
                className="absolute inset-0 h-full w-full bg-black object-contain"
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
              >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/30 to-black/60 pointer-events-none" />

              <button
                id="previewPlay"
                type="button"
                aria-label="Open video link"
                onClick={() => {
                  window.open(
                    SMART_LINK,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="absolute left-1/2 top-1/2 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-0 bg-lime-400 text-xl text-slate-950 shadow-lg transition hover:scale-110 sm:h-16 sm:w-16"
              >
                ▶
              </button>

              <span className="pointer-events-none absolute bottom-3 right-3 z-10 rounded bg-black/75 px-2 py-1 text-[10px] font-bold text-white">
                HD · PREVIEW
              </span>
            </div>

            <div className="section-heading">
              <div>
                <span className="eyebrow">FEATURED VIDEO</span>
                <h2>Watch Preview</h2>
              </div>
              <a  href={SMART_LINK}   className="quality-badge">HD READY</a>
            </div>

            <AdBanner type="banner728" />

            <section className="download-section">
              <span className="eyebrow">CHOOSE YOUR QUALITY</span>
              <h2>Download Video</h2>

              <div className="download-grid">
                {downloadOptions.map((item) => (
                  <a
                    key={item.quality}
                    href={SMART_LINK}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="download-card"
                  >
                    <span className="download-icon">↓</span>
                    <span className="download-text">
                      <strong>Download {item.quality}</strong>
                      <small>{item.description}</small>
                    </span>
                    <span className="download-arrow">↗</span>
                  </a>
                ))}
              </div>
            </section>

            <AdBanner type="banner320" mobile />
            <AdBanner type="banner468" />
            <AdBanner type="banner300" />

            <div className="ad-slot">
              <div className="ad-label">SPONSORED CONTENT</div>
              <div
                id="container-1e06021a3f3ba904a6022be9d983bbb1"
                className="native-ad"
              />
            </div>

            <div className="ad-slot">
              <a
                href={SMART_LINK}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="smart-link"
              >
                Continue to Video ↗
              </a>
            </div>
          </section>

          <aside className="sidebar">
            <AdBanner type="skyscraper" />
            <AdBanner type="vertical160" />
          </aside>
        </div>
      </div>
    </main>
  );
}
