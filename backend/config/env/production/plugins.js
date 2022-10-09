module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_4EnlvLI1VNDyUDLwzPHd4wbCHpQb/5Ydd9FtF0b",
      apiToken: "KNbro1ifJIBbsk23v8yMQxFM",
      appFilter: "iland-design-website",
      teamFilter: "iland-design",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: process.env.DO_SPACE_ACCESS_KEY,
        secret: process.env.DO_SPACE_SECRET_KEY,
        endpoint: process.env.DO_SPACE_ENDPOINT,
        space: process.env.DO_SPACE_BUCKET,
        // directory: "media", // optional
      },
    },
  },
});
