import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.scss';
import Payment from 'components/Payment';
import { Row, Col } from 'antd';
import Sale from 'components/Sales/Sale/Sale';
import HeaderInfoSection from 'components/Common/HeaderInfoSection/HeaderInfoSection';

const index = () => {
  return (
    <Router>
      <HeaderInfoSection />
      <div className="main-sale">
        <Row>
          <Col span={20}>
            <Switch>
              <Route path="/sale-before">
                <Sale />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/sale-before"></Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default index;
