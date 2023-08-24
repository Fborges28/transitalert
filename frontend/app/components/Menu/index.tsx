import React from 'react'
import styles from "./Menu.module.css";
import Logo from '../Logo';
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`${styles["menu"]}`}>
      <Image
        className={`${styles["menu-icon"]} ${styles["menu-icon-open"]}`}
        src="/icons/menu.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        onClick={() => setMenuOpen(true)}
      />

      <section className={`${styles["main-menu"]} ${menuOpen ? styles["open"] : ""}`}>
        <aside>
          <section className={styles["menu-top"]}>
            <Image
              className={styles["menu-icon"]}
              src="/icons/menu.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
              onClick={toggleMenu}
            />
          </section>
          <section className={styles["menu-links"]}>
            <nav>
              <ul>
                <li><Link href="/status" onClick={toggleMenu}>Status das linhas</Link></li>
                <li><Link href="/reports/status" onClick={toggleMenu}>Relatos dos usuários</Link></li>
                <li><Link href="/reports/new" onClick={toggleMenu}>Novo relato</Link></li>
              </ul>
            </nav>
          </section>
          <section className={styles["menu-bottom"]}>
            <Logo />
          </section>
        </aside>
      </section>
    </div>
  )
}

export default Menu