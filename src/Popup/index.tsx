import { Layout } from "antd";
import React from "react";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

export default () => (
  <Layout>
    <Header />
    <Body />
    <Footer />
  </Layout>
);
