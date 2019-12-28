import { SyncApi } from "@/chrome/syncstore";
import { Button, Col, Input, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

import styles from "./styles.less";

type RuleBoxProps = {
  rule: string;
};

export default ({ rule }: RuleBoxProps) => {
  const dispatch = useDispatch();

  return (
    <Row gutter={8} className={styles.container}>
      <Col span={22}>
        <Input defaultValue={rule} />
      </Col>
      <Col span={2} className={styles.centerAlign}>
        <Button
          className={styles.dangerButton}
          type="link"
          shape="circle"
          icon="delete"
          onClick={() => dispatch(SyncApi.removeRule(rule))}
        />
      </Col>
    </Row>
  );
};
