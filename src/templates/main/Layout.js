import {
  Layout,
  Menu,
  Breadcrumb,
  PageHeader,
  Button,
  Row,
  Col,
  Popconfirm,
  Popover,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import styles from "../../../styles/Home.module.css";
import { createElement, StrictMode, useState } from "react";
import Link from "next/link";

function ButtonLogout({ logout }) {
  return (
    <Popover
      content={
        <StrictMode>
          <Button size="small">tidak</Button>{" "}
          <Button type="primary" size="small" onClick={logout}>
            ya
          </Button>
        </StrictMode>
      }
      placement="topRight"
      title="Logout"
    >
      <Popover
        content={
          <StrictMode>
            <Button size="small">tidak</Button>{" "}
            <Button type="primary" size="small" onClick={logout}>
              ya
            </Button>
          </StrictMode>
        }
        trigger="click"
        placement="topRight"
        title="Logout"
      >
        <Button type="primary" danger shape="circle">
          <LogoutOutlined />
        </Button>
      </Popover>
    </Popover>
  );
}

export default function LayoutMain({ children, menuaktif }) {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse() {
    console.log(collapsed);
    setCollapsed(!collapsed);
  }

  const logout = () => {
    window.location.href = "login";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        // breakpoint="lg"
        collapsedWidth="0"
        // defaultCollapsed
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={null}
      >
        <Menu theme="dark" defaultSelectedKeys={[`${menuaktif}`]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link href="/jenissampah">Jenis Sampah</Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item> */}
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Laporan">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
        asd
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          <Row justify="space-between" style={{ margin: "0 2vh" }}>
            <Col>
              <Button type="ghost" onClick={onCollapse}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Col>
            <Col>
              <ButtonLogout logout={logout} />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
