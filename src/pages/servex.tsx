import type { NextPage } from "next";
import Head from "next/head";
import { ServexView } from "../views";

const Servex: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blxckout - Servex</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <ServexView />
    </div>
  );
};

export default Servex;
