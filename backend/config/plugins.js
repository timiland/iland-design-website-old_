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
});
