/**
 * Apple's responsive <picture> ladder, mirrored exactly:
 * small (<=734px) → mediumtall (<=1068px + tall viewport) →
 * medium (<=1068px) → largetall (tall viewport) → large base,
 * each with a 2x srcset. `tall` gates the tall framings (hero tiles
 * serve them; promo tiles don't).
 */
import type { CSSProperties } from "react";

export default function ApplePicture({
  stem,
  ext = "jpg",
  alt = "",
  className = "",
  imgClassName = "",
  tall = false,
  eager = false,
  ariaHidden = false,
  style,
}: {
  stem: string;
  ext?: "jpg" | "png";
  alt?: string;
  className?: string;
  imgClassName?: string;
  tall?: boolean;
  eager?: boolean;
  ariaHidden?: boolean;
  style?: CSSProperties;
}) {
  const src = (size: string, x2 = false) => `${stem}_${size}${x2 ? "_2x" : ""}.${ext}`;
  return (
    <picture className={className} style={style} aria-hidden={ariaHidden || undefined}>
      <source srcSet={`${src("small")}, ${src("small", true)} 2x`} media="(max-width: 734px)" />
      {tall && (
        <source
          srcSet={`${src("mediumtall")}, ${src("mediumtall", true)} 2x`}
          media="(max-width: 1068px) and (min-height: 734px)"
        />
      )}
      <source srcSet={`${src("medium")}, ${src("medium", true)} 2x`} media="(max-width: 1068px)" />
      {tall && (
        <source srcSet={`${src("largetall")}, ${src("largetall", true)} 2x`} media="(min-height: 776px)" />
      )}
      <img
        src={src("large")}
        srcSet={`${src("large", true)} 2x`}
        alt={alt}
        className={imgClassName || undefined}
        loading={eager ? "eager" : "lazy"}
        draggable={false}
      />
    </picture>
  );
}
