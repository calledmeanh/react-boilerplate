/* libs */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
/* apps */
import ExampleContainer from '../containers/example.con';

const { Header, Footer, Content } = Layout;

class TopBottomLayout extends React.Component {
  render() {
    return (
      <Layout className="top-bottom-layout">
        <Header>Header</Header>
        <Content>
          <Switch>
            <Route path="/" component={ExampleContainer} />
          </Switch>
        </Content>
        <Footer>
          Ant Design ©2018 Created by Ant UED <br />
          Customized by Hoang Anh
        </Footer>
      </Layout>
    );
  }
}

export default TopBottomLayout;
