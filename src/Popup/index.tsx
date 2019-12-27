import { SyncSelectors } from "@/chrome/syncstore";
import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const rules = useSelector(SyncSelectors.rules);

  return (
    <div>
      <span>Hello World</span>
      <ul>
        {rules.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};
