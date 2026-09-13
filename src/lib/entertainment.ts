export type TvItem = {
  title: string;
  img: string;
  logo: string;
  cta: string;
  genre: string | null;
  desc: string;
  href: string;
};

const tv = (
  title: string,
  img: string,
  logo: string,
  cta: string,
  genre: string | null,
  desc: string,
  href: string
): TvItem => ({ title, img, logo, cta, genre, desc, href });

export const TV_ITEMS: TvItem[] = [
  tv(
    "MLS",
    "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/78/57/f6/7857f6ec-a4ed-87dc-dea9-a6ed02888722/ebd59c17-8e95-49b1-aec0-44aec57388ee.png/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Kc1Xx3Z1QBOuXe1EHDu4TA/220x54.png",
    "MLS on Apple TV",
    null,
    "Watch every club, every match, live\u2014all season long.",
    "https://tv.apple.com/us/channel/mls/tvs.sbd.7000?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Mayday",
    "https://is1-ssl.mzstatic.com/image/thumb/ZUCp6pyyffalTQpg4UESLQ/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/h3886zSp5gKViScZl44WTw/220x54.png",
    "Stream now",
    "Action",
    "A friendship with major red flags.",
    "https://tv.apple.com/us/movie/mayday/umc.cmc.shin43vzfoz3h4ggx41z8rf?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Formula 1",
    "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/47/76/ea/4776ea5e-5e00-a76b-c8f1-6fda44050f30/3dd9b6d8-a87a-4a15-80bb-0cc06dfa62d4.png/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f0/ac/1e/f0ac1e58-0027-49d0-378e-68470edfb0ec/3b7d6fac-0061-401c-9716-742245053fd0.png/220x54.png",
    "F1 on Apple TV",
    null,
    "Every Grand Prix\u2122, live and on demand\u2014all in one place, all year long.",
    "https://tv.apple.com/us/room/formula-1/uts.room.formula-1?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Ted Lasso",
    "https://is1-ssl.mzstatic.com/image/thumb/eD8DZGJ170t3MyFhlWOkdw/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Cc6MMzxFzD1gVqnd6IslKA/220x54.png",
    "Stream now",
    "Comedy",
    "The hit comedy is back and Tedder than ever.",
    "https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Dark Matter",
    "https://is1-ssl.mzstatic.com/image/thumb/b-b9eb0IET479YbfP-t1cA/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/2O76_V3dS7VrJAjsyXvY2Q/220x54.png",
    "Stream now",
    "Sci-Fi",
    "There\u2019s no world like home.",
    "https://tv.apple.com/us/show/dark-matter/umc.cmc.4luj45vtqpmjsvb6sc2675oeg?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Last Seen",
    "https://is1-ssl.mzstatic.com/image/thumb/JtVQR0x0f4EX3vFy1yWxaQ/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/HG_g_V2N88edyDw_J1KvSw/220x54.png",
    "Stream now",
    "Thriller",
    "He\u2019s waited years for the truth to call.",
    "https://tv.apple.com/us/show/last-seen/umc.cmc.4pbw9c936a4pigdvsg23u2bsa?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Friday Night Baseball",
    "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/33/9e/cf/339ecfe7-f515-8594-2e48-d991803409ea/5a944fdc-acd7-47a8-89e7-274d84cf4276.png/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/6f/41/7c/6f417c01-dbf7-6cdc-df62-f014aa88a673/e452926f-7b52-4c05-a07f-8e4939b1bf6b.png/220x54.png",
    "See the schedule",
    null,
    "Live MLB games, every Friday.",
    "https://tv.apple.com/us/room/friday-night-baseball/edt.item.62327df1-6874-470e-98b2-a5bbeac509a2?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Silo",
    "https://is1-ssl.mzstatic.com/image/thumb/hRaOrIKahRFcNlKt6UV4Ow/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/w6iOdqXGZLugnUgKmWZp0g/220x54.png",
    "Stream now",
    "Sci-Fi",
    "The truth lies in the past.",
    "https://tv.apple.com/us/show/silo/umc.cmc.3yksgc857px0k0rqe5zd4jice?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
  tv(
    "Lucky",
    "https://is1-ssl.mzstatic.com/image/thumb/3aJOoInTKLjwSg8kv-ifDg/1250x668sr.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/pQdOLq_2af0BOpHwvbC6vg/220x54.png",
    "Stream now",
    "Action",
    "Anya Taylor-Joy is a grifter running for her life after a heist goes sideways.",
    "https://tv.apple.com/us/show/lucky/umc.cmc.5qo7t3nngb2vj0m9dxkwebw1o?itscg=10000&itsct=atv-apl_hp-stream_now--220622"
  ),
];

/** Swap Apple's responsive image tail (mirrors their srcset ladders). */
export const tvSrc = (url: string, size: "1250x668" | "980x522" | "688x368" | "274x496") =>
  url.replace(/\/\d+x\d+sr\.jpg$/, `/${size}sr.jpg`);

export const ATV_LOGO = {
  src: "/apple/v/home/cj/images/tv-gallery/logo_hero_light__d7t8cya4x26a_small.png",
  src2x: "/apple/v/home/cj/images/tv-gallery/logo_hero_light__d7t8cya4x26a_small_2x.png",
};

export type FamItem = {
  service: "music" | "arcade" | "fitness";
  title: string;
  cta: string;
  img: string;
  href: string;
};

export const SERVICE_LABEL: Record<FamItem["service"], string> = {
  music: "Apple Music",
  arcade: "Apple Arcade",
  fitness: "Apple Fitness+",
};

export const FAM_ITEMS: FamItem[] = [
  {
    service: "music",
    title: "Sabrina Carpenter: The Zane Lowe Interview",
    cta: "Listen now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/226x226sr.jpg",
    href: "https://music.apple.com/us/station/sabrina-carpenter-the-zane-lowe-interview/ra.1837392419?itscg=10000&itsct=am-apl_hp-listen_now--240326",
  },
  {
    service: "arcade",
    title: "Hello Kitty Island Adventure",
    cta: "Play now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/470x264.jpg",
    href: "https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132?itscg=10000&itsct=aa-apl_hp-play_now--240326",
  },
  {
    service: "fitness",
    title: "David Bowie",
    cta: "Watch now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/c1/e6/09/c1e609c8-914d-6037-cda2-4cfdaf87a263/07eaa70a-574b-4abe-aea4-bcb530d837e3.png/470x264.jpg",
    href: "https://fitness.apple.com/us/studio-collection/david-bowie/1896935217?itscg=10000&itsct=afp-apl_hp-watch_now--240326",
  },
  {
    service: "music",
    title: "A-List Pop",
    cta: "Listen now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/d2/c0/34/d2c034a9-4c6f-c97f-2cc8-85b056699f62/a6b27345-5c84-471f-99aa-c84fc695814e.png/226x226SC.DN01.jpg?l=en-US",
    href: "https://music.apple.com/us/playlist/a-list-pop/pl.5ee8333dbe944d9f9151e97d92d1ead9?itscg=10000&itsct=am-apl_hp-listen_now--240326",
  },
  {
    service: "arcade",
    title: "PowerWash Simulator",
    cta: "Play now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/470x264.jpg",
    href: "https://apps.apple.com/us/app/powerwash-simulator/id6477445344?itscg=10000&itsct=aa-apl_hp-play_now--240326",
  },
  {
    service: "fitness",
    title: "HIIT with Bakari",
    cta: "Watch now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/24/25/85/2425854a-14c7-fb09-533b-110aaf585363/HI_BW_0217_artwork_en_ID336111_0.png/470x264.jpg",
    href: "https://fitness.apple.com/us/workout/hiit-with-bakari/6783451184?itscg=10000&itsct=afp-apl_hp-watch_now--240326",
  },
  {
    service: "music",
    title: "New Music Daily",
    cta: "Listen now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/da/39/f5/da39f55d-14f1-68df-21a7-c1fdd4de5303/f1a2cd59-4a5e-43c2-bb87-d3f4e1210317.png/226x226SC.DN01.jpg?l=en-US",
    href: "https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?itscg=10000&itsct=am-apl_hp-listen_now--240326",
  },
  {
    service: "arcade",
    title: "Balatro+",
    cta: "Play now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/89/07/9c/89079c5b-29da-cd1f-4ce3-ad68f3d28a68/f0346506-4c9f-4be1-b275-11fa4004b103.png/470x264.jpg",
    href: "https://apps.apple.com/us/app/balatro/id6502451661?itscg=10000&itsct=aa-apl_hp-play_now--240326",
  },
  {
    service: "fitness",
    title: "Programs",
    cta: "Watch now",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/470x264.jpg",
    href: "https://fitness.apple.com/us/studio-collection/programs/1896349052?itscg=10000&itsct=afp-apl_hp-watch_now--240326",
  },
];
