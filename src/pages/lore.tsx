import type { NextPage } from "next";
import Head from "next/head";
import { LoreView } from "../views";

const Lore: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blxckout - Lore</title>
        <meta
          name="Lore"
          content="The story behind the blxckout NFT brand."
        />
      </Head>
      <LoreView />
    </div>
  );
};

export default Lore;
