/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Product } from "../components";
//main feed page render inside it three product component and pass defirint numper of products to each one
const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
      {products
        ?.slice(0, 4)
        .map(({ id, title, price, description, category, images }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category?.name}
            image={images[0]}
          />
        ))}
      <img src="/images/ad.jpg" alt="ad" className="col-span-full m-auto" />
      <div className="md:col-span-2">
        {products
          ?.slice(4, 5)
          .map(({ id, title, price, description, category, images }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category?.name}
              image={images[0]}
            />
          ))}
      </div>
      {products
        ?.slice(5, 23)
        .map(({ id, title, price, description, category, images }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category?.name}
            image={images[0]}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
