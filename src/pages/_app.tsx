import { AppProps } from "next/app";

import "../shared/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
