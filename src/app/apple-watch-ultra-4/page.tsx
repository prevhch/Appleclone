"use client";
import { useState } from "react";
import Link from "next/link";
import { BannerBar, ProductSubnav } from "@/components/Product";
import InlineMedia from "@/components/InlineMedia";
import ApplePicture from "@/components/ApplePicture";

const P = (stem: string) => `/apple/v/apple-watch-ultra-4/a/images/overview/${stem}`;
const V = (anim: string) =>
  `/apple/105/media/us/apple-watch-ultra-4/2026/6adeb6e9-f28b-4ea3-83d8-682065bc12b1/anim/${anim}/`;

function Head({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pt-16 pb-10 text-center">
      {eyebrow && <p className="text-[21px] font-semibold text-[#2997ff]">{eyebrow}</p>}
      <h2 className="mt-3 text-[40px] md:text-[56px] font-semibold tracking-tight">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-[690px] text-[21px] leading-relaxed text-white/80">{sub}</p>}
      {children}
    </div>
  );
}

function CuedMedia({ stem, end, video, loop = false, ext = "jpg", className }: { stem: string; end: string; video: string; loop?: boolean; ext?: "jpg" | "png"; className?: string }) {
  return (
    <InlineMedia
      startStem={stem}
      endStem={end}
      videoBase={video}
      loop={loop}
      ext={ext}
      className={`relative overflow-hidden bg-black ${className ?? ""}`}
      imgStart="h-full w-full object-cover"
      imgEnd="h-full w-full object-cover"
    />
  );
}

