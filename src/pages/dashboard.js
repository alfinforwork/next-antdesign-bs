import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import styles from "../../styles/Home.module.css";
import { createElement, useState } from "react";
import Link from "next/link";
import Layout from "../templates/main/Layout";
import { Breadcrumb, Button, PageHeader } from "antd";

function Dashboard({ stars }) {
  return (
    <Layout menuaktif={1}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      >
        <div
          className={styles.layoutBackground}
          style={{ padding: 24, minHeight: 360 }}
        >
          Bill is a cat.
        </div>
      </PageHeader>
    </Layout>
  );
}
Dashboard.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count, collapsed: false };
};

export default Dashboard;
