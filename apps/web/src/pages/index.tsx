import { FC } from "react";

import { StaticImage } from "gatsby-plugin-image";

import tw from "twin.macro";
import { horizontalAndVertical, h1 } from "../styles";

import type { PageProps } from "gatsby";

const IndexPage: FC<PageProps> = () => {
  return (
    <main css={horizontalAndVertical}>
      <h1 css={h1}>
        Hello. My name is Davide. I run, go on adventures (sometimes on foot and
        sometimes on a bicycle), eat, and do my very best to live like a
        Hobbit...
      </h1>
      <a href="https://www.instagram.com/p/xsGG05PXM7/" target="_blank">
        <StaticImage
          css={tw`mt-4`}
          src="../images/samwise-and-i.jpg"
          alt="Samwise and I"
        />
      </a>
    </main>
  );
};

export default IndexPage;
