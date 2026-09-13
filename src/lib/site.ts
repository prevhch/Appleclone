export const NAV = [
  { label: "Store", href: "/us/shop/goto/store" },
  { label: "Mac", href: "/mac" },
  { label: "iPad", href: "/ipad" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "Vision", href: "/apple-vision-pro" },
  { label: "AirPods", href: "/airpods" },
  { label: "TV & Home", href: "/tv-home" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Accessories", href: "/us/shop/goto/buy_accessories" },
  { label: "Support", href: "https://support.apple.com/?cid=gn-ols-home-hp-tab" },
];

export const A = (p: string) => `/apple${p}`;

export const HERO_18PRO = {
  tileLink: "/iphone-18-pro/",
  startStem: A(
    "/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro_preorder_startframe__c3rgztqlhniq"
  ),
  endStem: A(
    "/v/homepage/images/iphone-18-pro/a/hero_iphone_18_pro_preorder__dd68unjbzswi"
  ),
  videoBase:
    "/apple/105/media/us/home/2026/6f46e780-4ab4-4688-915a-7aa0694378e3/anim/hero",
};

export const HERO_DUO = {
  tileLink: "/iphone-duo/",
  stem: A("/v/homepage/images/iphone-duo/a/hero_iphone_duo_announce__fh4u8yzndpe2"),
};

export const HERO_UPGRADE = {
  // NOTE: the live tile uses promo_ files on a LIGHT theme with a logo headline
  tileLink: "/us/shop/goto/apple_upgrade",
  startStem: A(
    "/v/homepage/images/apple-upgrade/a/promo_apple_upgrade_startframe__e9bf3nb054ae"
  ),
  endStem: A("/v/homepage/images/apple-upgrade/a/promo_apple_upgrade__jvn6udm4tx2e"),
  logoStem: A(
    "/v/homepage/images/logos/apple-upgrade/a/promo_logo_apple_upgrade__lwuohffdzjem"
  ),
  videoBase:
    "/apple/105/media/us/home/2026/abb2ec52-6e62-4771-84e4-d1e689324d6d/anim/promo",
};

export type Promo = {
  /** Visually-hidden accessible name (Apple renders logo-image or text). */
  title: string;
  sub: string;
  /** Small callout under sub (e.g. availability). */
  avail?: string;
  /** Footnote sup number shown after sub, linking to #footnote-N. */
  sup?: number;
  cta: { label: string; href: string; ariaLabel?: string }[];
  imgStem: string;
  tileLink: string;
  dark?: boolean;
  /** Logo-image headline stem (PNG); when set, no visible text headline. */
  logoStem?: string;
};

export const PROMOS: Promo[] = [
  {
    title: "Incredible carrier deals at Apple",
    sub: "Explore deals that accept eligible trade-in devices in any condition.",
    sup: 2,
    cta: [
      {
        label: "Find your deal",
        href: "/us/shop/goto/buy_iphone/carrier_offers",
        ariaLabel: "Find your deal, Carriers",
      },
    ],
    imgStem: A("/v/homepage/images/carriers/a/promo_carriers__bkbchi56n5qq"),
    tileLink: "/us/shop/goto/buy_iphone/carrier_offers",
  },
  {
    title: "Apple Watch Series 12",
    sub: "The most accurate heart rate sensing in a wearable.",
    avail: "Available starting 9.18",
    sup: 3,
    cta: [
      { label: "Learn more", href: "/apple-watch-series-12", ariaLabel: "Learn more, Apple Watch Series 12" },
      { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12", ariaLabel: "Pre-order, Apple Watch Series 12" },
    ],
    imgStem: A(
      "/v/homepage/images/apple-watch-series-12/a/promo_apple_watch_series_12_preorder__bq5beop71hle"
    ),
    logoStem: A(
      "/v/homepage/images/logos/apple-watch-series-12/a/promo_logo_apple_watch_series_12__eck6698frlqq"
    ),
    tileLink: "/apple-watch-series-12/",
    dark: true,
  },
  {
    title: "Apple Watch Ultra 4",
    sub: "A battery you can\u2019t outrun.",
    avail: "Available starting 9.18",
    cta: [
      { label: "Learn more", href: "/apple-watch-ultra-4", ariaLabel: "Learn more, Apple Watch Ultra 4" },
      { label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4", ariaLabel: "Pre-order, Apple Watch Ultra 4" },
    ],
    imgStem: A(
      "/v/homepage/images/apple-watch-ultra-4/a/promo_apple_watch_ultra_4_preorder__fvnta8sy0wa6"
    ),
    logoStem: A(
      "/v/homepage/images/logos/apple-watch-ultra-4/a/promo_logo_apple_watch_ultra_4__bc6ish8cjaeq"
    ),
    tileLink: "/apple-watch-ultra-4/",
    dark: true,
  },
  {
    title: "AirPods 5",
    sub: "Discover the magic of Active Noise Cancellation.",
    avail: "Available starting 9.18",
    cta: [
      { label: "Learn more", href: "/airpods-5", ariaLabel: "Learn more, AirPods 5" },
      { label: "Pre-order", href: "/us/shop/goto/buy_airpods/airpods_5", ariaLabel: "Pre-order, AirPods 5" },
    ],
    imgStem: A("/v/homepage/images/airpods-5/a/promo_airpods_5_preorder__lydvte0llb6i"),
    tileLink: "/airpods-5/",
  },
  {
    title: "MacBook Air",
    sub: "Now supercharged by M5.",
    cta: [
      { label: "Learn more", href: "/macbook-air", ariaLabel: "Learn more, MacBook Air with M5" },
      { label: "Buy", href: "/us/shop/goto/buy_mac/macbook_air", ariaLabel: "Buy, MacBook Air with M5" },
    ],
    imgStem: A("/v/homepage/images/macbook-air-m5/a/promo_macbook_air_m5__e5xk2yysqiie"),
    tileLink: "/macbook-air/",
  },
  {
    title: "Apple Card",
    sub: "Get up to 3% Daily Cash back with every purchase.",
    cta: [
      { label: "Learn more", href: "/apple-card", ariaLabel: "Learn more, Apple Card" },
      {
        label: "Apply now",
        href: "https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036",
        ariaLabel: "Apply now, Apple Card",
      },
    ],
    imgStem: A("/v/homepage/images/apple-card/a/promo_apple_card__d8xz4kd4evwy"),
    logoStem: A(
      "/v/homepage/images/logos/apple-card/a/promo_logo_apple_card__28vxrcexz0ia"
    ),
    tileLink: "/apple-card/",
  },
];
