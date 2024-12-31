import { defineConfig, HeadConfig } from "vitepress";
import { abbr } from "@mdit/plugin-abbr";

const head: HeadConfig[] = [
    ["link", { rel: "icon", href: `/cutie-mark-thumb.png` }],
    ["meta", { property: "og:image", content: `/twai-logo-thumb.png` }],
];

// Enable analytics only in the final build on CI. Locally, it's not needed.
if (process.env.CI) {
    head.push([
        "script",
        {
            defer: "",
            src: "https://umami.twai.dev/script.js",
            "data-website-id": "618d3d77-d3b8-4043-9ee3-43c7c1cdcc31",
        },
    ]);
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Twai",
    description:
        "Website for sharing knowledge about AI tools and creative workflows for all things pony",

    cleanUrls: true,
    lastUpdated: true,

    vite: {
        plugins: [
            {
                name: "inject-abbreviations",
                transform: {
                    order: "pre",
                    handler(src, id) {
                        if (!id.endsWith(".md")) {
                            return;
                        }

                        const abbrs = {
                            // term: "description"
                        };

                        const abbrsStr = Object.entries(abbrs)
                            .map(([key, value]) => `*[${key}]: ${value}`)
                            .join("\n");

                        return `${src}\n\n${abbrsStr}`;
                    },
                },
            },
        ],
    },

    markdown: {
        theme: {
            dark: "dark-plus",
            light: "light-plus",
        },

        config: (md) => {
            // use more markdown-it plugins
            md.use(abbr);
        },
    },

    head,

    srcDir: "src",

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: "/cutie-mark-thumb.png",

        lastUpdated: {
            formatOptions: {
                dateStyle: "long",
                timeStyle: undefined,
                forceLocale: false,
            },
        },

        editLink: {
            pattern: "https://github.com/MareStare/twai/edit/main/:path",
            text: "Edit this page on GitHub",
        },

        // Enable the search only in the final build on CI. Locally, it takes additional
        // time during the dev HMR server startup and config reloads.
        search: !process.env.CI
            ? undefined
            : {
                  provider: "local",
              },

        nav: [
            { text: "Guide", link: "/welcome" },
            { text: "Blog", link: "/blog" },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/MareStare/twai" },
            { icon: "discord", link: "https://tantabus.ai/pages/discord" },
        ],

        sidebar: [
            {
                text: "Welcome",
                link: "/welcome",
            },
            {
                text: "Software",
                link: "/software",
            },
        ],
    },
});
