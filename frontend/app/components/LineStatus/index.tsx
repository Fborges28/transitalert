import React from 'react';
import styles from "./LineStatus.module.css";
import Image from 'next/image'

function LineStatus({
  name,
  status,
  style,
}: {
  name: string;
  status: string;
  style: React.CSSProperties;
}) {
  return (
    <div className={styles["status-line-row"]}>
      <div className={styles["status-line-icon"]}>
        <svg width="6" height="30" viewBox="0 0 6 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.04327 23.8334C1.57051 23.8312 0.374831 25.0233 0.372646 26.4961C0.370461 27.9688 1.5626 29.1645 3.03535 29.1667C4.50811 29.1689 5.70379 27.9767 5.70597 26.504C5.70816 25.0312 4.51602 23.8355 3.04327 23.8334ZM2.53932 2.50492e-06L2.53931 26.5L3.53931 26.5L3.53932 2.92204e-06L2.53932 2.50492e-06Z" fill="#D7D7D7"/>
        </svg>
      </div>
      <section className={styles["line-name"]} style={style}>{name}</section>
      <section className={styles["status"]}>{status}</section>
    </div>
  )
}

export default LineStatus