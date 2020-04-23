/* libs */
import React from "react";
import { Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { i18n } from "i18next";
import { Layout } from "antd";
/* apps */
import ExampleContainer from "../containers/example.con";

const { Header, Footer, Content } = Layout;

declare module TopBottomLayoutModule {
  export type Props = {
    t: any;
    tReady: any;
    i18n: i18n;
  };
}

class TopBottomLayout extends React.Component<TopBottomLayoutModule.Props> {
  render() {
    this.props.i18n.changeLanguage('vi'); // change language (vi, en)
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
          Customized by Hoang Anh <br />
          {this.props.t("test")} <br />
          {this.props.t("home").title}
        </Footer>
      </Layout>
    );
  }
}

export default withTranslation()(TopBottomLayout);
