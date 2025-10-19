import styles from "./tiktokembed.module.scss"

export function TikTokEmbed() {
  return (
    <>
      <blockquote
        className={["tiktok-embed ", styles.tiktokEmbed].join("")}
        cite="https://www.tiktok.com/@semimc.pl"
        data-unique-id="semimc.pl"
        data-embed-from="embed_page"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px" }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@semimc.pl?refer=creator_embed"
          >
            @semimc.pl
          </a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </>
  );
}
