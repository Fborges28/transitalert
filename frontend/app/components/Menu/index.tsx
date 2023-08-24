import React from 'react'
import styles from "./Menu.module.css";
import Logo from '../Logo';
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
  return (
    <div className={styles["menu"]}>
      <aside>
        <section className={styles["menu-top"]}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/icons/menu.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </section>
        <section className={styles["menu-links"]}>
          <nav>
            <ul>
              <li><Link href="/status">Status das linhas</Link></li>
              <li><Link href="/reports/status">Relatos dos usuários</Link></li>
              <li><Link href="/reports/new">Novo relato</Link></li>
            </ul>
          </nav>
        </section>
        <section className={styles["menu-bottom"]}>
          <Logo />
        </section>
      </aside>
    </div>
  )
}

export default Menu