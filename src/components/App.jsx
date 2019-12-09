import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Page404 from 'pages/Page404';
import PageRenderHandler from 'components/PageRenderHandler';
import LayoutContainer from 'components/LayoutContainer';

const App = () => {
  return (
    <main>
      <LayoutContainer>
        <Router>
          <LastLocationProvider>
            <Route exact path="/products/:id?" component={PageRenderHandler} />
            <Route exact path="/404" component={Page404} />
          </LastLocationProvider>
        </Router>
      </LayoutContainer>
    </main>
  );
};

export default App;
