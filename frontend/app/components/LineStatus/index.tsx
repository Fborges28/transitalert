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
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/icons/line.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      <section className={styles["line-name"]} style={style}>{name}</section>
      <section className={styles["status"]}>{status}</section>
    </div>
  )
}

export default LineStatus