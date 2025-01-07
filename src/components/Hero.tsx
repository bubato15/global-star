import * as React from "react";
import { HeroImage } from "./HeroImage.tsx";

export const Hero: React.FC = () => {
  return (
    <main>
      <HeroImage 
        imageSrc="https://cdn.builder.io/api/v1/image/assets/2104ee8c3b1a4036982aceb97afa3b1c/560ab31f4e401a33c676ccf1d6a2cc90fd00e8ab70d14cc4ea39bdc62f2db626?apiKey=2104ee8c3b1a4036982aceb97afa3b1c&"
        imageAlt="Hero banner image"
      />
    </main>
  );
}