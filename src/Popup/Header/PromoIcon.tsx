import { Icon } from "antd";
import React from "react";
import styles from "./styles.less";

type PromoIconProps = {
  type: string;
  href: string;
};

export default ({ type, href }: PromoIconProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon type={type} className={styles.promoIcon} />
  </a>
);
