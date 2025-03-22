import { useEffect, useState } from "react";

import s from "./index.module.scss";

export const Metrics = () => {
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMetrics(true);
    }, 1200);
  }, []);

  return (
    <div className={`${s.metrics} ${showMetrics ? s.showMetrics : ""}`}>
      <div className={s.metric}>
        <h2>430K+</h2>
        <h5>Art Works</h5>
      </div>
      <div className={s.metric}>
        <h2>159K+</h2>
        <h5>Creators</h5>
      </div>
      <div className={s.metric}>
        <h2>87K+</h2>
        <h5>Collections</h5>
      </div>
    </div>
  );
};
