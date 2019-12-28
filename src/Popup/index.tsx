import { Layout } from "antd";
import React from "react";
import Body from "./Body";

import Header from "./Header";

export default () => {
  return (
    <Layout>
      <Header />
      <Body />
    </Layout>
  );
};
