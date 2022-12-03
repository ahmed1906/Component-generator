import React from "react";
import { Divider, Layout, Menu } from "antd";
import Formator from "../Form/Formator";
import FormGeneratorPage from "../Form/FormGeneratorPage";

export default class AppLayout extends React.Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <>
        <Layout className="app-layout">
          <Header className="header">
            <h2>GenCo</h2>
          </Header>
          <Layout>
            <Sider className="sider-elements">
              <Menu className="menu">
                <Menu.Item className="menu-item">
                  <h1>Form</h1>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="background">
              <Content className="content">
                <Divider />
                <FormGeneratorPage />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </>
    );
  }
}
