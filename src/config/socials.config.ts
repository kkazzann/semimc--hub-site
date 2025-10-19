import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Icon,
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitch,
  IconBrandYoutube,
  IconProps,
  IconShoppingCart,
} from "@tabler/icons-react";

export type SocialLink = {
  name: string;
  url: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  extraClass?: string;
};

export const socialLinks: SocialLink[] = [
	{
		name: "TikTok",
		url: "https://tiktok.com/@semimc.pl",
		icon: IconBrandTiktok,
	},
	{
		name: "Discord",
		url: "https://discord.gg/EHr7ZJAgR8",
		icon: IconBrandDiscord,
		extraClass: "featured-discord",
	},
  {
		name: "Sklep",
    url: "https://vishop.pl/shop/21328/server/20075",
    icon: IconShoppingCart,
    extraClass: "featured-shop",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/semi_mc.pl/",
    icon: IconBrandInstagram,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@semimcpl",
    icon: IconBrandYoutube,
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/wojaczek10",
    icon: IconBrandTwitch,
  },
];
