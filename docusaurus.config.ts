import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
	title  : "NormalNvim",
	tagline: "A normal Neovim distribution ",
	favicon: "img/logo.png",

	url    : "https://NormalNvim.github.io",
	baseUrl: "/",

	organizationName: "NormalNvim",
	projectName     : "NormalNvim.github.io",

  trailingSlash        : true,
	onBrokenLinks        : "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales      : ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					path         : "docs",
					routeBasePath: "docs",
					sidebarPath  : "./sidebars.ts",
					// Remove this to remove the "edit this page" links.
					// editUrl      : "https://github.com/yazi-rs/yazi-rs.github.io/edit/main/",
				},
				blog: {
					showReadingTime: true,
          onUntruncatedBlogPosts: "ignore",
					// Remove this to remove the "edit this page" links.
					// editUrl        : "https://github.com/NormalNvim/NormalNvim.github.io/edit/main/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// domain verification metadata
    metadata: [
      { name: 'google-site-verification', content: 'VX3MPmMRvAHmGO3hhWOo7_Ia97TP8Rgmk19tfecjLL8' },
      //{ name: 'description', content: 'A normal Neovim distribution. Full Asynchronous Support. ; Plugins are loaded asynchronously using Lazy, making the most of available resources. ; IDE Ready. Save weeks of tweaking.' },
    ],

		// Replace with your project's social card
		image : "img/docusaurus-social-card.jpg",
		navbar: {
			title: "NormalNvim",
			logo : {
				alt: "NormalNvim file manager",
				src: "img/logo.png",
			},
			items: [
				{
					type     : "docSidebar",
					sidebarId: "docsSidebar",
					position : "left",
					label    : "Manual",
				},
				// uncomment to enable the features section.
				// { to: "/features", label: "Features", position: "left" },
				{ to: "/blog", label: "Changelog", position: "left" },
				{
					href    : "https://github.com/NormalNvim/NormalNvim",
					label   : "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Resources",
					items: [
						{
							label: "Manual",
							to   : "/docs/installation",
						},
    				// uncomment to enable the features section.
						// {
						// 	label: "Features",
						// 	to   : "/features",
						// },
						{
							label: "Changelog",
							to   : "/blog",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Discord",
							href : "https://discord.gg/ymcMaSnq7d",
						},
						{
							label: "Reddit",
							href : "https://www.reddit.com/r/NormalNvim/",
						}
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href : "https://github.com/NormalNvim/NormalNvim",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/NormalNvim/NormalNvim">NormalNvim</a>. Built by <a href="https://github.com/Zeioth">Zeioth</a> under the GPL3 licence.`,
		},
		prism: {
			theme              : prismThemes.github,
			darkTheme          : prismThemes.dracula,
			additionalLanguages: ["bash", "diff", "lua", "nix", "powershell", "toml"],
		},
		algolia: {
			// search api (readonly)
			appId           : "4KF163T7SU",
			apiKey          : "c5e199d178ce77df6e1eddd623864683",
			indexName       : "normalnvimio",
			contextualSearch: false,

		},
		announcementBar: {
			id: "donate",
			content:
				`<a href="https://www.paypal.com/paypalme/NormalNvim">🙏 Donate to the project</a>`,
		},
	} satisfies Preset.ThemeConfig,

	markdown: {
		format: "mdx",
	},
}

export default config
