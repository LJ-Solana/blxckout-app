import type { NextPage } from "next";
import Head from "next/head";
import { SynxView } from "../views";

const Synx: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blxckout - Synx</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <SynxView />
    </div>
  );
};

export default Synx;
