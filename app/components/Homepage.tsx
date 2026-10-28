
"use client";

import React, { useEffect } from "react";

const SMART_LINK =
  "https://www.profitableratecpmnetwork.com/bs53kqygr8?key=86673c8a90f3a1dfc426eea66db81670";

type AdType =
  | "banner300"
  | "skyscraper"
  | "banner728"
  | "banner320"
  | "banner468"
  | "vertical160";

type AdConfig = {
  key: string;
  src: string;
  width: number;
  height: number;
};

type AdBannerProps = {
  type?: AdType;
  mobile?: boolean;
};

const adScripts: Record<AdType, AdConfig> = {
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

function AdBanner({
  type = "banner728",
  mobile = false,
}: AdBannerProps) {
  const ad = adScripts[type];

  useEffect(() => {
    const container = document.getElementById(`ad-${type}`);

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    const optionsScript = document.createElement("script");

    optionsScript.text = `atOptions = ${JSON.stringify({
      key: ad.key,
      format: "iframe",
      height: ad.height,
      width: ad.width,
      params: {},
    })};`;

    const adScript = document.createElement("script");
    adScript.src = ad.src;
    adScript.async = true;

    container.appendChild(optionsScript);
    container.appendChild(adScript);

    return () => {
      optionsScript.remove();
      adScript.remove();
      container.replaceChildren();
      delete container.dataset.loaded;
    };
  }, [type, ad]);

  return (
    <div className={`ad-slot ${mobile ? "mobile-ad" : ""}`}>
      <div className="ad-label">ADVERTISEMENT</div>

      <div
        id={`ad-${type}`}
        className={`ad-content ${type}`}
        style={{
          width: `${ad.width}px`,
          minHeight: `${ad.height}px`,
          maxWidth: "100%",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

const downloadOptions = [
  {
    quality: "1080p",
    description: "Full HD · Best quality",
  },
  {
    quality: "720p",
    description: "HD · Smooth playback",
  },
  {
    quality: "420p",
    description: "Standard · Smaller file",
  },
  {
    quality: "4K UHD",
    description: "Ultra HD · Highest quality",
  },
];

export default function Page({
  imagePath,
}: {
  imagePath: string;
}) {
  useEffect(() => {
    // Popunder advertisement script
    const popunder = document.createElement("script");

    popunder.src =
      "https://pl32060441.profitableratecpmnetwork.com/6e/95/2a/6e952a39dbc9f8bd3ae98ab13b65e9e2.js";

    popunder.async = true;
    document.body.appendChild(popunder);

    // Additional advertisement script
    const smartAd = document.createElement("script");

    smartAd.src =
      "https://pl32060438.profitableratecpmnetwork.com/58/ef/57/58ef571dc2f6d6f788c1bf9482306edc.js";

    smartAd.async = true;
    document.body.appendChild(smartAd);

    return () => {
      popunder.remove();
      smartAd.remove();
    };
  }, []);

  const openSmartLink = () => {
    window.open(SMART_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="site">
      <div className="container">
        <div className="breadcrumb">Videos</div>

        <div className="page-layout">
          <section className="main-content">
            {/* Video preview */}
            <div className="relative flex aspect-video min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-700 text-center sm:min-h-[300px] lg:min-h-[340px]">
              {/* Background image */}
              <img
                src={imagePath}
                alt="Video Preview"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

              {/* Preview content */}
              <div className="relative z-10 flex flex-col items-center px-4">
                <button
                  type="button"
                  aria-label="Open video link"
                  onClick={openSmartLink}
                  className="grid h-14 w-14 place-items-center rounded-full bg-lime-400 text-xl text-slate-950 shadow-lg shadow-lime-400/20 transition hover:scale-110 sm:h-16 sm:w-16"
                >
                  ▶
                </button>
              </div>

              {/* Quality badge */}
              <span className="absolute bottom-3 right-3 z-10 rounded bg-black/75 px-2 py-1 text-[10px] font-bold text-white">
                HD · PREVIEW
              </span>
            </div>

            {/* Featured video heading */}
            <div className="section-heading">
              <div>
                <span className="eyebrow">FEATURED VIDEO</span>
                <h2>Watch Preview</h2>
              </div>

              <button
                type="button"
                className="quality-badge"
                onClick={openSmartLink}
              >
                HD READY
              </button>
            </div>

            <AdBanner type="banner728" />

            {/* Download section */}
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

            {/* Native sponsored advertisement */}
            <div className="ad-slot">
              <div className="ad-label">SPONSORED CONTENT</div>

              <div
                id="container-1e06021a3f3ba904a6022be9d983bbb1"
                className="native-ad"
              />
            </div>

            {/* Continue link */}
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

          {/* Sidebar */}
          <aside className="sidebar">
            <AdBanner type="skyscraper" />
            <AdBanner type="vertical160" />
          </aside>
        </div>
      </div>
    </main>
  );
}
