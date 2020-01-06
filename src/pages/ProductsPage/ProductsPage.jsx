import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { parseLink } from 'utils/parseLink';
import useProductsData from 'hooks/useProductsData';

const ProductsPage = props => {
  const { Meta } = Card;
  const [productsData, isLoaded, isError] = useProductsData();

  if (isError) return <Redirect to="/404" />;
  if (!isLoaded) return <h1>loading</h1>;

  return (
    <div>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
        {productsData.products.length &&
          productsData.products.map((e, i) => {
            return (
              <Col
                className="gutter-row"
                xs={{ span: 12 }}
                lg={{ span: 6 }}
                key={e.name}
              >
                <Link to={parseLink(e.product_url)}>
                  <Card
                    hoverable
                    cover={
                      <img
                        src={`https://picsum.photos/id/${Math.ceil(
                          Math.random() * 99,
                        )}/400/500`}
                        alt={e.name}
                      />
                    }
                  >
                    <Meta
                      title={e.name}
                      description={e.product_url && parseLink(e.product_url)}
                    />
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
      <Row>
        {productsData.meta.previous_url && (
          <Button type="primary">
            <Link to={parseLink(productsData.meta.previous_url)}>prev</Link>
          </Button>
        )}
        {productsData.meta.next_url && (
          <Button type="primary">
            <Link to={parseLink(productsData.meta.next_url)}>next</Link>
          </Button>
        )}
      </Row>
    </div>
  );
};

export default ProductsPage;
