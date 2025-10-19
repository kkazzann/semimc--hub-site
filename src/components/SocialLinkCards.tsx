"use client";

import { IconExternalLink } from "@tabler/icons-react";
import { socialLinks } from "@/config/socials.config";
import styles from "./SocialLinkCards.module.scss";

export function SocialLinkCards() {
  return socialLinks.map((link) => (
    <div className={styles.linkWrapper} key={link.name}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.linkCard} ${
          link.extraClass ? styles[link.extraClass] : ""
        }`}
      >
        <div className={styles.linkContent}>
          {link.icon && <link.icon />}
          {link.name}
        </div>
        <div className={styles.externalLink}>
          <IconExternalLink />
        </div>
      </a>
    </div>
  ));
}
