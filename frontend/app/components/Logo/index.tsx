import React from 'react'
import Image from 'next/image'
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={`${styles["logo"]}`}>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/icons/train.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span>TransitAlert</span>
    </div>
  )
}

export default Logo