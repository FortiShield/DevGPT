/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");

customPostCssPlugin = () => {
  return {
    name: "custom-postcss",
    configurePostCss(options) {
      options.plugins.push(require("postcss-preset-env"));
      return options;
    },
  };
};

module.exports = {
  title: "DevGpt",
  tagline: "An Open-Source Programming Framework for Agentic AI",
  url: "https://khulnasoft.github.io",
  baseUrl: "/devgpt/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ag.ico",
  organizationName: "Khulnasoft", // Usually your GitHub org/user name.
  projectName: "DevGpt", // Usually your repo name.
  scripts: [
    {
      src: "/devgpt/js/custom.js",
      async: true,
      defer: true,
    },
  ],
  markdown: {
    format: "detect", // Support for MD files with .md extension
  },
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "DevGpt",
      logo: {
        alt: "DevGpt",
        src: "img/ag.svg",
      },
      items: [
        {
          type: "dropdown",
          position: "left",
          label: "Docs",
          items: [
            {
              type: "doc",
              label: "Getting Started",
              docId: "Getting-Started",
            },
            {
              type: "doc",
              label: "Installation",
              docId: "installation/Installation",
            },
            {
              type: "doc",
              label: "Tutorial",
              docId: "tutorial/introduction",
            },
            {
              type: "doc",
              label: "User Guide",
              docId: "topics",
            },
            {
              type: "doc",
              docId: "reference/agentchat/conversable_agent",
              label: "API Reference",
            },
            {
              type: "doc",
              docId: "FAQ",
              label: "FAQs",
            },
            {
              type: "doc",
              docId: "devgpt-studio/getting-started",
              label: "DevGpt Studio",
            },
            {
              type: "doc",
              docId: "ecosystem",
              label: "Ecosystem",
            },
            {
              type: "doc",
              label: "Contributor Guide",
              docId: "contributor-guide/contributing",
            },
            {
              type: "doc",
              label: "Research",
              docId: "Research",
            },
          ],
        },
        {
          type: "dropdown",
          position: "left",
          label: "Examples",
          items: [
            {
              type: "doc",
              label: "Examples by Category",
              docId: "Examples",
            },
            {
              type: "doc",
              label: "Examples by Notebook",
              docId: "notebooks",
            },
            {
              type: "doc",
              label: "Application Gallery",
              docId: "Gallery",
            },
          ],
        },
        {
          label: "Other Languages",
          type: "dropdown",
          position: "left",
          items: [
            {
              label: "Dotnet",
              href: "https://khulnasoft.github.io/devgpt-for-net/",
            },
          ],
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/khulnasoft/devgpt",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://aka.ms/devgpt-dc",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://twitter.com/pydevgpt",
          label: "Twitter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Getting Started',
        //       to: 'docs/getting-started',
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            //     // {
            //     //   label: 'Stack Overflow',
            //     //   href: 'https://stackoverflow.com/questions/tagged/pymarlin',
            //     // },
            {
              label: "Discord",
              href: "https://aka.ms/devgpt-dc",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/pydevgpt",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevGpt Authors |  <a target="_blank" style="color:#10adff" href="https://go.khulnasoft.com/fwlink/?LinkId=521839">Privacy and Cookies</a>`,
    },
    announcementBar: {
      id: "whats_new",
      content:
        'What\'s new in DevGpt? Read <a href="/devgpt/blog/2024/03/03/DevGpt-Update">this blog</a> for an overview of updates',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    /* Clarity Config */
    clarity: {
      ID: "lnxpe6skj1", // The Tracking ID provided by Clarity
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          // Adjust any other blog settings as needed
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/khulnasoft/devgpt/edit/main/website/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        blogDir: "./blog/",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
    customPostCssPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/topics/llm_configuration",
            from: ["/docs/llm_endpoint_configuration/"],
          },
          {
            to: "/docs/Getting-Started",
            from: ["/docs/"],
          },
          {
            to: "/docs/topics/llm_configuration",
            from: ["/docs/llm_configuration"],
          },
          {
            to: "/docs/tutorial/chat-termination",
            from: ["/docs/tutorial/termination"],
          },
          {
            to: "/docs/tutorial/what-next",
            from: ["/docs/tutorial/what-is-next"],
          },
          {
            to: "/docs/topics/non-openai-models/local-lm-studio",
            from: ["/docs/topics/non-openai-models/lm-studio"],
          },
          {
            to: "/docs/notebooks/agentchat_nested_chats_chess",
            from: ["/docs/notebooks/agentchat_chess"],
          },
          {
            to: "/docs/notebooks/agentchat_nested_chats_chess_altmodels",
            from: ["/docs/notebooks/agentchat_chess_altmodels"],
          },
          {
            to: "/docs/contributor-guide/contributing",
            from: ["/docs/Contribute"],
          },
        ],
      },
    ],
    ["docusaurus-plugin-clarity", {}],
  ],
};
