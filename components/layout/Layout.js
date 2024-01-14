import { SpeedInsights } from "@vercel/speed-insights/next";

import Head from "next/head";
import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <>
      <SpeedInsights />
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <MainHeader />
      {props.children}
    </>
  );
}

export default Layout;
