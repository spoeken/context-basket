import "../styles/globals.css";

import { Basket } from "../contexts/BasketContext";

function MyApp({ Component, pageProps }) {
  return (
    <Basket>
      <Component {...pageProps} />
    </Basket>
  );
}

export default MyApp;
