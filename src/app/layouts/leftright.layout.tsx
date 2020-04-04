/* libs */
import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Route } from 'react-router-dom';
/* apps */
import routes from '../../routes/routes';

const { Header, Content, Footer, Sider } = Layout;

class LeftRightLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout className="left-right-layout">
        <Sider theme="dark" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {routes.map((route, index) => (
              <Menu.Item key={index}>
                <img className="icon" src={route.icons[0].active} alt="icon" />
                {this.state.collapsed ? null : (
                  <NavLink to={route.path}>
                    <span>{route.nameEn}</span>
                  </NavLink>
                )}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.component} />
            ))}
          </Content>
          <Footer>
            Ant Design ©2018 Created by Ant UED <br />
            Customized by Hoang Anh
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LeftRightLayout;
