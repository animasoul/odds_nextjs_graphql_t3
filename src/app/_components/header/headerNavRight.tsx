import Link from "next/link";
import Image from "next/image";
import styles from "~/styles/header.module.css";

export default async function HeaderNavRight() {
  return (
    <div className={styles.right}>
      <div className={styles.right_menu}>
        <ul>
          <li className="">
            <div className="menu-item">
              <Link
                href="https://www.gazetaesportiva.com/apostas/prognosticos"
                title="Prognósticos"
              >
                <span>Prognósticos</span>
                <Image
                  src="/icons/icone-prognosticos-colorido.svg"
                  alt="prognosticos"
                  width={21}
                  height={20}
                />
              </Link>
            </div>
          </li>
          <li className="">
            <div className="menu-item">
              <Link
                href="https://www.gazetaesportiva.com/apostas/aplicativos"
                title="Apps"
              >
                <span>Apps</span>
                <Image
                  src="/icons/icone-app-colorido.svg"
                  alt="app"
                  width={21}
                  height={20}
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="search">
                <div className="search-bar all">
                  <div className="top">
                    <div className="input">
                      <div className="submit">
                        <Image
                          src="/icons/icone-pesquisar-preto.svg"
                          alt="pesquisar"
                          width={19}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bottom hide">
                    <div className="container">
                      <div className="wp-posts"></div>
                    </div>
                  </div>
                </div>
              </div> */}
      <div className={styles.action_search}>
        <div className={styles.icon}>
          <Image
            className="open"
            src="/icons/icone-pesquisar-preto.svg"
            alt="pesquisar"
            width={19}
            height={18}
          />
          {/* <Image
                    className="close"
                    src="/icons/icone-fechar-preto.svg"
                    alt="fechar-preto"
                    width={19}
                    height={18}
                  /> */}
        </div>
      </div>
    </div>
  );
}
