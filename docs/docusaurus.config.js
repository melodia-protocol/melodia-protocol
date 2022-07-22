const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "melodia Docs",
    tagline: "",
    url: "https://docs.melodia.org",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "melodiaProject", // Usually your GitHub org/user name.
    projectName: "docs.melodia.org", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "docs",
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl: "https://github.com/melodiaProject/docs.melodia.org/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],
    plugins: [
      [
        "docusaurus-plugin-typedoc",

        // Plugin / TypeDoc options
        {
          plugin: ["typedoc-plugin-melodia-theme"],
          out: "./developers/sdk",
          entryPoints: ["./node_modules/@melodia/sdk/src/sdk/index.ts"],
          tsconfig: "./node_modules/@melodia/sdk/tsconfig.json",
          excludeInternal: true,
          cleanOutputDir: true,
          disableSources: true,
          hideMembersSymbol: true,
          watch: process.env.TYPEDOC_WATCH,
        },
      ],
    ],
    i18n: {
      defaultLocale: "en",
      locales: [
        "en",
        "es",
        "fr",
        // "zh"
      ],
      // localesNotBuilding: ["ko", "pt", "vi", "zh", "ja"],
      localeConfigs: {
        en: {
          label: "English",
        },
        es: {
          label: "Español",
        },
        // zh: {
        //   label: "中文",
        // },
        fr: {
          label: "Français",
        },
      },
    },
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "melodia Docs",
          logo: {
            alt: "melodia Docs Logo",
            src: "img/logo.png",
          },
          items: [
            {
              label: "Welcome",
              to: "welcome",
              position: "left",
            },
            {
              label: "Protocol",
              to: "/category/protocol",
              position: "left",
            },
            {
              label: "Token",
              to: "/category/token",
              position: "left",
            },
            {
              label: "Developers",
              to: "/category/developers",
              position: "left",
            },
            {
              type: "localeDropdown",
              position: "right",
            },
            {
              href: "https://discord.com/invite/melodia",
              label: "Chat",
              position: "right",
            },
            {
              href: "https://github.com/melodiaProject",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        algolia: {
          appId: "5HE2PIGNOV",
          // This API key is "search-only" and safe to be published
          apiKey: "347af1fe50a2533f274a4a64a695c64c",
          indexName: "melodia",
          contextualSearch: true,
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Welcome",
                  to: "welcome",
                },
                {
                  label: "Protocol Overview",
                  to: "protocol/overview",
                },
                {
                  label: "Developers",
                  to: "/category/developers",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.com/invite/melodia",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/melodiaProject",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/melodiaProject",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} melodia, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
