/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Currency from "react-currency-formatter";
import useStore from "../app/ZustandStore";
//one product component
const Product = ({ id, title, description, category, image, price }) => {
  const addToBasket = useStore((state) => state.addToBasket);

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
    //add product object to ZustandStore when click on add to basket button
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <img
        src={image}
        alt="product"
        width={200}
        height={200}
        className="object-contain rounded-md mx-auto"
      />
      <h4 className="my-3">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      <button className="mt-auto btn" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
