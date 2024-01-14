import { SpeedInsights } from "@vercel/speed-insights/next";

import Head from "next/head";
import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <MainHeader />
      {props.children}
      <SpeedInsights />
    </>
  );
}

export default Layout;
