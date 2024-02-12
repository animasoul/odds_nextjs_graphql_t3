import Link from "next/link";
import Image from "next/image";
import styles from "~/styles/header.module.css";

export default async function HeaderTop() {
  return (
    <section className={styles.top}>
      <div className="container">
        <div className={styles.sponsor}>
          <div className={styles.prefix}>
            <span>Conteúdo promovido por:</span>
          </div>
          <div className={styles.icon}>
            <Link
              href="https://oddsscanner.com/br/"
              title="Odds Scanner"
              target="_blank"
            >
              <Image
                src="/icons/logo-oddsscanner-azul-verde-colorido.svg"
                alt="oddsscanner-azul-verde-colorido"
                width="73"
                height="12"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
