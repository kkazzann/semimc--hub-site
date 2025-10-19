import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

export function Logo() {
  return (
    
    <Link href={"https://semimc.pl/"} className={styles.logoLink}>
      <Image
        src="/logo.png"
        alt="SEMI MC Logo"
        className={styles.logo}
        width={192}
        height={192}
      />
    </Link>
  );
}
