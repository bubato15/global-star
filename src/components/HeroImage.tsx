import * as React from "react";

interface HeroImageProps {
  imageSrc: string;
  imageAlt?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ imageSrc, imageAlt = "" }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-14 bg-blue-600" role="banner">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-full aspect-[23.81] max-md:max-w-full"
      />
    </section>
  );
}