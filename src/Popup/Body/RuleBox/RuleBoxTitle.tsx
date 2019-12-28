import styles from "@/Popup/Body/RuleBox/styles.less";
import { Col, Row } from "antd";
import React from "react";

export default () => (
  <div>
    <Row gutter={8} className={styles.container}>
      <Col span={22}>
        <code>Exclusion Rule</code>
      </Col>
      <Col span={2} />
    </Row>
  </div>
);
