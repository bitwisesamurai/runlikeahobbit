import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isTrue = (val: string | undefined) =>
  val && val.toLowerCase() === "true" ? true : false;

const GTM_INCLUDE_IN_DEV = isTrue(process.env.GTM_INCLUDE_IN_DEV);
const GTM_ENABLE_WEB_VITALS_TRACKING = isTrue(
  process.env.GTM_ENABLE_WEB_VITALS_TRACKING
);

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `web`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: SANITY_PROJECT_ID,
        dataset: SANITY_DATASET,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,

        // Specifies whether to include GTM in development
        //
        // Default: false (GTM will only be loaded in production)
        includeInDevelopment: GTM_INCLUDE_IN_DEV,

        // The data layer that's set before GTM is loaded (This should be an object
        // or a function that's executed in the browser)
        //
        // Default: null
        // defaultDataLayer: { platform: "gatsby" },

        // Optional GTM environment details
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // The name of the event that's triggered on every route change
        //
        // Default: "gatsby-route-change"
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",

        // Default: false
        enableWebVitalsTracking: GTM_ENABLE_WEB_VITALS_TRACKING,

        // Default: https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ],
};

export default config;