function StylesGrid({ items, cols = "md:grid-cols-3 lg:grid-cols-4", cardClass = "bg-[#161617]" }: { items: { title: string; desc: string; stem: string; badge?: string; ext?: "jpg" | "png" }[]; cols?: string; cardClass?: string }) {
  return (
    <div className={`mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 ${cols}`}>
      {items.map((it) => (
        <div key={it.title} className={`overflow-hidden rounded-2xl ${cardClass}`}>
          <ApplePicture stem={it.stem} ext={it.ext} className="block w-full" imgClassName="w-full" />
          <div className="p-5">
            {it.badge && <p className="text-[12px] font-semibold uppercase tracking-wide text-[#2997ff]">{it.badge}</p>}
            <h3 className="mt-1 text-[17px] font-semibold">{it.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/70">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductTabs({ tabs }: { tabs: { id: string; label: string; desc: string; stem?: string; end?: string; video?: string; finish?: boolean }[] }) {
  const [sel, setSel] = useState(tabs[0]?.id ?? "");
  const tab = tabs.find((t) => t.id === sel) ?? tabs[0];
  return (
    <div>
      <div className="mx-auto flex max-w-[980px] flex-wrap justify-center gap-3 px-4 pb-8 text-[14px]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setSel(t.id)}
            className={`rounded-full px-4 py-2 ${sel === t.id ? "bg-white text-black" : "bg-white/15 text-white"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative mx-auto max-w-[980px] px-4">
        {tab.finish ? (
          <FinishPicker />
        ) : tab.video ? (
          <div key={tab.id} className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia key={tab.id} stem={tab.stem!} end={tab.end!} video={tab.video} />
          </div>
        ) : tab.stem ? (
          <ApplePicture key={tab.id} stem={tab.stem} className="block w-full" imgClassName="w-full rounded-2xl" />
        ) : null}
      </div>
      <div className="mx-auto mt-8 max-w-[680px] px-4 pb-16 text-center">
        <p className="text-[19px] leading-relaxed text-white/80">{tab.desc}</p>
      </div>
    </div>
  );
}

function FinishPicker() {
  const [sel, setSel] = useState("black");
  const finishes = [
    { id: "black", label: "Black", stem: P("product-viewer/product_finishes_black__d8fehns3thg2") },
    { id: "natural", label: "Natural", stem: P("product-viewer/product_finishes_natural__fcf2wz3wghea") },
  ];
  const cur = finishes.find((f) => f.id === sel)!;
  return (
    <div>
      <div className="mx-auto mb-6 flex max-w-[400px] flex-wrap justify-center gap-2 px-4 text-[12px]">
        {finishes.map((f) => (
          <button
            key={f.id}
            onClick={() => setSel(f.id)}
            className={`rounded-full px-3 py-2 ${sel === f.id ? "bg-white text-black" : "bg-white/15 text-white"}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ApplePicture key={cur.id} stem={cur.stem} className="block w-full" imgClassName="w-full rounded-2xl" />
    </div>
  );
}

const SPEC_ROWS = [
  { label: "Case", ultra: "49mm titanium case", s12: "46mm or 42mm aluminum, titanium, or ceramic case" },
  { label: "Display", ultra: "Wide-angle Always-On Retina display", s12: "Wide-angle Always-On Retina display" },
  { label: "Brightness", ultra: "Up to 3000 nits", s12: "Up to 2000 nits" },
  { label: "Readiness", ultra: "Readiness app", s12: "Readiness app" },
  { label: "Recovery HRV", ultra: "Recovery HRV", s12: "Recovery HRV" },
  { label: "Heart rate", ultra: "High-frequency background heart rate tracking", s12: "High-frequency background heart rate tracking" },
  { label: "Hypertension", ultra: "Hypertension notifications", s12: "Hypertension notifications" },
  { label: "ECG", ultra: "ECG app", s12: "ECG app" },
  { label: "Blood Oxygen", ultra: "Blood Oxygen app", s12: "Blood Oxygen app" },
  { label: "Heart alerts", ultra: "High and low heart rate notifications", s12: "High and low heart rate notifications" },
  { label: "Rhythm", ultra: "Irregular rhythm notifications", s12: "Irregular rhythm notifications" },
  { label: "Sleep", ultra: "Sleep score", s12: "Sleep score" },
  { label: "Sleep apnea", ultra: "Sleep apnea notifications", s12: "Sleep apnea notifications" },
  { label: "Chip", ultra: "S11 chip", s12: "S11 chip" },
  { label: "Siri AI", ultra: "Siri AI", s12: "Siri AI" },
  { label: "Audio Intelligence", ultra: "Audio Intelligence", s12: "Audio Intelligence" },
  { label: "Find iPhone", ultra: "Precision Finding for iPhone", s12: "Precision Finding for iPhone" },
  { label: "Battery", ultra: "Up to 50 hours of normal use", s12: "Up to 24 hours of normal use" },
  { label: "Low Power Mode", ultra: "Up to 84 hours", s12: "Up to 38 hours" },
  { label: "Extended workout", ultra: "Up to 45 hours of Max Extended Workout tracking", s12: "— Max Extended Workout tracking not applicable" },
];

const NAV_ITEMS = [
  { label: "Overview", href: "/apple-watch-ultra-4" },
  { label: "Why Apple Watch", href: "/apple-watch-ultra-4" },
  { label: "Tech Specs", href: "/apple-watch-ultra-4" },
  { label: "Compare", href: "/watch" },
  { label: "Buy", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" },
];

export default function Ultra4Page() {
  return (
    <main className="bg-black text-white">
      <BannerBar
        text="Pre-order Apple Watch Ultra 4. Available starting September 18."
        cta={{ label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_ultra_4" }}
      />
      <ProductSubnav title="Watch" items={NAV_ITEMS} dark />

      {/* ── Section 1: Media hero ─────────────────────────── */}
      <section className="relative bg-black">
        <div className="relative z-10 pt-[60px] pb-4 text-center">
          <h1 className="text-[48px] md:text-[64px] font-semibold leading-tight tracking-tight">
            A battery you <span className="text-[#2997ff]">can’t outrun</span>.
          </h1>
          <p className="mt-6 text-[19px] text-white/70">
            Available starting September eighteenth
          </p>
          <p className="mt-2 text-[17px] text-white/70">
            From $799 or $66.58/mo. for 12 mo.* Lease from $24.99/mo. for 24 mo. with Apple Upgrade◊
          </p>
          <div className="mt-6">
            <Link
              href="/us/shop/goto/buy_watch/apple_watch_ultra_4"
              className="inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2 text-[17px] font-medium hover:bg-[#0077ed]"
            >
              Pre-order
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-4">
          <CuedMedia stem={P("media-hero/hero_startframe__byn66fgbfjea")} end={P("media-hero/hero_endframe__bhft73uaplpu")} video={V("hero")} className="aspect-[16/9]" />
        </div>
      </section>

      {/* ── Section 2: Get the highlights ── */}
      <section id="highlights" className="bg-black py-4">
        <Head title="Get the highlights." />
        <div className="mx-auto max-w-[1024px] px-4 pb-4">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("highlights/highlights_health_sensing_startframe__cbmd214st6fm")} end={P("highlights/highlights_health_sensing_endframe__ddd950jsec8y")} video={V("watch-highlights")} />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-3 lg:grid-cols-4"
          items={[
            { title: "Battery", desc: "The longest battery life of any Apple Watch. Now with up to 45 hours of Max Extended Workout tracking.1", stem: P("highlights/highlights_battery__gp6imvvzffau") },
            { title: "Health Sensing System", desc: "All-new Health Sensing System delivers the most accurate heart rate sensing in a wearable.2", stem: P("highlights/highlights_health_sensing__cya9u68365w2") },
            { title: "Readiness", desc: "A new personal readiness score tells you whether to rest or put yourself to the test.", stem: P("highlights/highlights_readiness__eed7bf55wpm6") },
            { title: "HRV readings", desc: "More frequent heart rate variability, or HRV, readings help provide insights on stress and recovery.", stem: P("highlights/highlights_hrv__df03z907voeq") },
            { title: "Health Age", desc: "In the redesigned Health app, learn which habits are influencing your Health Age and how to improve them.3", stem: P("highlights/highlights_health_age__fvwiomn5p5ua"), badge: "Coming late 2026" },
            { title: "Siri AI", desc: "Make every day more effortless with Siri AI.4 And seamless with Audio Intelligence, powered by the S11 chip.5", stem: P("highlights/highlights_siri_ai__bp591ly01rte") },
            { title: "Satellite", desc: "Apple Watch Ultra 4 features built-in satellite communications that help you stay connected and safe off the grid.6", stem: P("highlights/highlights_satellite__ens6e8jp6j2a") },
          ]}
        />
      </section>

      {/* ── Section 3: Take a closer look ── */}
      <section id="product-viewer" className="bg-[#0a0a0c] pt-8">
        <Head title="Take a closer look." />
        <ProductTabs
          tabs={[
            { id: "finishes", label: "Finishes", desc: "Finishes. Choose from two aerospace-grade titanium finishes — natural and black. Ultra 4 shown in Black.", finish: true },
            { id: "battery", label: "Battery life and fast charging", desc: "Battery life and fast charging. Get long-lasting battery life with up to 50 hours of normal use.7 Fast-charge in just 15 minutes for up to 18 hours of use.8", stem: P("product-viewer/product_battery__etznv2xltg8y") },
            { id: "sensing", label: "Health Sensing System", desc: "Health Sensing System. Redesigned with more capable optical and electrical sensors and larger, more power-efficient green LEDs, the sensing system unlocks deeper health and fitness insights.", stem: P("product-viewer/product_health_sensing_startframe__fcqj710qpkeq"), end: P("product-viewer/product_health_sensing_endframe__csfpe8mokp4y"), video: V("watch-product") },
            { id: "durability", label: "Durability", desc: "Durability. Ultra 4 is built to last with a rugged titanium case and a display crafted from sapphire crystal — one of the strongest naturally occurring materials on Earth. And it’s MIL-STD-810H tested for extreme environments.9", stem: P("product-viewer/product_durability__gf8brtp59qmq") },
            { id: "water", label: "Water and dust resistance", desc: "Water and dust resistance. Ultra 4 is rated WR100 — fit for recreational scuba diving to 40 meters and high-speed water sports.10 It’s also IP6X dust resistant.11", stem: P("product-viewer/product_resistance__dksc1rbsv9si") },
            { id: "action", label: "Action button", desc: "Action button. One quick press gives you precise, physical control over a variety of customizable functions — like starting a workout, marking a segment, advancing to the next interval, or turning on the flashlight.", stem: P("product-viewer/product_action_button_startframe__e2tyxgvmakya"), end: P("product-viewer/product_action_button_endframe__dta3bkw3v4cy"), video: V("action-button") },
            { id: "make-yours", label: "Make it yours", desc: "Make it yours. Choose from beautiful, endlessly versatile band styles that meet the demands of your daily activities, from workouts to nights out. And create limitless watch face combinations, including the new Siri Modular watch face.", stem: P("product-viewer/product_personalization__biwxosvaolyu") },
          ]}
        />
      </section>

      {/* ── Section 4: Advanced Health and Fitness Tracking ── */}
      <section id="health-tracking" className="bg-black pb-4">
        <Head eyebrow="Advanced Health and Fitness Tracking" title="Run with all your heart." sub="Apple Watch Ultra was designed to be the ultimate running watch, with powerful features that help you train smarter and precision dual-frequency GPS. Now Apple Watch Ultra 4 takes it to the next level with game-changing health and fitness tracking to help you elevate your performance. And new extended battery life for workouts to keep you moving toward your goals. Run better, run longer." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("health-tracking/health_tracking_startframe__ctk2hkfl7weq")} end={P("health-tracking/health_tracking_endframe__ezy13bl8s6eu")} video={V("health-tracking")} />
          </div>
        </div>
        <div className="mx-auto max-w-[720px] px-4 pb-4 text-center">
          <p className="text-[24px] font-semibold">Heartcore innovation.</p>
          <p className="mt-4 text-[17px] leading-relaxed text-white/70">
            Heart data is fundamental in tracking your overall health and performance. Redesigned with more capable
            optical and electrical sensors, the all-new Health Sensing System works with the S11 chip to provide
            higher-frequency heart monitoring. The updated sensors and larger, more power-efficient green LEDs give
            you richer heart data for more meaningful insights.
          </p>
        </div>
      </section>

      {/* ── Section 5: Ready advice ── */}
      <section id="readiness" className="bg-black pb-4">
        <div className="mx-auto grid max-w-[1024px] items-center gap-4 px-4 pb-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("readiness/health_tracking_readiness__eg5eqa4z3cq6")} className="block w-full" imgClassName="w-full" />
          </div>
          <div className="p-4">
            <p className="text-[19px] leading-relaxed text-white/80">
              Ready advice. The new readiness experience can help you determine your capacity to take on the day by
              providing you with one simple score. Your score is determined each morning by analyzing your recent
              activity, vitals, and sleep — and it adjusts as you go about your day. So whether you’re training for a
              race or juggling a busy schedule, you can spend your energy on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: HRV? Check. ── */}
      <section id="heart-rate" className="bg-black pb-4">
        <div className="mx-auto grid max-w-[1024px] items-center gap-4 px-4 pb-16 md:grid-cols-2">
          <div className="p-4 order-2 md:order-1">
            <p className="text-[19px] leading-relaxed text-white/80">
              HRV? Check. Heart rate variability, or HRV, is an indicator of how your body responds to stress and
              recovery. Overtraining or poor sleep can raise your stress and lower your HRV. With the most accurate
              heart rate sensing in a wearable,2 Apple Watch Ultra 4 measures HRV as often as every five minutes and
              takes background heart rate readings every five seconds — the most frequent sensing ever for Apple Watch.
              And with the updated Heart Rate app and new watch face complications, you can easily view your readings
              anytime.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("health-tracking/health_tracking_hrv__e6ml1yjazqye")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
      </section>

      {/* ── Section 7: Run circles around your data ── */}
      <section id="running" className="bg-black pb-4">
        <Head title="Run circles around your data." sub="Ultra 4 goes the extra mile to ensure that you can precisely track and analyze your running workouts. With real-time metrics, deeper insights into training and performance, and personalized encouragement, you’ll be motivated to hit your goals like never before." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("running/running_workout_buddy__3bynmr1qkj6u")} end={P("running/running_workout_buddy__3bynmr1qkj6u")} video={V("workout")} />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-3"
          items={[
            { title: "Advance with advanced metrics.", desc: "Track your progress with metrics like running power and cadence. And if you create a Custom Workout on your watch or iPhone, you can add work and recovery intervals, set a pace for outdoor workouts, and more. You can even get an estimate of your VO2 max after your run.", stem: P("running/running_advanced_metrics__cuh6fpt8g8q6") },
            { title: "Monitor your Heart Rate Zones.", desc: "Quickly see your exercise intensity level with Heart Rate Zones, which are automatically calculated and personalized using your health data. You can adjust them manually or set up alerts.", stem: P("running/running_heart_rate_zones__d1zy5p9pwnyq") },
            { title: "Hit the ground running with the Action button.", desc: "It’s customizable and gives you quick control over a variety of functions, so you can do things like control a workout, move to your next interval, mark a segment, and more. All with extreme precision.", stem: P("running/running_action_button__9r02nnapo8i2") },
            { title: "Keep pace with Pacer.", desc: "Set specific time and distance goals with Pacer for a running or outdoor cycle workout, and track whether you’re keeping pace.", stem: P("running/running_pacer__nk29sv5k9syi") },
            { title: "Get ahead of yourself with Race Route.", desc: "Race against your best times on your favorite runs. See how far ahead or behind you are and how far you have to go.", stem: P("running/running_race_route__ghkta8x2njma") },
            { title: "Slay in your lane with Automatic Track Detection.", desc: "Ultra 4 automatically detects when you arrive at a track and combines Apple Maps data with precision GPS to deliver the most accurate track running experience. Create a Custom Workout with a warmup period, recovery interval, and more.", stem: P("running/running_track__el68rx5zm9qq") },
            { title: "Push your progress with enhanced Workout Buddy.", desc: "Get real-time encouragement right when you need it with new insights about your pace, distance, and workout progress. And you can finally leave your iPhone at home — all you need is Apple Watch with cellular.12", stem: P("running/running_workout_buddy__3bynmr1qkj6u") },
            { title: "Never miss a step with an improved step tracker.", desc: "Whether you’re out for a leisurely stroll with your coffee in the morning or running on a treadmill at night, Ultra 4 gives you a more accurate step count and distance measurements all day long. And now you can more easily check your step count, right from your watch face.", stem: P("running/running_pedometer__64ms9pt0o0ii") },
            { title: "Track your training load.", desc: "Helpful insights from training load show the impact your workouts have on your body over time, so it’s easier to plan when you’re training for your next big event.", stem: P("running/running_training_load__emi0sbxhpcqe") },
            { title: "Step it up with Strava.", desc: "Track every run, ride, or hike with real-time motivation. Live Segments show your progress against your PRs and Live Elevation Stats track your climb. Subscribers can also follow Routes hands-free with Off-Route Alerts to stay on track. Your workout data automatically syncs with the Fitness app on iPhone.", stem: P("running/running_strava__fzalwxtusfe6") },
          ]}
        />
      </section>

      {/* ── Section 8: Extreme staying power ── */}
      <section id="battery" className="bg-black pb-4">
        <Head title="Extreme staying power." sub="With optimized, more efficient workout algorithms, Ultra 4 delivers even longer battery life. While providing up to 50 hours of everyday battery use,7 it now gives you up to 18 hours of standard workout tracking and up to 45 hours of Max Extended Workout tracking — enough time to complete a 100-mile race.1" />
        <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 md:grid-cols-3">
          {[
            { t: "Everyday battery", d: "Up to 50 hours of normal use.7", s: P("battery/icon_battery__frqvne0ij56y"), ext: "png" as const },
            { t: "Standard workout battery", d: "Up to 18 hours of standard workout tracking.", s: P("battery/icon_workout__cck69mj5as6a"), ext: "png" as const },
            { t: "Max Extended Workout", d: "Up to 45 hours of Max Extended Workout tracking.1", s: P("battery/icon_power__cb12wlgl7tea"), ext: "png" as const },
          ].map((c) => (
            <div key={c.t} className={`rounded-2xl bg-[#161617] p-6 ${c.t === "Max Extended Workout" ? "md:col-span-1" : ""}`}>
              <div className="w-16">
                <ApplePicture ext={c.ext} stem={c.s} className="block w-full" imgClassName="w-full" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 9: Boost your performance ── */}
      <section id="insights" className="bg-black pb-4">
        <Head title="Boost your performance with a body of metrics." sub="The more health insights you have, the more empowered you are to take actions that will optimize how you perform. With in-depth clinical validation and FDA-cleared features, Apple Watch Ultra 4 provides a fuller picture of your health, so you can stay informed." />
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-4"
          items={[
            { title: "Wake up to your sleep score.", desc: "Sleep quality is influenced by factors such as sleep duration, bedtime consistency, how often you wake up, and time spent in each sleep stage. Sleep score analyzes these factors every night and provides a classification and a score. You’ll see how the score is calculated, so you can understand the quality of your sleep and learn how to make it more restorative.", stem: P("insights/vitals_sleep_score__dazwznpeldw2") },
            { title: "A new read on HRV.", desc: "Now you can better understand insights on stress and recovery with HRV in the Vitals app.13 HRV is sampled as often as every five minutes, both during the day and night.", stem: P("insights/vitals_hrv__bu24ochut9rm") },
            { title: "Track and understand changes in your cycle.", desc: "Cycle Tracking is with you through every stage of your menstrual health journey. Log your cycle and get predictions for your period, fertile window, and retrospective ovulation estimates. Cycle Tracking can notify you when your cycle patterns are suggestive of perimenopause as well as provide support during menopause.14", stem: P("insights/vitals_cycle__ec6ie7ras1me") },
            { title: "Follow your heart more frequently.", desc: "Ultra 4 uses high-frequency heart rate tracking to monitor your background heart rate, even when you’re not working out, and surfaces a value every five seconds in a new watch face complication.", stem: P("insights/vitals_heart_rate_tracking__d0xyq2exkf8m") },
            { title: "Measure your blood oxygen. It’s a breathtaking innovation.", desc: "The Health app on iPhone uses data from the sensor in Apple Watch to enable you to take on-demand readings of your blood oxygen as well as background readings, day and night.15", stem: P("insights/vitals_blood_oxygen__fo8nt89xslay") },
            { title: "Receive hypertension notifications.", desc: "Ultra 4 can notify you if it identifies patterns of hypertension.16 How? The optical sensor provides data to an algorithm that can detect potential hypertension by analyzing how your blood vessels respond to beats of the heart over 30-day periods.", stem: P("insights/vitals_hypertension__bblxn4zswhk2") },
            { title: "Take an ECG anytime, anywhere.", desc: "Check for signs of an irregular heart rhythm, also known as atrial fibrillation, by using the ECG app to generate a single-lead electrocardiogram. You can share your ECG reading with your healthcare provider.17", stem: P("insights/vitals_ecg__bfokcr55jbua") },
            { title: "Heart this app.", desc: "Check your heart rate at any time with the Heart Rate app. And get notifications of a high or low heart rate or an irregular rhythm.18", stem: P("insights/vitals_heart_app__eh8skry8f682") },
          ]}
        />
      </section>

      {/* ── Section 10: Redesigned Health app ── */}
      <section id="health-app" className="bg-black pb-4">
        <Head title="Redesigned Health app. Your present and future. On tap." sub="With Apple Intelligence at its core, the redesigned Health app transforms your health and fitness data into proactive insights delivering a whole new view of your health — today and over time.3 Featuring groundbreaking privacy protections, your personalized hub securely brings together data from your Apple Watch and synced medical records. And since the Health app adapts to you, you’ll get a real-time read on your health and longevity.">
          <p className="mt-2 text-[15px] font-semibold text-[#2997ff]">Coming late 2026</p>
        </Head>
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-4"
          items={[
            { title: "Insights", desc: "Tap into the Insights tab for a quick look at daily metrics and trends in your heart, sleep, fitness, vitals, readiness, and cycle tracking. Apple Intelligence makes sense of your daily habits and offers personalized guidance, like tips on how to improve your sleep routine.4 It’s all about you — right here, right now.", stem: P("health-app/health_today__gccfg3lehiuu") },
            { title: "Health Age", desc: "Health Age shows you exactly which factors are adding years and which ones are taking them off. With combined data from your Apple Watch like VO2 max, HRV, and sleep, you’ll learn what’s affecting your Health Age and how to improve it. You can even add biometrics from your blood work for deeper insights.3", stem: P("health-app/health_age__cz0p6uytj18i") },
            { title: "Longevity", desc: "The Longevity tab turns metrics from your Apple Watch and iPhone into helpful analytics that build a foundation for a healthier future. Explore categories like heart health, sleep, and movement to get a clear read on your health. Unlock personal insights by taking in-depth physical assessments at home. The more you understand your health, the better you can take care of it.", stem: P("health-app/health_check__e1m8w2lkghea") },
            { title: "Personalized guidance", desc: "Personalization is built into every part of the Health app, so you always know where you stand and how to improve. Get timely, personalized guidance powered by Apple Intelligence, like a suggestion to boost your cardio by adding intervals to your morning run. And helpful videos and articles explain the results of your physical assessments with your data layered in so you can better understand your health. It’s expert insight, made personal.4", stem: P("health-app/health_personalized__d1wcn5kt9w02") },
          ]}
        />
      </section>

      {/* ── Section 11: Say hello to Siri AI ── */}
      <section id="siri" className="bg-black pb-4">
        <Head eyebrow="Wearable AI Assistant" title="Say hello to Siri AI." sub="With all-new Siri AI, Apple Watch Ultra 4 can tap into broad world knowledge and your personal context to be even more helpful.4 Using just your voice, you can engage in natural, back-and-forth conversations, brainstorm ideas for workout routines, and get the latest wellness tips with Siri — all from your wrist. And now Audio Intelligence uses the built-in microphone and secure S11 chip in Ultra 4, alongside the power of Apple Intelligence, to make sense of what you hear in a private and secure way.5 Just as Visual Intelligence on iPhone helps you make sense of what you see.">
          <p className="mt-2 text-[13px] text-white/50">Siri AI is rolling out in English. Some Audio Intelligence features coming in beta late 2026. Usage limits may apply.</p>
        </Head>
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("siri/siri_orb_startframe__drussexrkk8y")} end={P("siri/siri_orb_endframe__cpu1dui2bi2q")} video={V("siri-orb")} />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-3 lg:grid-cols-5"
          items={[
            { title: "Revisit conversations in the Siri app.", desc: "Ask Siri a question on your iPhone or any other Apple device synced with iCloud, and pick up where you left off on your Apple Watch. Pin conversations and see the same content, including images, across your devices. Here’s to a little more conversation and a lot more Siri.", stem: P("siri/siri_app__fjzn49gc47au") },
            { title: "Siri Recap can summarize your chats to refresh your memory.", desc: "Siri Recap transforms your conversations into high-level notes, so you can stay focused and present. Each Siri Recap includes a title, a summary, and key points that you can review in the Siri app on your Apple Watch or iPhone. You can turn Siri Recap off or on at any time from Control Center or choose where and when it takes notes, such as only at work or never at night.19 Siri Recap coming in beta late 2026. Usage limits may apply.", stem: P("siri/siri_recap__el60mga9266a") },
            { title: "Live Rewind catches what you missed.", desc: "Did someone say something you couldn’t hear in a loud restaurant or share cooking instructions you didn’t quite catch? Just double-click the Digital Crown, and Live Rewind transcribes what was said in the last 15 seconds. You can ask Siri about the content of the transcript or save it to the new Siri app to revisit later.19 Live Rewind coming in beta late 2026. Usage limits may apply.", stem: P("siri/siri_live_rewind__f5yx8ayagkae") },
            { title: "Sound Recognition notifies you when it detects important sounds.", desc: "Designed for those who are Deaf or hard of hearing, Sound Recognition can listen for sounds you don’t want to miss, like sirens, alarms, doorbells, or a crying baby. You’ll be alerted with a notification on your watch — even when your iPhone isn’t nearby.20", stem: P("siri/siri_sound_recognition__e5ph14avwkq6") },
            { title: "Shazam can now automatically tell you what song is playing.", desc: "Shazam can instantly detect the music playing around you and automatically display the song title and artist’s name on the Music Recognition widget in the Smart Stack — all without a tap. You can also see the song info when you use the Shazam app or Siri. Talk about music to your ears.21", stem: P("siri/siri_shazam__fwoobobzf2ie") },
          ]}
        />
      </section>

      {/* ── Section 12: Great powers come with great privacy ── */}
      <section id="privacy" className="bg-black pb-4">
        <Head title="Great powers come with great privacy." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <ApplePicture ext="png" stem={P("privacy/apple_lock_startframe__c5iyo0d6ymc2")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
        <p className="mx-auto max-w-[720px] px-4 pb-16 text-center text-[17px] leading-relaxed text-white/70">
          Made possible by the new S11 chip, Audio Intelligence features are designed to protect your privacy and
          security at every step. These features do not create or store audio recordings, and raw audio used for
          processing is completely inaccessible, even to Apple, and is deleted after processing. There is no speaker
          attribution, and your Live Rewind transcripts and Siri Recaps in the Siri app are end-to-end encrypted
          through iCloud syncing. You decide whether to opt in to these features, and you control how you use them.5
        </p>
      </section>

      {/* ── Section 13: More Sports ── */}
      <section id="more-sports" className="bg-black pb-4">
        <Head eyebrow="More Sports" title="Ultraversatile." sub="Apple Watch Ultra 4 ups your game in every sport. When you’re cycling, it actively monitors your speed and efficiency so you can see your progress in real time. And in the water, it can track your sets as you swim, automatically detect stroke patterns, and calculate your total distance. Time to clock your best." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("more-sports/sports_hero__d7ihuk8knl6q")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-3"
          items={[
            { title: "Master the Multisport workout.", desc: "Ultra 4 can recognize when you transition between swimming, cycling, and running — and record your metrics for each. Tracking your segments for a triathlon has never been easier.", stem: P("more-sports/sports_multisport__eu6muvw2f7qu") },
            { title: "Watch your cycling metrics on your iPhone.", desc: "When you start a cycling workout on Ultra 4, it automatically shows up as a Live Activity on your iPhone — making it easier to see and safer when it’s mounted on your handlebars.", stem: P("more-sports/sports_iphone__gag6dvu98iie") },
            { title: "Find your Power Zones.", desc: "Connect your personal power meter to Ultra 4 to estimate your Functional Threshold Power (FTP), the highest level of intensity theoretically maintainable for an hour. Your FTP enables Power Zones to show your current power, time in a zone, and average power.", stem: P("more-sports/sports_power_zones__eghmuks41bu6") },
            { title: "Crank it up with Workout Views.", desc: "Want to check your current speed as you ride? Workout Views put your chosen metrics front and center so they’re easy to track. And it’s simple to switch between metrics like Heart Rate Zones, splits, and elevation by turning the Digital Crown.", stem: P("more-sports/sports_workout_views__rn5qs94z00yu") },
            { title: "Strength training. Easy flex.", desc: "The Workout app features extensive strength training capabilities, so you can more accurately track your bench press and barbell lift workouts. Making light work of your heavy lifting.", stem: P("more-sports/sports_strength_training__clufbqsic3de") },
            { title: "Make a splash with swim stroke.", desc: "When you’re in a pool, Ultra 4 automatically detects your swim stroke, calculates auto sets with distance and pace, and provides advanced metrics like SWOLF to measure efficiency.", stem: P("more-sports/sports_swim_stroke__f7tok32nbtqy") },
            { title: "Know what’s Up Next.", desc: "For any Custom Workout you create, the Up Next view allows you to see what’s remaining in your current interval and what you’ll be tackling next. Pro moves.", stem: P("more-sports/sports_next__ceult2d9ya5e") },
          ]}
        />
      </section>

      {/* ── Section 14: Adventure ── */}
      <section id="adventure" className="bg-black pb-4">
        <Head eyebrow="Adventure" title="Geared to go farther." sub="Hiking to new heights and diving to new depths requires specialized tools. Apple Watch Ultra 4 has pioneering features like a powerful compass and a full dive computer, so you can pack light and still be equipped for every expedition." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("adventure/adventure_hero__b4jb89dzm76u")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-3"
          items={[
            { title: "Retrace your steps with Backtrack.", desc: "To get back on route, Backtrack uses GPS data to automatically create a path of where you’ve been when you’re off grid. You can easily add waypoints for locations, like trailheads or campsites.", stem: P("adventure/adventure_backtrack__gkxuorruntiu") },
            { title: "Aim higher with a Hiking workout.", desc: "Ultra 4 has a Hiking workout that lets you track your pace, distance, elevation gain, and calories burned. See how high you’ve climbed in real time, and get your total elevation gain when you’re finished. Sky’s the limit.", stem: P("adventure/adventure_hiking__ezuoydzq6zo2") },
            { title: "Blaze a trail with custom routes.", desc: "Create and save custom walking and hiking routes on your iPhone. Choose from different route options: One way, out and back, or a loop — even get turn-by-turn directions — right from your wrist.", stem: P("adventure/adventure_custom_routes__f1wdpauyn6qa") },
            { title: "Download offline maps.", desc: "Plan ahead and download a map of where you’ll be hiking on your iPhone. It will automatically sync to your watch, so you’ll know where to go, even when you don’t.22", stem: P("adventure/adventure_offline_maps__ea1lvjboo4ae") },
            { title: "Create waypoints in the Compass app.", desc: "Mark your current location or drop one on a trailhead or campsite. Cellular and emergency call waypoints automatically mark your most recent location within your available networks.", stem: P("adventure/adventure_compass_app__bx5orj85p1w2") },
            { title: "Go deeper with full dive capabilities.", desc: "The Oceanic+ app from Huish Outdoors and other apps turn Ultra 4 into a fully capable dive computer.23 Turn the Digital Crown to get useful data at a glance. Equipped with all the safety warnings you’d expect, the app constantly calculates and monitors your dive parameters.", stem: P("adventure/adventure_dive__f1eq01ftrbam") },
            { title: "Let the Tides app guide you.", desc: "Get seven days of estimated information including rising, falling, high, and low tides, sunrise, and sunset. Check conditions at shorelines around the world, or search over 115,000 beaches by name.", stem: P("adventure/adventure_tides_app__df79wf7rh7iq") },
          ]}
        />
      </section>

      {/* ── Section 15: On the Go ── */}
      <section id="on-the-go" className="bg-[#f5f5f7] pt-16 text-black">
        <HeadLight title="On the Go" sub="Connected. Protected." />
        <p className="mx-auto -mt-6 max-w-[720px] px-4 pb-8 text-center text-[17px] leading-relaxed text-[#6e6e73]">
          Now when you’re off the grid without cellular or Wi-Fi, Ultra 4 can help you stay connected using built-in
          satellite communications. So wherever adventure takes you, you can still keep in touch with loved ones. And
          if you need critical help, you can contact emergency services via satellite — right from your wrist. Packed
          with innovative safety firsts, Apple Watch Ultra 4 has your back. It’s designed to summon help when you need
          it most — even if you can’t reach your iPhone.6
        </p>
        <div className="mx-auto max-w-[1024px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <ApplePicture stem={P("on-the-go/go_hero__df3r8mztpmoi")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
        <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 md:grid-cols-3">
          {[
            { t: "Emergency SOS via satellite", d: "With a few simple taps, Ultra 4 can gather critical information, connect you to a satellite, and reach out to emergency services, so you can get the assistance you need as quickly as possible.24", s: P("on-the-go/icon_sos__etxaj2zyxms2") },
            { t: "Fall Detection", d: "If Ultra 4 detects that you’ve taken a hard fall, it can automatically help connect you with emergency services, provide dispatchers with your location, and notify loved ones.24", s: P("on-the-go/icon_fall_detection__cgri1eb15sfm") },
            { t: "Crash Detection", d: "If you’ve been in a severe car crash, Ultra 4 can automatically help call emergency services, share your location, and notify your emergency contacts.24", s: P("on-the-go/icon_detection__zdmrlko9rgiy") },
            { t: "Siren", d: "If you need to attract attention when you’re lost or injured, hold down the Action button to activate a siren that can be heard up to 600 feet or 180 meters away.", s: P("on-the-go/icon_siren__dhr7870rshea") },
            { t: "Messages via satellite", d: "Use Messages via satellite to stay in touch or contact emergency services wherever you are. You can also send and receive texts, emoji, and Tapbacks via iMessage or use SMS.6", s: P("on-the-go/icon_messages__1kbywutv18i6") },
            { t: "Find My via satellite", d: "Use Find My to share your location via satellite so friends and family know where you are. Before you go off grid, add the contacts you plan to share your location with using your paired iPhone or Ultra 4.6", s: P("on-the-go/icon_find_my__eovmd9ynwrki") },
            { t: "Flashlight", d: "Illuminate nearby objects, alert others when you’re running at night, or shine a light in a campsite. You can also customize the Action button to control it.", s: P("on-the-go/icon_flashlight__fv44soq1ddu2") },
            { t: "Medical ID", d: "In an emergency, first responders are able to quickly access critical medical information — like allergies or medications — directly from your Ultra 4.", s: P("on-the-go/icon_medical_id__c97ijrhzbaky") },
            { t: "All you need is your watch", d: "With Apple Watch Ultra 4, you can keep in touch with the people and things that matter most no matter where you are.25 Superfast 5G capability lets you text, talk, download apps, stream music or podcasts, and work out on the go.26", s: P("on-the-go/icon_5g__gcu1inru5cuy") },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="w-16">
                <ApplePicture ext="png" stem={c.s} className="block w-full" imgClassName="w-full" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 16: Worth the upgrade ── */}
      <section id="upgrade" className="bg-[#f5f5f7] pb-4 pt-12 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Worth the upgrade? 100 percent.</h2>
          <p className="mt-3 text-[17px] text-[#6e6e73]">A few ways Ultra 4 gives you more.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1024px] gap-4 px-4 pb-8 md:grid-cols-3">
          {[
            { t: "Health Sensing System", d: "Most accurate heart rate sensing in a wearable.2", s: P("upgrade/upgraders_ultra_health_sensing__coyzh23059qq") },
            { t: "Readiness and Vitals", d: "Readiness and Vitals with improved HRV.13", s: P("upgrade/upgraders_ultra_hrv__bq8dwsn934wi") },
            { t: "Siri AI and Audio Intelligence", d: "Siri AI4 and Audio Intelligence.5", s: P("upgrade/upgraders_ultra_siri_ai__bewm16yeb0z6") },
            { t: "Sleep health and hypertension", d: "Sleep apnea27 and hypertension notifications.16", s: P("upgrade/upgraders_ultra_health_notifications__bptt0mx62sr6") },
            { t: "Stay connected", d: "Stay safe and connected with satellite communications.6", s: P("upgrade/upgraders_ultra_connected__eltnfliatvau") },
            { t: "Built tougher", d: "Larger display, Action button, and improved GPS.", s: P("upgrade/upgraders_series_display__cgr2ax6g81w2") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[500px] items-center justify-center gap-4 rounded-2xl bg-white p-6 shadow-sm">
          <div className="w-20">
            <ApplePicture ext="png" stem={P("upgrade/upgraders_logo_trade_in__cgt7bborydaq")} className="block w-full" imgClassName="w-full" />
          </div>
          <p className="text-[15px] text-[#6e6e73]">
            Get credit toward a new Apple Watch when you trade in an eligible device.28
          </p>
        </div>
      </section>

      {/* ── Section 17: Why Apple is the best place to buy Apple Watch ── */}
      <section id="incentive" className="bg-[#f5f5f7] pb-4 pt-4 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Why Apple is the best place to buy Apple Watch.</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1024px] gap-4 px-4 pb-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Apple Upgrade", d: "Love it. Lease it. Upgrade it. Lease a new Apple Watch with low monthly payments for 12 or 24 months and upgrade at the end of your term.◊", s: P("incentive/incentive_upgrade_watch__edxoel1vo12e") },
            { t: "Apple Trade In", d: "Save on a new Apple Watch with a trade-in. Get up to $200 in credit toward your next Apple Watch when you trade in an eligible device.28", s: P("incentive/incentive_trade_in__bxy4gy82ov6u") },
            { t: "Ways to Buy", d: "Pay over time, interest-free. When you choose to check out at Apple with Apple Card Monthly Installments.◊◊", s: P("incentive/incentive_card__b4if26wfnhma") },
            { t: "Education", d: "Save on Apple Watch29 with education pricing.** College students and educators can save through the Apple Store.**", s: P("incentive/incentive_education__cnrghv4anhci") },
            { t: "Delivery and Pickup", d: "Get your order quickly and easily. Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.", s: P("incentive/incentive_delivery_and_pickup__eqx3p0o33quu") },
            { t: "Personal Setup", d: "Make the most of your Apple Watch with an online session. Talk one on one with a Specialist to set up your Apple Watch and discover new features.", s: P("incentive/incentive_personal_session__esyb8vwkksgi") },
            { t: "Guided Video Shopping", d: "Shop live with a Specialist. Let us help you find what you need and answer all of your questions, one on one over video.", s: P("incentive/incentive_support__dqi9xhb68c2u") },
            { t: "Apple Store App", d: "Explore a shopping experience designed around you. Use the app to get a more personal way to shop.", s: P("incentive/incentive_store_app__ckx04hi31ifm") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 18: Keep exploring Apple Watch (compare) ── */}
      <section id="contrast" className="bg-[#f5f5f7] pb-4 pt-4 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight">Keep exploring Apple Watch.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { t: "New Apple Watch Ultra 4", s: "The ultimate sports and adventure watch.", p: "From $799 or $66.58/mo. for 12 mo.* Lease from $24.99/mo. for 24 mo. with Apple Upgrade◊", stem: P("contrast/compare_ultra4__d5x92dr0j3sm"), h: "/apple-watch-ultra-4" },
              { t: "New Apple Watch Series 12", s: "The ultimate way to watch your health.", p: "From $399 or $33.25/mo. for 12 mo.* Lease from $11.99/mo. for 24 mo. with Apple Upgrade◊", stem: P("contrast/contrast_s12__os0o0gt226ym"), h: "/apple-watch-series-12" },
            ].map((c) => (
              <a key={c.t} href={c.h} className="group block rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mx-auto max-w-[260px]">
                  <ApplePicture ext="png" stem={c.stem} className="block w-full" imgClassName="w-full" />
                </div>
                <h3 className="mt-5 text-[21px] font-semibold group-hover:text-blue-600">{c.t}</h3>
                <p className="mt-1 text-[15px] text-[#6e6e73]">{c.s}</p>
                <p className="mt-2 text-[15px] font-semibold leading-snug">{c.p}</p>
                <p className="mt-3 text-[15px] text-[#2997ff]">Learn more <span aria-hidden="true">›</span></p>
              </a>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SPEC_ROWS.map((r) => (
              <div key={r.label} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-[14px] font-semibold">{r.label}</p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed">
                  <li><span className="text-[#1d1d1f]">Ultra 4</span><p className="text-[#6e6e73]">{r.ultra}</p></li>
                  <li><span className="text-[#1d1d1f]">Series 12</span><p className="text-[#6e6e73]">{r.s12}</p></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 19: Environment + values ── */}
      <section id="environment" className="bg-[#f5f5f7] pb-4 pt-4 text-black">
        <div className="mx-auto max-w-[980px] px-4">
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Apple Watch Ultra 4 and the environment.", P("environment/icon_recycling__csdx2jvieqc2"), "Made with 45% recycled material by weight."],
              ["", P("environment/icon_electricity__gb9sibi6l1aq"), "Manufactured with 100% renewable electricity."],
              ["", P("environment/icon_package__czaoa91q0l26"), "Ships in compact packaging for 30% more units per trip."],
            ].map(([h, s, t]) => (
              <div key={t as string}>
                <div className="w-16">
                  <ApplePicture ext="png" stem={s as string} className="block w-full" imgClassName="w-full" />
                </div>
                {h as string && <p className="mt-3 text-[21px] font-semibold leading-snug">{h as string}</p>}
                <p className="mt-1 text-[15px] text-[#6e6e73]">{t as string}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[980px] border-t border-black/10 px-4 pt-10">
          <h2 className="text-[24px] font-semibold">Our values lead the way.</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {[
              { h: "A plan as innovative as our products.", d: "We’re committed to bringing net emissions to zero across our entire carbon footprint by 2030.", s: P("values/icon_environment__e9tgg0axcoy2") },
              { h: "Privacy. That’s Apple.", d: "Privacy is a fundamental human right. Every product and service is designed to help keep your data safe and secure.", s: P("values/icon_privacy__bmyx0fqh262q") },
              { h: "Innovation that’s accessible by design.", d: "Our products and services are designed for everyone, with built-in features to help you do what you love, your way.", s: P("values/icon_accessibility__cs1srmzy5fau") },
            ].map((c) => (
              <div key={c.h}>
                <div className="w-16">
                  <ApplePicture ext="png" stem={c.s} className="block w-full" imgClassName="w-full" />
                </div>
                <h3 className="mt-3 text-[15px] font-semibold">{c.h}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-[980px] px-4">
          <p className="text-[13px] leading-relaxed text-[#6e6e73]">
            *Pricing is for illustrative purposes. Final price is determined at time of purchase, and amounts may vary.
            ◊ Apple Upgrade lease terms apply. 1 Battery life varies by use, settings, and configuration.
          </p>
        </div>
      </section>
    </main>
  );
}

function HeadLight({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-[890px] px-4 pb-10 text-center">
      <h2 className="text-[40px] md:text-[56px] font-semibold tracking-tight">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-[640px] text-[21px] leading-relaxed text-[#6e6e73]">{sub}</p>}
    </div>
  );
}