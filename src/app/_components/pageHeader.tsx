// Code: Header component
import styles from "~/styles/header.module.css";
import HeaderTop from "@components/header/headerTop";
import HeaderNavLeft from "@components/header/headerNavLeft";
import HeaderNavCenter from "@components/header/headerNavCenter";
import HeaderNavRight from "@components/header/headerNavRight";

export default async function PageHeader() {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <section className={styles.bottom}>
        <div className="container">
          <div className={styles.wrapper}>
            <HeaderNavLeft />
            <HeaderNavCenter />
            <HeaderNavRight />
          </div>
        </div>
      </section>
    </header>
  );
}
