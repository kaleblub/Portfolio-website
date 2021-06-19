module.exports = {
  siteMetadata: {
    title: "Kaleb's Portfolio",
    titleTemplate: "%s – Kaleb Humpal",
    logoTemplate: "~/KalebHumpal/%s $",
    description: "My Portfolio Website, Built With A Mr Robot Styled Gatsby Starter",
    url: "localhost:8000", // No trailing slash allowed!
    image: "",
    socialLinks: {
      twitter: "#",
      github: "https://github.com/kaleblub/",
      linkedin: "#",
      instagram: "#",
      youtube: "#",
      google: "#",
      telegram: "#",
      stackOverflow: "#",
    },
    twitterUsername: "",
    mode: {
      default: "dark",
      allowChange: true,
    },
    blog: {
      create: true,
      title: "Blog",
      path: "/blog",
    },
    menuLinks: [
      {
        name: "Blog",
        link: '/blog',
      },
      {
        name: "My Work",
        link: '/works',
      },
    ],
    // helloFriendNG: {
    //   mode,
    //   menuLinks,
    //   blog: {
    //     title: blog.title
    //   }
    // }
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "post", path: `content/posts` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "image", path: `content/images` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "page", path: `content/pages` },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layouts/article.js"),
        },
      },
    },
    // {
    //   resolve: "gatsby-theme-hello-friend-ng",
    //   options: {
    //     // ...
    //   },
    // },
  ],
}