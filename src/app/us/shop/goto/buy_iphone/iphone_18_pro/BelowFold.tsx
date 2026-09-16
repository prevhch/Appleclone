const FAQ: Array<[string, string]> = [
  [
    "What is eSIM?",
    "An eSIM is a digital SIM that eliminates the need for a physical SIM card. With eSIM, you can quickly and easily transfer an existing cellular plan or get a new cellular plan, all digitally.",
  ],
  [
    "Can I activate an iPhone 18 Pro outside of the United States?",
    "iPhone 16, iPhone 17e, iPhone 17, iPhone Air, iPhone 18 Pro, and iPhone Duo models purchased in the U.S. or Puerto Rico don\u2019t have a physical SIM tray and activate only using eSIM. You can activate your iPhone outside the country if your carrier supports eSIM roaming.",
  ],
  [
    "Will my new iPhone be unlocked?",
    "In most cases, yes. An iPhone purchased from Apple is unlocked. Once your new iPhone is activated, it remains unlocked, which means you can use it with any carrier that provides service for iPhone.",
  ],
  [
    "When I buy from apple.com, does my iPhone come ready to use?",
    "Carrier-connected iPhone 16, iPhone 17e, iPhone 17, iPhone Air, iPhone 18 Pro, and iPhone Duo models will arrive ready to activate with eSIM and can connect to your cellular voice and data service without a physical SIM card.",
  ],
  [
    "Will my iPhone work worldwide?",
    "All iPhone models are world phones, so you can use them almost anywhere. Whether you are a GSM or CDMA network customer, you can roam internationally on GSM networks in over 200 countries or regions around the world.",
  ],
  [
    "Can I return my iPhone?",
    "Yes. If you change your mind and no longer wish to keep your iPhone, you have the option to return it to us. The returned iPhone must be in good condition and in the original packaging, which contains all accessories, manuals, and instructions.",
  ],
  [
    "I\u2019m buying an iPhone as a gift. Can it be activated at a later date?",
    "In most cases, an iPhone purchased from apple.com can be activated later. However, certain special deals or discounts may require preparation with the carrier at the time of purchase so that the phone arrives ready to use.",
  ],
  [
    "What resources are available to me to quickly get set up, transfer existing files, and make the most of my new iPhone?",
    "When you buy directly from Apple, you\u2019ll get access to Personal Setup \u2014 free online, one\u2011on\u2011one sessions with a Specialist who can help you set up your new iPhone and start your data transfer.",
  ],
  [
    "Are there differences between an iPhone for AT&T, T-Mobile, or Verizon?",
    "The iPhone models for AT&T, T-Mobile, and Verizon are the same. However, if you choose to finance an iPhone through the AT&T Installment Plan, T-Mobile Equipment Installment Plan, or Verizon Device Payment Program, your iPhone will arrive ready to activate.",
  ],
  [
    "Can I easily switch my carrier when I purchase an iPhone?",
    "Yes. You can switch carriers when you purchase an iPhone directly from Apple and choose carrier financing as your payment option. You\u2019ll also be able to keep your existing number and data.",
  ],
  [
    "How does Apple Upgrade work?",
    "Apple Upgrade is a leasing program offered in partnership with Klarna. Lease an iPhone or Apple Watch for 12 or 24 months, or an iPad or Mac for 24 or 36 months. Then, easily upgrade to something new at the end of your term.",
  ],
  [
    "What are connectivity discounts?",
    "Connectivity discounts are reflected in the advertised price of select iPhone models, and are available to customers who connect with select carriers at the time of purchase.",
  ],
  [
    "Which network providers offer 5G service?",
    "AT&T, T-Mobile, and Verizon are the national wireless carriers for iPhone in the United States, and they all offer 5G service.",
  ],
  [
    "What products can be covered by AppleCare One?",
    "AppleCare One coverage extends to products that were purchased recently or are currently covered by AppleCare+. Other eligible devices are those currently associated with your Apple Account.",
  ],
];

