import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'antd';
import { useLastLocation } from 'react-router-last-location';
import useProductsData from 'hooks/useProductsData';

const SingleProductPage = props => {
  const lastLocation = useLastLocation();
  const [productData, isLoaded, isError] = useProductsData(props.id);

  if (isError) return <Redirect to="/404" />;
  if (!isLoaded) return <h1>loading</h1>;
  return (
    <div>
      <Button type="primary">
        <Link
          to={
            lastLocation
              ? lastLocation.pathname + lastLocation.search
              : '/products/'
          }
        >
          back
        </Link>
      </Button>
      <h1>Name: {productData.name}</h1>
      <h2>Price: {productData.price}$</h2>
      <img src="https://picsum.photos/500" alt={productData.name} />
    </div>
  );
};

export default SingleProductPage;
