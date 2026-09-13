"use client";
import InlineMedia from "@/components/InlineMedia";

/**
 * Apple promo-grid video tile media: Apple's inline-media layering with an
 * in-view mute/autoplay loop. `startStem` is the resting poster (start frame),
 * `endStem` the maxframe/static picture. Reduced motion swaps to the static frame.
 */
export default function PromoVideo({
  startStem,
  endStem,
  videoBase,
}: {
  startStem: string;
  endStem: string;
  videoBase: string;
}) {
  return (
    <div className="promo-media">
      <InlineMedia
        className=""
        startStem={startStem}
        endStem={endStem}
        videoBase={videoBase}
        loop
        imgStart="promo-img"
        imgEnd="promo-img"
      />
    </div>
  );
}