const COMPARE = [
  {
    name: "iPhone Duo",
    tag: "New",
    blurb: "The largest display of any iPhone. Foldable. Posable. And durable.",
    price: "From $1999",
    display: "7.6-inch Super Retina XDR folding display",
    chip: "A20 Pro chip",
    camera: "48MP Dual Fusion camera system",
    battery: "Up to 44 hours video playback",
  },
  {
    name: "iPhone 18 Pro",
    tag: "New",
    blurb: "The ultimate battery life, performance, and camera of any iPhone.",
    price: "From $1199",
    display: "6.9″ or 6.3″ Super Retina XDR display",
    chip: "A20 Pro chip",
    camera: "48MP Pro Fusion camera system",
    battery: "Up to 45 hours video playback",
  },
  {
    name: "iPhone Air",
    tag: "",
    blurb: "Incredibly light and thin with pro performance.",
    price: "From $1099",
    display: "6.5” Super Retina XDR display",
    chip: "A19 Pro chip",
    camera: "48MP Fusion camera system",
    battery: "Up to 27 hours video playback",
  },
  {
    name: "iPhone 17",
    tag: "",
    blurb: "Powerful, durable, and delightful.",
    price: "From $899",
    display: "6.3” Super Retina XDR display",
    chip: "A19 chip",
    camera: "48MP Dual Fusion camera system",
    battery: "Up to 30 hours video playback",
  },
  {
    name: "iPhone 17e",
    tag: "",
    blurb: "Feature stacked. Value packed.",
    price: "From $699",
    display: "6.1″ Super Retina XDR display",
    chip: "A19 chip",
    camera: "48MP Fusion camera system",
    battery: "Up to 26 hours video playback",
  },
];

const FOOTER_COLS: Array<[string, string[]]> = [
  ["Shop and Learn", ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]],
  ["Apple Wallet", ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]],
  ["Account", ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"]],
  ["Entertainment", ["Apple One", "Apple TV", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"]],
  ["Apple Store", ["Find a Store", "Genius Bar", "Today at Apple", "Apple Store App", "Apple Upgrade", "Apple Trade In", "Order Status", "Shopping Help"]],
  ["About Apple", ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Events", "Contact Apple"]],
];

export default function BelowFold() {
  return (
    <>
      <section className="dd-compare-section">
        <h2 className="t-headline-reduced dd-compare-header">Which iPhone is right for you?</h2>
        <div className="dd-compare row">
          {COMPARE.map((m) => (
            <div key={m.name} className="column large-2 dd-compare-model">
              {m.tag ? <span className="badge badge-no-scrim">{m.tag}</span> : null}
              <h3 className="dd-compare-modelname">{m.name}</h3>
              <p className="dd-compare-blurb">{m.blurb}</p>
              <p className="dd-compare-price">{m.price}</p>
              <dl className="dd-compare-specs">
                <dt>Display</dt>
                <dd>{m.display}</dd>
                <dt>Chip</dt>
                <dd>{m.chip}</dd>
                <dt>Camera</dt>
                <dd>{m.camera}</dd>
                <dt>Battery</dt>
                <dd>{m.battery}</dd>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="rc-accordion-section">
        <h2 className="rc-accordion-title">Frequently Asked Questions</h2>
        <div className="rc-accordion">
          {FAQ.map(([q, a]) => (
            <details key={q} className="rc-accordion-item">
              <summary className="rc-accordion-headline">{q}</summary>
              <div className="rc-accordion-content">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="as-globalfooter">
        <div className="as-globalfooter-content row">
          {FOOTER_COLS.map(([h, links]) => (
            <div key={h} className="column large-2 as-globalfooter-col">
              <h3 className="as-globalfooter-label">{h}</h3>
              <ul>
                {links.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="as-globalfooter-mini">
          <span>Copyright © 2026 AppleClone (school project). All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
