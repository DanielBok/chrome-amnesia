import { SyncSelectors } from "@/chrome/syncstore";
import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";

export default () => {
  const rules = useSelector(SyncSelectors.rules);

  return (
    <Layout>
      <Header />
      <ul>
        {rules.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </Layout>
  );
};
