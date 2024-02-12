import Link from "next/link";
import Image from "next/image";
import styles from "~/styles/header.module.css";

export default async function HeaderNavCenter() {
  return (
    <div className={styles.center}>
      <Link href="/">
        <Image
          src="/icone-logo-gazeta.svg"
          alt="Gazeta Esportiva"
          width="114"
          height="36"
        />
      </Link>
    </div>
  );
}
