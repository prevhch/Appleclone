"use client";
import { useState } from "react";
import Link from "next/link";
import { BannerBar, ProductSubnav } from "@/components/Product";
import InlineMedia from "@/components/InlineMedia";
import ApplePicture from "@/components/ApplePicture";

const P = (stem: string) => `/apple/v/apple-watch-series-12/a/images/overview/${stem}`;
const V = (anim: string) =>
  `/apple/105/media/us/apple-watch-series-12/2026/d1e8480b-cebf-43a2-abc8-748767c2e122/anim/${anim}/`;

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

/** Scroll-cued worker: each video starts when its slot enters the viewport, then plays through (never paused). */
function CuedMedia({
  stem,
  end,
  video,
  loop = false,
}: {
  stem: string;
  end: string;
  video: string;
  loop?: boolean;
}) {
  return (
    <InlineMedia
      startStem={stem}
      endStem={end}
      videoBase={video}
      loop={loop}
      className="relative overflow-hidden bg-black"
      imgStart="h-full w-full object-cover"
      imgEnd="h-full w-full object-cover"
    />
  );
}

function StylesGrid({ items, cols = "md:grid-cols-3 lg:grid-cols-4" }: { items: { title: string; desc: string; stem: string; badge?: string }[]; cols?: string }) {
  return (
    <div className={`mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 ${cols}`}>
      {items.map((it) => (
        <div key={it.title} className="overflow-hidden rounded-2xl bg-[#161617]">
          <ApplePicture stem={it.stem} className="block w-full" imgClassName="w-full" />
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

function FinishPicker() {
  const [sel, setSel] = useState("ceramic_pearl_white");
  const finishes = [
    { id: "ceramic_pearl_white", label: "Pearl White ceramic", stem: P("product-viewer/product_finishes_ceramic_pearl_white__m797y0r8nsqy") },
    { id: "ceramic_night_blue", label: "Night Blue ceramic", stem: P("product-viewer/product_finishes_ceramic_night_blue__c86m67tq2c8y") },
    { id: "aluminum_dark_bronze", label: "Dark Bronze aluminum", stem: P("product-viewer/product_finishes_aluminum_dark_bronze__cn6ty9h5yliu") },
    { id: "aluminum_light_gold", label: "Light Gold aluminum", stem: P("product-viewer/product_finishes_aluminum_light_gold__cr815xqxzoia") },
    { id: "aluminum_black", label: "Black aluminum", stem: P("product-viewer/product_finishes_aluminum_black__ebajxwacb88y") },
    { id: "aluminum_space_gray", label: "Space Gray aluminum", stem: P("product-viewer/product_finishes_aluminum_space_gray__d83ign704owi") },
    { id: "titanium_radiant_gold", label: "Radiant Gold titanium", stem: P("product-viewer/product_finishes_titanium_radiant_gold__dhabqmjal4wi") },
    { id: "titanium_natural", label: "Natural titanium", stem: P("product-viewer/product_finishes_titanium_natural__dcwev7ob2quu") },
  ];
  const cur = finishes.find((f) => f.id === sel) ?? finishes[0];
  return (
    <div>
      <div className="mx-auto mb-6 flex max-w-[760px] flex-wrap justify-center gap-2 px-4 text-[12px]">
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

function WatchTabs({ tabs }: { tabs: { id: string; label: string; desc: string; stem?: string; end?: string; video?: string; finish?: boolean }[] }) {
  const [sel, setSel] = useState(tabs[0]?.id ?? "");
  const tab = tabs.find((t) => t.id === sel) ?? tabs[0];
  return (
    <div>
      <div className="mx-auto flex max-w-[820px] flex-wrap justify-center gap-3 px-4 pb-8 text-[14px]">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setSel(t.id)}
            className={`rounded-full px-4 py-2 ${sel === t.id ? "bg-white text-black" : "bg-white/15 text-back"}`}
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
            <CuedMedia stem={tab.stem!} end={tab.end!} video={tab.video} />
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

const NAV_ITEMS = [
  { label: "Overview", href: "/apple-watch-series-12" },
  { label: "Why Apple Watch", href: "/apple-watch-series-12" },
  { label: "Tech Specs", href: "/apple-watch-series-12" },
  { label: "Compare", href: "/watch" },
  { label: "Buy", href: "/us/shop/goto/buy_watch/apple_watch_series_12" },
];

export default function WatchSeries12Page() {
  return (
    <main className="bg-black text-white">
      <BannerBar
        text="Pre-order Apple Watch Series 12. Available starting September 18."
        cta={{ label: "Pre-order", href: "/us/shop/goto/buy_watch/apple_watch_series_12" }}
      />
      <ProductSubnav title="Watch" items={NAV_ITEMS} dark />

      {/* ── Section 1: Media hero ─────────────────────────── */}
      <section className="relative bg-black">
        <div className="relative z-10 pt-[60px] pb-4 text-center">
          <div className="mx-auto w-64">
            <ApplePicture ext="png" stem={P("media-hero/hero_logo__fvzq3d0055e2")} className="block w-full" imgClassName="w-full" eager />
          </div>
          <p className="mt-6 text-[24px] md:text-[32px] font-semibold tracking-tight">A work of heart.</p>
          <p className="mt-4 text-[15px] text-white/60">
            Available starting September eighteenth
          </p>
          <p className="mt-2 text-[17px] text-white/70">
            From $399 or $33.25/mo. for 12 mo.* Lease from $11.99/mo. for 24 mo. with Apple Upgrade◊
          </p>
          <div className="mt-6">
            <Link
              href="/us/shop/goto/buy_watch/apple_watch_series_12"
              className="inline-flex items-center rounded-full bg-[#0071e3] px-5 py-2 text-[17px] font-medium hover:bg-[#0077ed]"
            >
              Pre-order
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-4">
          <InlineMedia
            startStem={P("media-hero/hero_startframe__d5jtosupk3u6")}
            endStem={P("media-hero/hero_endframe__e3wgo83nx5ci")}
            videoBase={V("hero")}
            loop
            className="relative aspect-[16/9]"
            imgStart="h-full w-full object-cover"
            imgEnd="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ── Section 2: Get the highlights ── */}
      <section id="highlights" className="bg-black py-4">
        <Head title="Get the highlights." />
        <StylesGrid
          cols="md:grid-cols-3"
          items={[
            { title: "Health Sensing System", desc: "All-new Health Sensing System delivers the most accurate heart rate sensing in a wearable.2", stem: P("highlights/highlights_sensing__b8jsk0rhldrm") },
            { title: "Readiness", desc: "Should you rest or put yourself to the test? Now a personal readiness score lets you know.", stem: P("highlights/highlights_readiness__f4up9oul6jmi") },
            { title: "HRV readings", desc: "More frequent heart rate variability, or HRV, readings help provide insights on stress and recovery.", stem: P("highlights/highlights_hrv_readings__drr6vi3iv62q") },
            { title: "High-frequency tracking", desc: "A new optical heart rate sensor enables high-frequency heart rate tracking every five seconds, all day long, so you’ll never miss a beat.", stem: P("highlights/highlights_tracking__b2abckg7nxci") },
            { title: "Health Age", desc: "In the redesigned Health app, learn which habits are influencing your Health Age and how to improve them.10  Coming late 2026.", stem: P("highlights/highlights_health_age__lv7nfxxen4yu"), badge: "Coming late 2026" },
          ]}
        />
        <div className="mx-auto grid max-w-[1024px] grid-cols-1 gap-4 px-4 pb-20 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-[#161617] md:col-span-2">
            <CuedMedia stem={P("highlights/highlights_siri_ai_startframe__dfzkgcm1m0q6")} end={P("highlights/highlights_siri_ai_endframe__4asbndv8az6a")} video={V("siri-highlights")} />
            <div className="p-5">
              <h3 className="text-[17px] font-semibold">Siri AI</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                Make every day more effortless with Siri AI.8 And seamless with Audio Intelligence, powered by the S11
                chip.9 Siri AI is rolling out in English. Some Audio Intelligence features coming in beta late 2026.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("highlights/highlights_safety__bwum1orfnp5y")} className="block w-full" imgClassName="w-full" />
            <div className="p-5">
              <h3 className="text-[17px] font-semibold">Peace of mind</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                A powerful health and fitness tracker designed with built-in safety features to bring you peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Take a closer look (product viewer) ── */}
      <section id="product-viewer" className="bg-[#0a0a0c] pt-8">
        <Head title="Take a closer look." />
        <WatchTabs
          tabs={[
            { id: "finishes", label: "Finishes", desc: "Finishes. Choose from eight stunning finishes, including sleek ceramic. Apple Watch Series 12 shown in Pearl White ceramic.", finish: true },
            { id: "sensing", label: "Health Sensing System", desc: "Health Sensing System. Redesigned with more capable optical and electrical sensors and larger, more power-efficient green LEDs, the sensing system unlocks deeper health and fitness insights.", stem: P("product-viewer/product_sensing_startframe__bskqnxebknki"), end: P("product-viewer/product_sensing_endframe__bcq0ii37b1n6"), video: V("product-sensing") },
            { id: "ceramic", label: "Ceramic Shield 2", desc: "Ceramic Shield 2. The aluminum cases on Apple Watch Series 12 now have Ceramic Shield 2 — which is tougher than any smartwatch glass and 60% tougher than Ion-X.11 Meet your perfect workout partner.", stem: P("product-viewer/product_ceramic_shield__fhlajf0soo2m") },
            { id: "water", label: "Water and dust resistance", desc: "Water and dust resistance. Apple Watch Series 12 is rated WR 50M12 and IP6X13 — perfect in the pool or ocean down to 6 meters and fully protected against dust.", stem: P("product-viewer/product_water_resistance__e0z94cxydfgy") },
            { id: "battery", label: "Battery life and fast charging", desc: "Battery life and fast charging. Get up to 24 hours of normal use.1 And with fast charging, just 15 minutes gets you up to 12 additional hours of battery life.14", stem: P("product-viewer/product_battery__cncdrquu28ya") },
            { id: "make-yours", label: "Make it yours", desc: "Make it yours. Express yourself with dozens of faces, including the new Siri Modular watch face, and a wide range of bands in a fresh mix of colors, styles, and materials.", stem: P("product-viewer/product_personalization__pt2k5wj9qbey") },
          ]}
        />
      </section>

      {/* ── Section 4: Advanced Health and Fitness Tracking ── */}
      <section id="health-tracking" className="bg-black pb-4">
        <Head eyebrow="Advanced Health and Fitness Tracking" title="Heartcore innovation." sub="The ultimate device for a healthy life just got healthier. Redesigned with more capable optical and electrical sensors, the all-new Health Sensing System works with the S11 chip to provide higher-frequency heart monitoring. Updated core sensors and larger, more power-efficient green LEDs give you richer heart data for more meaningful insights. So now you can really follow your heart." />
        <div className="mx-auto max-w-[980px] px-4 pb-16">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("health-tracking/watch_lights_startframe__ffnxndzxga6a")} end={P("health-tracking/watch_lights_endframe__dm8lygfrugeq")} video={V("watch-lights")} />
          </div>
        </div>
      </section>

      {/* ── Section 5: Heart rate ── */}
      <section id="heart-rate" className="bg-black pb-4">
        <div className="mx-auto grid max-w-[1024px] items-center gap-4 px-4 pb-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("heart-rate/hrv__dgzjlflrbi6a")} className="block w-full" imgClassName="w-full" />
          </div>
          <div className="p-4">
            <p className="text-[19px] leading-relaxed text-white/80">
              With the most accurate heart rate sensing in a wearable,2 Apple Watch Series 12 measures HRV as often as
              every five minutes and takes background heart rate readings every five seconds — the most frequent
              sensing ever for Apple Watch. And with the updated Heart Rate app and new watch face complications, you
              can easily view your readings anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Ready. Set. Know. ── */}
      <section id="readiness" className="bg-black pb-4">
        <Head title="Ready. Set. Know." sub="The new readiness experience can help you determine your capacity to take on the day by providing you with one simple score. Your score is determined each morning by analyzing your recent activity, vitals, and sleep — and it adjusts as you go about your day. So whether you’re training for a race or juggling a busy schedule, you can spend your energy on what matters most." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-[#161617]">
            <ApplePicture stem={P("readiness/fitness_hero__5h67iklblz62")} className="block w-full" imgClassName="w-full" />
          </div>
        </div>
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-16 md:grid-cols-2">
          {[
            { t: "Sleep tracking. A wake-up call for your sleep.", d: "Sleep quality is influenced by factors such as sleep duration, bedtime consistency, how often you wake up, and time spent in each sleep stage. Sleep score analyzes these factors every night and provides a classification and a score. You’ll see how the score is calculated, so you can understand the quality of your sleep and learn how to make it more restorative.", s: P("readiness/sleep-tracking/fitness_sleep_tracking__dpbiryi8pmeu") },
            { t: "HRV is now included in your overnight and new daytime vitals.", d: "HRV is an indicator of how your body responds to stress and recovery, with higher variability associated with better overall recovery. With Apple Watch Series 12 measuring HRV as often as every five minutes, you can spot shifts in your health even before they show up in your overnight metrics.3", s: P("readiness/hrv/fitness_hrv__ehzjvt69ux6q") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-[#161617]">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <div className="p-5">
                <h3 className="text-[17px] font-semibold">{c.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 7: Witness your fitness like never before ── */}
      <section id="workouts" className="bg-black pb-4">
        <Head title="Witness your fitness like never before." sub="Tap into a world of workouts. Track your progress with a more accurate step count. Stay motivated with advanced metrics and new Workout Buddy insights. With all these features at hand, Apple Watch Series 12 is geared up to be a more powerful fitness tracker. It’s go time." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <InlineMedia
              startStem={P("workouts/workout_hero_startframe__fwirudxaveqi")}
              endStem={P("workouts/workout_hero_endframe__ck5g3jgyfuj6")}
              videoBase={V("thermal")}
              loop
              className="relative overflow-hidden bg-black"
              imgStart="h-full w-full object-cover"
              imgEnd="h-full w-full object-cover"
            />
          </div>
        </div>
        <StylesGrid
          cols="md:grid-cols-2"
          items={[
            { title: "The Workout app. For all the ways you move.", desc: "From badminton and barre to swimming and cycling, Apple Watch has you covered in the Workout app. And you can make light work of your next strength training session by tracking your time, heart rate, and calories.", stem: P("workouts/workout_workouts__dvmbk6wj1k8y") },
            { title: "Your perfect running partner.", desc: "Apple Watch Series 12 helps you take your training further, from setting specific time and distance goals with Pacer to racing against your best times on your favorite runs with Race Route. It even recognizes when you’re at a track for more precise metrics with Automatic Track Detection. Want to tailor your run? Create a Custom Workout with a warmup period, recovery interval, and more.", stem: P("workouts/workout_running__cr2g5h8f5us2") },
            { title: "Never miss a step.", desc: "Whether you’re out for a leisurely stroll with your coffee in the morning or running on the treadmill at night, Series 12 gives you a more accurate step count and distance measurements all day long. And now you can more easily check your step count, right from your watch face.", stem: P("workouts/workout_pedometer__bpf3j84qnc3m") },
            { title: "Push your progress with enhanced Workout Buddy.", desc: "Get real-time encouragement right when you need it with new insights about your pace, distance, and workout progress.15 And you can finally leave your iPhone at home — all you need is Apple Watch with cellular.16", stem: P("workouts/workout_workout_buddy__1scxxco4wiqi") },
          ]}
        />
      </section>

      {/* ── Section 8: Know your body. Insights and out. ── */}
      <section id="insights" className="bg-black pb-4">
        <Head title="Know your body. Insights and out." sub="The more insights you have, the more empowered you are to take action. From Cycle Tracking to the ECG app and more, Apple Watch Series 12 is an advanced health tracker with in-depth clinical validation and FDA-cleared features to give you a fuller picture of your overall health." />
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-4"
          items={[
            { title: "Track and understand changes in your cycle.", desc: "Cycle Tracking is with you through every stage of your menstrual health journey. Log your cycle and get predictions for your period, fertile window, and retrospective ovulation estimates. Cycle Tracking can notify you when your cycle patterns are suggestive of perimenopause as well as provide support during menopause.6 Welcome to the new status flow.", stem: P("insights/health_cycle__byxreob06bki") },
            { title: "Get notified of chronic high blood pressure.", desc: "Series 12 can notify you if it identifies patterns of hypertension. How? The optical sensor provides data to an algorithm that can detect potential hypertension by analyzing how your blood vessels respond to beats of the heart over 30-day periods.5", stem: P("insights/health_hypertension__ft0cthd7scae") },
            { title: "Measure your blood oxygen. It’s a breathtaking innovation.", desc: "The Health app on iPhone uses data from the sensor in Apple Watch to enable you to take on-demand readings of your blood oxygen as well as background readings, day and night.17", stem: P("insights/health_blood_oxygen__flia6nz9sr6u") },
            { title: "Follow your heart on the ECG app.", desc: "With Series 12 heart health tracking, you can check for signs of atrial fibrillation, or AFib, right from your wrist by using the ECG app to generate a single-lead electrocardiogram.18", stem: P("insights/health_ecg_app__dhixamzuo7sm") },
          ]}
        />
      </section>

      {/* ── Section 9: Redesigned Health app ── */}
      <section id="health-app" className="bg-black pb-4">
        <Head title="Redesigned Health app. Your present and future. On tap." sub="With Apple Intelligence at its core, the redesigned Health app transforms your health and fitness data into proactive insights delivering a whole new view of your health — today and over time. Featuring groundbreaking privacy protections, your personalized hub securely brings together data from your Apple Watch and synced medical records. And since the Health app adapts to you, you’ll get a real-time read on your health and longevity.10">
          <p className="text-[15px] text-[#2997ff] font-semibold">Coming late 2026</p>
        </Head>
        <StylesGrid
          cols="md:grid-cols-2 lg:grid-cols-4"
          items={[
            { title: "Insights", desc: "Tap into the Insights tab for a quick look at daily metrics and trends in your heart, sleep, fitness, vitals, readiness, and cycle tracking. Apple Intelligence makes sense of your daily habits and offers personalized guidance, like tips on how to improve your sleep routine.8 It’s all about you — right here, right now.", stem: P("health-app/health_app_today__bv9iexsqpoqa") },
            { title: "Health Age", desc: "Health Age shows you exactly which factors are adding years and which ones are taking them off. With combined data from your Apple Watch like VO2 max, HRV, and sleep, you’ll learn what’s affecting your Health Age and how to improve it.10", stem: P("health-app/health_app_health_age__d7hlfsqsone6") },
            { title: "Longevity", desc: "The Longevity tab turns metrics from your Apple Watch and iPhone into helpful analytics that build a foundation for a healthier future. Explore categories like heart health, sleep, and movement to get a clear read on your health.", stem: P("health-app/health_app_health_check__c4e0z6eujjyq") },
            { title: "Personalized guidance", desc: "Personalization is built into every part of the Health app, so you always know where you stand and how to improve. Get timely, personalized guidance powered by Apple Intelligence, like a suggestion to boost your cardio by adding intervals to your morning run.8 It’s expert insight, made personal.", stem: P("health-app/health_app_personalized__bg3jbtf1hwmq") },
          ]}
        />
      </section>

      {/* ── Section 10: Wearable AI Assistant ── */}
      <section id="siri" className="bg-black pb-4">
        <Head eyebrow="Wearable AI Assistant" title="Say hello to Siri AI." sub="With all-new Siri AI, Apple Watch Series 12 can tap into broad world knowledge and your personal context to be even more helpful. Using just your voice, you can engage in natural, back-and-forth conversations, brainstorm ideas for workout routines, and get the latest wellness tips with Siri — all from your wrist.8 And now Audio Intelligence uses the built-in microphone and secure S11 chip in Series 12, alongside the power of Apple Intelligence, to help you make sense of what you hear in a private and secure way.9 Just like Visual Intelligence on iPhone helps you make sense of what you see.">
          <p className="text-[13px] text-white/50">Siri AI is rolling out in English. Some Audio Intelligence features coming in beta late 2026. Usage limits may apply.</p>
        </Head>
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <ApplePicture stem={P("siri/wearable_hero_orb__ft1pben6gui6")} className="block w-full" imgClassName="w-full rounded-2xl" />
        </div>
        <StylesGrid
          cols="md:grid-cols-3 lg:grid-cols-5"
          items={[
            { title: "Revisit conversations in the Siri app.", desc: "Ask Siri a question on your iPhone or any other Apple device synced with iCloud, and pick up where you left off on your Apple Watch. Pin conversations and see the same content, including images, across your devices.", stem: P("siri/wearable_siri_app__1onvpzf7haqe") },
            { title: "Siri Recap can summarize your chats.", desc: "Siri Recap transforms your conversations into high-level notes, so you can stay focused and present. Each Siri Recap includes a title, a summary, and key points that you can review in the Siri app.19 Siri Recap coming in beta late 2026.", stem: P("siri/wearable_recap__e2kup817kl2e") },
            { title: "Live Rewind catches what you missed.", desc: "Did someone say something you couldn’t hear in a loud restaurant? Just double-click the Digital Crown, and Live Rewind transcribes what was said in the last 15 seconds.19 Live Rewind coming in beta late 2026.", stem: P("siri/wearable_live_rewind__9yvg76q04gym") },
            { title: "Sound Recognition notifies you.", desc: "Designed for those who are Deaf or hard of hearing, Sound Recognition can listen for sounds you don’t want to miss, like sirens, alarms, doorbells, or a crying baby.20", stem: P("siri/wearable_sound_recognition__ch2iszgdsseq") },
            { title: "Shazam can now tell you what’s playing.", desc: "Shazam can instantly detect the music playing around you and automatically display the song title and artist’s name on the Music Recognition widget in the Smart Stack — all without a tap.21", stem: P("siri/wearable_shazam__c9znlnbgvp8i") },
          ]}
        />
      </section>

      {/* ── Section 11: Great powers come with great privacy ── */}
      <section id="privacy" className="bg-black pb-4">
        <Head title="Great powers come with great privacy." />
        <div className="mx-auto max-w-[980px] px-4 pb-8">
          <div className="overflow-hidden rounded-2xl bg-black">
            <CuedMedia stem={P("privacy/apple_lock_startframe__e7xqmtgmwuye")} end={P("privacy/apple_lock_endframe__bm3ul4s1xjyq")} video={V("apple-lock")} />
          </div>
        </div>
        <p className="mx-auto max-w-[720px] px-4 pb-16 text-center text-[17px] leading-relaxed text-white/70">
          Made possible by the new S11 chip, Audio Intelligence features are designed to protect your privacy and
          security at every step. These features do not create or store audio recordings, and raw audio used for
          processing is completely inaccessible, even to Apple, and is deleted after processing. There is no speaker
          attribution, and your Live Rewind transcripts and Siri Recaps in the Siri app are end-to-end encrypted
          through iCloud syncing. You decide whether to opt in to these features, and you control how you use them.9
        </p>
      </section>

      {/* ── Section 12: On the Go ── */}
      <section id="on-the-go" className="bg-[#f5f5f7] pt-16 text-black">
        <HeadLight title="On the Go" sub="Connected. Protected." />
        <p className="mx-auto -mt-6 max-w-[640px] px-4 pb-8 text-center text-[17px] leading-relaxed text-[#6e6e73]">
          Series 12 makes it easy to call, text, and stream music with 5G.22 And it’s packed with innovative safety
          features, like Fall Detection and emergency services, so you can get help when you need it most — even if you
          can’t reach your iPhone.16
        </p>
        <div className="mx-auto grid max-w-[1024px] gap-4 px-4 pb-8 md:grid-cols-3">
          {[
            { s: P("on-the-go/go_hero_left__etd945l58dm6") },
            { s: P("on-the-go/go_hero_middle__b0er88ulk12a") },
            { s: P("on-the-go/go_hero_right__cqa1usfv1y82") },
          ].map((c, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-[1024px] grid-cols-2 gap-4 px-4 pb-20 md:grid-cols-3">
          {[
            { t: "Emergency SOS. ASAP.", d: "Need urgent help? Just press and hold the side button on your Apple Watch Series 12 to call emergency services and share your location.23", s: P("on-the-go/icon_sos__gend00c6g2ai") },
            { t: "Fall Detection at the ready.", d: "If Series 12 detects that you’ve taken a hard fall, it can automatically help connect you with emergency services, provide dispatchers with your location, and notify loved ones.23", s: P("on-the-go/icon_fall_detection__cwz0zewx26aa") },
            { t: "Crash Detection. Your guardian on the go.", d: "If you’ve been in a severe car crash, Series 12 can automatically help call emergency services, share your location, and notify your emergency contacts.23", s: P("on-the-go/icon_crash_detectino__bw5l3ss03b42") },
            { t: "Apple Pay lets you tap, pay, and go.", d: "Pay for just about anything — from your favorite latte to your next subway ride24 — just by tapping your Apple Watch wherever you see the contactless symbol. Quick and convenient.", s: P("on-the-go/icon_apple_pay__dukfm4ski282") },
            { t: "Open a widget in the Smart Stack with a single tap.", d: "When your hands are full, use a new gesture — a single tap of your index finger and thumb — to select an individual Smart Stack widget and quickly see what’s relevant to you.", s: P("on-the-go/icon_smart_stack__fl3oelhv1iuu") },
            { t: "Press play on personalized playlists with Apple Music.", d: "Let Apple Music choose the best playlist based on the workout you’re doing and the music you love. Time to turn it up.25", s: P("on-the-go/icon_playlists__flrm9djpsnma") },
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

      {/* ── Section 13: Worth the upgrade? Absolutely. ── */}
      <section id="upgrade" className="bg-[#f5f5f7] pb-4 pt-12 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Worth the upgrade? Absolutely.</h2>
          <p className="mt-3 text-[17px] text-[#6e6e73]">A few ways Series 12 gives you more.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1024px] gap-4 px-4 pb-8 md:grid-cols-3">
          {[
            { t: "Health Sensing System", d: "Most accurate heart rate sensing in a wearable2 with all-day high-frequency heart rate tracking.", s: P("upgrade/upgraders_hss__ctt60gl1qp6q") },
            { t: "Readiness and Vitals", d: "Readiness and Vitals with HRV, blood oxygen, and more3 — know your body through the day.", s: P("upgrade/upgraders_readiness__bmcqa58yw7yu") },
            { t: "Sleep score", d: "Sleep score with sleep apnea4 and hypertension notifications5.", s: P("upgrade/upgraders_sleep_score__fzudyog2s0ya") },
            { t: "Redesigned Health app", d: "Health Age provides insights into your longevity10.", s: P("upgrade/upgraders_health_app__dykxos1v2biq") },
            { t: "Advanced Cycle Tracking", d: "Advanced Cycle Tracking6 with wrist temperature sensing7.", s: P("upgrade/upgraders_cycle_tracking__e288paf4ejo2") },
            { t: "Siri AI and Audio Intelligence", d: "Siri AI8 and Audio Intelligence9 make every day more effortless.", s: P("upgrade/upgraders_siri_ai__ez22b3ii8p6q") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 14: Why Apple is the best place to buy Apple Watch ── */}
      <section id="incentive" className="bg-[#f5f5f7] pb-4 pt-4 text-black">
        <div className="mx-auto max-w-[1024px] px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight">Why Apple is the best place to buy Apple Watch.</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1024px] gap-4 px-4 pb-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { t: "Apple Upgrade", d: "Love it. Lease it. Upgrade it. Lease a new Apple Watch with low monthly payments for 12 or 24 months and upgrade at the end of your term.", s: P("incentive/incentive_upgrade_watch__entix0kduaeu") },
            { t: "Apple Trade In", d: "Save on a new Apple Watch with a trade-in. Get up to $200 in credit toward your next Apple Watch when you trade in an eligible device.26", s: P("incentive/incentive_trade_in__gby11d6ih662") },
            { t: "Ways to Buy", d: "Pay over time, interest-free. When you choose to check out at Apple with Apple Card Monthly Installments.", s: P("incentive/incentive_card__gg5oqo6fykey") },
            { t: "Education", d: "Save on Apple Watch27 with education pricing. College students and educators can save through the Apple Store.", s: P("incentive/incentive_education__ewenx8ouxnee") },
            { t: "Delivery and Pickup", d: "Get your order quickly and easily. Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.", s: P("incentive/incentive_delivery_and_pickup__gha7r77dyve6") },
            { t: "Personal Setup", d: "Make the most of your Apple Watch with an online session. Talk one on one with a Specialist to set up your device and discover new features.", s: P("incentive/incentive_personal_session__b3elbijgrlle") },
            { t: "Guided Video Shopping", d: "Shop live with a Specialist. Let us help you find what you need and answer all of your questions, one on one over video.", s: P("incentive/incentive_support__g3vhevty17yy") },
            { t: "Apple Store App", d: "Explore a shopping experience designed around you. Use the app to get a more personal way to shop.", s: P("incentive/incentive_store_app__fjn6v0c40h26") },
          ].map((c) => (
            <div key={c.t} className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <ApplePicture stem={c.s} className="block w-full" imgClassName="w-full" />
              <h3 className="mt-4 text-[17px] font-semibold">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6e6e73]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 15: Keep exploring Apple Watch ── */}
      <section id="contrast" className="bg-[#f5f5f7] pb-4 pt-4 text-black">
        <div className="mx-auto max-w-[1024px] px-4">
          <h2 className="text-center text-[28px] md:text-[40px] font-semibold tracking-tight">Keep exploring Apple Watch.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { t: "Apple Watch Series 12", s: "The ultimate way to watch your health.", p: "From $399 or $33.25/mo. for 12 mo.*", stem: P("contrast/contrast_s12__geydzhptskae"), h: "/apple-watch-series-12" },
              { t: "Apple Watch SE 3", s: "Essential health features at a great value.", p: "From $249 or $20.75/mo. for 12 mo.*", stem: P("contrast/contrast_se3__d4pny2jbmre6"), h: "/apple-watch-se-3" },
            ].map((c) => (
              <a key={c.t} href={c.h} className="group block rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mx-auto max-w-[260px]">
                  <ApplePicture ext="png" stem={c.stem} className="block w-full" imgClassName="w-full" />
                </div>
                <h3 className="mt-5 text-[21px] font-semibold group-hover:text-blue-600">{c.t}</h3>
                <p className="mt-1 text-[15px] text-[#6e6e73]">{c.s}</p>
                <p className="mt-2 text-[17px] font-semibold">{c.p}</p>
                <p className="mt-3 text-[15px] text-[#2997ff]">Learn more <span aria-hidden="true">›</span></p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 16: Environment + footnote ── */}
      <section id="environment" className="bg-[#f5f5f7] pb-16 pt-8 text-black">
        <div className="mx-auto max-w-[980px] border-t border-black/10 px-4 pt-10">
          <h2 className="text-[24px] font-semibold">Apple Watch Series 12 and the environment.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Made with 40% recycled material by weight.", P("environment/icon_recycling__f4kfvzq1q0uq")],
              ["Manufactured with 100% renewable electricity.", P("environment/icon_electricity__cqt7q9mp76qa")],
              ["Ships in compact packaging for 10% more units per trip.", P("environment/icon_package__ghbdbpstotua")],
            ].map(([t, s]) => (
              <div key={t as string}>
                <div className="w-16">
                  <ApplePicture ext="png" stem={s as string} className="block w-full" imgClassName="w-full" />
                </div>
                <p className="mt-3 text-[15px] font-semibold">{t as string}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-[980px] px-4">
          <p className="text-[13px] leading-relaxed text-[#6e6e73]">
            *Pricing is for illustrative purposes. Final price is determined at time of purchase, and amounts may vary.
            ◊ Apple Upgrade lease terms apply. 1 Battery life varies by use, settings, and configuration. 2 By
            wearable. 3 HRV measurements use the new Health Sensing System. 4 Sleep apnea notifications are not
            intended or validated for use by persons under 18 years of age. 5 Hypertension notifications are not
            intended or validated for use by persons under 22 years of age. 6 Cycle Tracking should not be used for
            contraception or as a fertility indicator. 7 Wrist temperature is not a substitute for a thermometer.
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