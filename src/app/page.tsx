import { BackgroundParticles } from "@/components/BackgroundParticles";
import { DiscordEmbed } from "@/components/DiscordEmbed";
import { HomePageLink } from "@/components/HomePageLink";
import { Logo } from "@/components/Logo";
import { SocialLinkCards } from "@/components/SocialLinkCards";
import { TikTokEmbed } from "@/components/TikTokEmbed";
import { socialLinks } from "@/config/socials.config";
import styles from "./global.module.scss";

export default function HomePage() {
  const socialUrls = socialLinks
    .filter((link) => link.url !== "#")
    .map((link) => link.url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Organization",
      name: "SEMI MC",
      url: "https://hub.semimc.pl",
      sameAs: socialUrls,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BackgroundParticles />

      <main className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.layout1}>
            <Logo />
          </div>

          <div className={styles.layout2}>
            <SocialLinkCards />
          </div>

          <div className={styles.layout3}>
            <TikTokEmbed />
            <DiscordEmbed />
          </div>

          <div className={styles.layout4}>
            <HomePageLink />
          </div>
        </div>
      </main>
    </>
  );
}
