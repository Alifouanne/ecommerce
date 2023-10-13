/* eslint-disable no-unused-vars */
import React from "react";
import Currency from "react-currency-formatter";
import useStore from "../app/ZustandStore";
import { CheckoutProduct, Header } from "../components";
const Checkout = () => {
  const store = useStore();
  const total = store.items.reduce((total, item) => total + item.price, 0);
  const items = useStore((state) => state.items);
  return (
    <div className="bg-deafult">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* left section */}
        <div>
          <img
            src="/public/images/ad-1.png"
            alt="ad-1"
            width={1020}
            height={250}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white rounded-md">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="flex flex-col bg-white p-10 shadow-md rounded-md ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) items :{""}
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>
              <button className={`btn mt-2 `} role="link">
                Sign in to checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
