"use client";

import { useEffect, useState } from "react";

import styles from "./discordembed.module.scss";

interface Member {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface WidgetData {
  id: string;
  name: string;
  instant_invite: string;
  members: Member[];
}

const DiscordSkeleton = () => (
  <div className={styles.discordSkeleton}>
    <div className={styles.skeletonHeader}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonButton}></div>
    </div>
    <div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className={styles.skeletonMember}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonName}></div>
        </div>
      ))}
    </div>
  </div>
);

export function DiscordEmbed() {
  const [widgetData, setWidgetData] = useState<WidgetData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWidgetData = async () => {
      try {
        const response = await fetch(
          "https://discord.com/api/guilds/1205232925507846154/widget.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Discord widget data.");
        }
        const data: WidgetData = await response.json();
        setWidgetData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred."
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWidgetData();
  }, []);

  if (isLoading) {
    return <DiscordSkeleton />;
  }

  if (error || !widgetData) {
    return (
      <div className={`${styles.discordWidgetContainer} ${styles.error}`}>
        <p>Could not load Discord server info.</p>
      </div>
    );
  }

  const onlineCount = widgetData.members.length;

  return (
    <div className={styles.discordWidgetContainer}>
      <div className={styles.widgetHeader}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px"
        }}>
          <span className={styles.serverName}>{widgetData.name}</span>
          <span className={styles.onlineHeader}>Online — {onlineCount}</span>
        </div>

        <a
          href="https://discord.com/invite/MjqEFsdv4e"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.joinButton}
        >
          Dołącz do nas!
        </a>
      </div>

      <div>
        <div className={styles.memberList}>
          {widgetData.members.slice(0, 20).map((member) => (
            <div key={member.id} className={styles.memberItem}>
              <div className={styles.memberAvatar}>
                <img
                  src={member.avatar_url}
                  alt={`${member.username} avatar`}
                />
                <span
                  className={`${styles.statusDot} ${
                    styles[`status-${member?.status}`]
                  }`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
