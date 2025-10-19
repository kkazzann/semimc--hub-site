import {
  IconArrowRight,
  IconArrowRightBar,
  IconArrowRightCircle,
  IconCircleArrowRight,
  IconFreeRights,
  IconLink,
} from "@tabler/icons-react";

import styles from "./homepagelink.module.scss";

export function HomePageLink() {
  return (
    <a
      href="https://semimc.pl/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.homeLink}
    >
      <div className={styles.internalIcon}>
        <IconLink />
      </div>

      <div className={styles.linkContent}>
        Wróć na stronę główną semimc.pl <IconArrowRight size={18} />
      </div>
    </a>
  );
}
