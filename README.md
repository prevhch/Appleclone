# Appleclone — School Project

Educational fair-use clone of apple.com homepage + core routes.
Built with Next.js 16 + Tailwind + Framer Motion patterns.

## Same images/videos — saved, not screen-recorded
`npm run fetch:apple` downloads the SAME files apple.com serves into `public/apple/`:
- `hero_iphone_18_pro_preorder_startframe__..._large.jpg` → video → `hero_iphone_18_pro_preorder__..._large.jpg`
- `hero_apple_upgrade_startframe...` → video → `hero_apple_upgrade...`
- MP4s: full variant set per tile — hero: large/medium/small/largetall/mediumtall
  (+_2x retina); promo: large/medium/small (+_2x). Promo tall framings don't
  exist on Apple (probe-verified 404), matching Apple's hero-only tall logic.
- Promo JPGs + logo PNGs (carriers, Watch 12/Ultra 4, AirPods 5, MacBook Air M5, Apple Card)

Already fetched (4.2MB in `public/apple`). Source credit: © Apple Inc., apple.com.
Do not redistribute outside coursework.

## Pic → Video → Pic (plays when viewed, finishes offscreen)
`src/components/HeroScrub.tsx` mirrors Apple's `inline-media.built.js`
(play-kf `t - (100vh - 50h)` → `b`): startframe JPG poster → muted video
plays once on first view (no `loop`, like Apple's tags) → keeps playing to
`ended` even when scrolled out of view (Apple only pauses on exit when
`video.loop` is true) → crossfades to the endframe JPG. Reduced motion shows
the endframe still.

## Run
npm install
npm run fetch:apple # refresh same assets
npm run dev
npm run build
