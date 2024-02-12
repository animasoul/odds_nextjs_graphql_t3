import Link from "next/link";
import Image from "next/image";
import styles from "~/styles/header.module.css";

export default async function HeaderNavLeft() {
  return (
    <div className={styles.left}>
      <div className="action-mega-menu toggle">
        <div className="icon">
          <Image
            src="/icons/icone-menu-preto.svg"
            alt="menu"
            width="23"
            height="14"
          />
        </div>
      </div>
      <div className={styles.left_menu}>
        <ul>
          <li>
            <div className="menu-item current">
              <Link
                href="https://www.gazetaesportiva.com/apostas/"
                title="Apostas"
              >
                <span>Apostas</span>
                <Image
                  src="/icons/icone-apostas-colorido.svg"
                  alt="apostas"
                  width={21}
                  height={20}
                />
              </Link>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <Link
                href="https://www.gazetaesportiva.com/apostas/bonus"
                title="Bônus"
              >
                <span>Bônus</span>
                <Image
                  src="/icons/icone-bonus-colorido.svg"
                  alt="bonus"
                  width={21}
                  height={20}
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
