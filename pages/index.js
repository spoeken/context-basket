import { BasketConsumer } from "../contexts/BasketContext";
import Head from "next/head";
import { useBasket } from "../contexts/BasketContext";
export default function Home() {
  const basket = useBasket();

  console.log("The basket", basket);

  return (
    <div>
      <Head>
        <title>Basket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <button
            onClick={() => {
              basket.addProductLine({
                title: "Et annet product",
                price: 20000,
              });
            }}
          >
            Click me!
          </button>
          <ul>
            {basket.productLines.map((item) => {
              return (
                <li>
                  {item.title} - {item.price}
                </li>
              );
            })}
          </ul>
          <p>total: {basket.total}</p>
        </>
      </main>
    </div>
  );
}
