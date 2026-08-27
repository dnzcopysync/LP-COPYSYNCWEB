import { defineConfig } from 'vite';

const fallbackUrl = 'https://copy-sync-sites.diniz7.chatgpt.site';

export default defineConfig({
  plugins: [
    {
      name: 'copy-sync-deployment-url',
      transformIndexHtml(html) {
        const deploymentHost =
          process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
        const siteUrl = deploymentHost ? `https://${deploymentHost}` : fallbackUrl;

        return html.replaceAll('__SITE_URL__', siteUrl);
      },
    },
  ],
});
