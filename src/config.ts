export const SITE = {
  title: "Monopoly M0N3Y",
  description: "True Digital Cash for the 21st Century",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "./images/monopolymanD4_1.png",
    alt: "Monopoly M0N3Y: True Digital Cash",
  },
  twitter: "haydenaylor",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
};

export const KNOWN_LANGUAGES = {
  // Add more languages here
  // sv: "Svenska",
  en: "English",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

export const GITHUB_EDIT_URL = `https://github.com/Dax911/daxsoCLI/tree/main/web`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/2UbYreY9bR`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "daxso-doc",
  appId: "7I8V9MJ9KJ",
  apiKey: "14937c13e906c36b2076548d895d487f",
};

export type OuterHeaders =
  | "Monopoly M0N3Y"
  | "Usage"
  | "Deployment"
  | "Contributing";

export type SidebarItem<TCode extends KnownLanguageCode = KnownLanguageCode> = {
  text: string;
  link: `${TCode}/${string}`;
};

export type SidebarItemLink = SidebarItem["link"];

export type Sidebar = {
  [TCode in KnownLanguageCode]: {
    [THeader in OuterHeaders]?: SidebarItem<TCode>[];
  };
};
export const SIDEBAR: Sidebar = {
  // For Translations:
  // Keep the "outer headers" in English so we can match them.
  // Translate the "inner headers" to the language you're translating to.
  // Omit any files you haven't translated, they'll fallback to English.
  // Example:
  // sv: {
  //   "Create T3 App": [
  //     { text: "Introduktion", link: "sv/introduction" },
  //     { text: "Installation", link: "sv/installation" },
  //   ],
  //   Usage: [{ text: "Miljövariabler", link: "sv/usage/env-variables" }],
  // },

  en: {
    "Monopoly M0N3Y": [
      { text: "Introduction", link: "en/introduction" },
      { text: "Getting Started", link: "en/start" },
      { text: "FAQ", link: "en/faq" },
      { text: "Governance", link: "en/govern" },
      { text: "Voting Proposal", link: "en/voting" },
    ],
    Contributing: [
      {
        text: "How to contribute",
        link: "en/contributing",
      },
    ],
  },
};

export const SIDEBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "en">,
  Record<OuterHeaders, string>
> = {
  // Translate the sidebar's "outer headers" here
  // sv: {
  //   "Create T3 App": "Create T3 App",
  //   Usage: "Användarguide",
  //   Deployment: "Deployment",
  // },
};
