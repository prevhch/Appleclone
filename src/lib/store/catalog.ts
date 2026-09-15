export type ProductOption = {
  id: string;
  swatch?: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  priceDelta?: number;
};

export type BuyConfig = {
  /** Selector label, e.g. "Color", "Size", "Storage". */
  label: string;
  /** Imagery stem shown when the active option changes (format placeholder {opt} -> stem). */
  imageStem?: string;
  options: ProductOption[];
};

export type CatalogProduct = {
  id: string;
  name: string;
  familyColorStem?: string;
  family: {
    label: string;
    href: string;
  };
  price: number;
  currency?: string;
  subtitle: string;
  /** Apple% of the current-gen phone/tone. */
  config: BuyConfig[];
  footnote?: string;
};

export const CURRENCY = "USD";
export const SYMBOL = "$";

export const PRODUCTS: Record<string, CatalogProduct> = {
  iphone_18_pro: {
    id: "iphone_18_pro",
    name: "iPhone 18 Pro",
    family: { label: "iPhone", href: "/iphone" },
    price: 1199,
    subtitle: "The ultimate performance and camera of any iPhone.",
    config: [
      {
        label: "Color",
        imageStem: "/images/store/iphone_18_pro",
        options: [
          { id: "black", swatch: "#1c1c1e", label: "Space Black", selected: true },
          { id: "silver", swatch: "#e3e4e6", label: "Silver" },
          { id: "glacier", swatch: "#cfe0ea", label: "Glacier Blue" },
          { id: "burgundy", swatch: "#6d3a3a", label: "Deep Burgundy", disabled: true },
        ],
      },
      {
        label: "Storage",
        options: [
          { id: "256", label: "256GB", selected: true, priceDelta: 0 },
          { id: "512", label: "512GB", priceDelta: 200 },
          { id: "1tb", label: "1TB", priceDelta: 400 },
        ],
      },
    ],
  },
  iphone_17: {
    id: "iphone_17",
    name: "iPhone 17",
    family: { label: "iPhone", href: "/iphone" },
    price: 899,
    subtitle: "You can never have too much Pro camera.",
    config: [
      { label: "Color", options: [{ id: "mist", label: "Mist Blue", swatch: "#b7c9cd", selected: true }, { id: "lavender", label: "Lavender", swatch: "#d0c2dd" }] },
      { label: "Storage", options: [{ id: "128", label: "128GB", selected: true, priceDelta: 0 }, { id: "256", label: "256GB", priceDelta: 100 }] },
    ],
  },
  iphone_16: {
    id: "iphone_16",
    name: "iPhone 16",
    family: { label: "iPhone", href: "/iphone" },
    price: 799,
    subtitle: "The complete iPhone experience.",
    config: [
      { label: "Color", options: [{ id: "ultra", label: "Ultramarine", swatch: "#3b4cc0", selected: true }, { id: "teal", label: "Teal", swatch: "#2f9c96" }, { id: "pink", label: "Pink", swatch: "#f2c7d2" }] },
      { label: "Storage", options: [{ id: "128", label: "128GB", selected: true, priceDelta: 0 }, { id: "256", label: "256GB", priceDelta: 100 }] },
    ],
  },
  iphone_air: {
    id: "iphone_air",
    name: "iPhone Air",
    family: { label: "iPhone", href: "/iphone" },
    price: 999,
    subtitle: "Incredibly light and thin with pro performance.",
    config: [
      { label: "Color", options: [{ id: "sky", label: "Sky Blue", swatch: "#bcd6e6", selected: true }, { id: "gold", label: "Light Gold", swatch: "#f0ddbe" }, { id: "cloud", label: "Cloud White", swatch: "#f5f5f0" }] },
      { label: "Storage", options: [{ id: "256", label: "256GB", selected: true, priceDelta: 0 }, { id: "512", label: "512GB", priceDelta: 200 }] },
    ],
  },
  iphone_17e: {
    id: "iphone_17e",
    name: "iPhone 17e",
    family: { label: "iPhone", href: "/iphone" },
    price: 599,
    subtitle: "Feature stacked. Value packed.",
    config: [
      { label: "Color", options: [{ id: "pink", label: "Soft Pink", swatch: "#f2d0d0", selected: true }, { id: "white", label: "White", swatch: "#f8f8f8" }, { id: "black", label: "Black", swatch: "#2c2c2e" }] },
      { label: "Storage", options: [{ id: "128", label: "128GB", selected: true, priceDelta: 0 }, { id: "256", label: "256GB", priceDelta: 100 }] },
    ],
  },
  iphone_duo: {
    id: "iphone_duo",
    name: "iPhone Duo",
    family: { label: "iPhone", href: "/iphone" },
    price: 1599,
    subtitle: "The largest display of any iPhone. Foldable. Posable. And durable.",
    config: [
      { label: "Color", options: [{ id: "star", label: "Star White", swatch: "#eef0f1", selected: true }, { id: "night", label: "Night Sky", swatch: "#2b3340" }] },
      { label: "Storage", options: [{ id: "256", label: "256GB", selected: true, priceDelta: 0 }, { id: "512", label: "512GB", priceDelta: 200 }, { id: "1tb", label: "1TB", priceDelta: 400 }] },
    ],
  },
  macbook_air: {
    id: "macbook_air",
    name: "MacBook Air",
    family: { label: "Mac", href: "/mac" },
    price: 1299,
    subtitle: "Now supercharged by M5. And mind-blowingly thin.",
    config: [
      { label: "Size", options: [{ id: "13", label: "13″", selected: true, priceDelta: 0 }, { id: "15", label: "15″", priceDelta: 200 }] },
      { label: "Color", options: [{ id: "midnight", label: "Midnight", swatch: "#1e2632", selected: true }, { id: "starlight", label: "Starlight", swatch: "#e7e2d7" }, { id: "silver", label: "Silver", swatch: "#e3e4e6" }] },
      { label: "Storage", options: [{ id: "256", label: "256GB", selected: true, priceDelta: 0 }, { id: "512", label: "512GB", priceDelta: 200 }, { id: "1tb", label: "1TB", priceDelta: 400 }] },
    ],
  },
  apple_watch_series_12: {
    id: "apple_watch_series_12",
    name: "Apple Watch Series 12",
    family: { label: "Watch", href: "/watch" },
    price: 449,
    subtitle: "The thinnest Watch yet. Built for a healthier day.",
    config: [
      { label: "Size", options: [{ id: "42", label: "42mm", selected: true, priceDelta: 0 }, { id: "46", label: "46mm", priceDelta: 0 }] },
      { label: "Finish", options: [{ id: "alu", label: "Aluminum", selected: true, priceDelta: 0 }, { id: "titanium_bright", label: "Titanium (Bright)", priceDelta: 250 }] },
      { label: "Band", options: [{ id: "solo", label: "Solo Loop", selected: true, priceDelta: 0 }] },
    ],
  },
  apple_watch_ultra_4: {
    id: "apple_watch_ultra_4",
    name: "Apple Watch Ultra 4",
    family: { label: "Watch", href: "/watch" },
    price: 899,
    subtitle: "The most extreme Apple Watch, ever. Now in titanium.",
    config: [
      { label: "Size", options: [{ id: "49", label: "49mm", selected: true, priceDelta: 0 }] },
      { label: "Band", options: [{ id: "sport", label: "Trail Loop", selected: true, priceDelta: 0 }, { id: "alpine", label: "Alpine Loop", priceDelta: 0 }] },
    ],
  },
  airpods_5: {
    id: "airpods_5",
    name: "AirPods 5",
    family: { label: "AirPods", href: "/airpods" },
    price: 179,
    subtitle: "Discover the magic of Active Noise Cancellation.",
    config: [
      { label: "Color", options: [{ id: "white", label: "White", swatch: "#f5f5f0", selected: true }] },
    ],
  },
  airpods_pro_3: {
    id: "airpods_pro_3",
    name: "AirPods Pro 3",
    family: { label: "AirPods", href: "/airpods" },
    price: 269,
    subtitle: "Pró-level sound with the world’s most advanced ANC.",
    config: [{ label: "Color", options: [{ id: "white", label: "White", swatch: "#f5f5f0", selected: true }] }],
  },
};

export const PRODUCT = (id: keyof typeof PRODUCTS) => PRODUCTS[id];
