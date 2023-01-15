// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Disability Interactions: ALS/MND",
  tagline: "Designing technology to overcome the barriers faced by people living with ALS/MND",
  url: "https://github.com",
  baseUrl: "/DIX_ALS/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cathyholloway", // Usually your GitHub org/user name.
  projectName: "DIX_ALS", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DIX - ALS',
        logo: { alt: 'DIX logo',
        src:'img/logo.svg',

        },
      
        items: [
          {
            type: 'doc',
            docId: 'introduction/course',
            position: 'left',
            label: 'Handbook',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cathyholloway/DIX_ALS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
             
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'UCL Moodle Page (for students)',
                href: 'https://moodle.ucl.ac.uk/course/view.php?id=30295',
              },
              {
                label: 'The International Alliance of ALS/MND Associations - YouTube',
                href: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjywJuPxI38AhWIhFwKHSanDVwQtwJ6BAgQEAE&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUChpf_KMvxLQcrF5SqTcjVzg&usg=AOvVaw3mDivWyMDzLxnnPi51bjYn',
              },
              {
                label: 'The International Alliance of ALS/MND Associations',
                href: 'https://www.als-mnd.org/',
              },
            ],
          },
          
        ],
        copyright: ` Disability Interactions – ALS/MND © 2023 by Class of UCL 22/23 taking PSYC0100 is licensed under CC BY-NC-SA 4.0. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
