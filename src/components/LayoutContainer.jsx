import React from 'react';
import { Layout } from 'antd';

const LayoutContainer = props => {
  const { Content } = Layout;
  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 20, minHeight: '100vh' }}>
        {props.children}
      </Content>
    </Layout>
  )
}

export default LayoutContainer;