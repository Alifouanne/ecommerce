/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Currency from "react-currency-formatter";
import useStore from "../app/ZustandStore";
const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const addToBasket = useStore((state) => state.addToBasket);
  const removeFromBasket = useStore((state) => state.removeFromBasket);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    addToBasket(product);
    //add more items to basket from checkout page
  };
  const removeItemFromBasket = () => {
    removeFromBasket({ id });
    //remove the item from basket
  };
  return (
    <div className="grid grid-cols-5">
      {/* left section */}

      <img
        src={image}
        alt="prod"
        className="object-contain rounded-md"
        width={200}
        height={200}
      />
      {/* middle section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
      </div>
      {/* right section */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="btn" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="btn" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
