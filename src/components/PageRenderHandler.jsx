import React from 'react';
import { checkId } from 'utils/checkId';
import ProductsPage from 'pages/ProductsPage';
import SingleProductPage from 'pages/SingleProductPage';

const PageRenderHandler = ({ match, location }) => {
  const {
    params: { id },
  } = match;
  const { search } = location;

  return (
    <div>
      {checkId(id) ? (
        <SingleProductPage id={id} />
      ) : (
        <ProductsPage id={search} />
      )}
    </div>
  );
};

export default PageRenderHandler;
