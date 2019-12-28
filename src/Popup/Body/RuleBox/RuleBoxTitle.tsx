import { Col, Icon, Row, Tooltip } from "antd";
import React from "react";
import styles from "./styles.less";

export default () => (
  <div>
    <Row gutter={8} className={styles.container}>
      <Col span={22}>
        <code>Exclusion Rule</code>
        <InfoBox />
      </Col>
      <Col span={2} />
    </Row>
  </div>
);

const InfoBox = () => {
  const title = (
    <>
      Rules are regular expressions. If in doubt, use
      <br />
      <code style={{ background: "grey", whiteSpace: "nowrap" }}>
        yourUrl.match(new Regexp(String.raw`yourRule`))
      </code>
      <br />
      to test and validate.
    </>
  );
  return (
    <Tooltip
      placement="bottom"
      title={title}
      overlayClassName={styles.infoTooltip}
    >
      <Icon type="info-circle" className={styles.infoIcon} />
    </Tooltip>
  );
};
