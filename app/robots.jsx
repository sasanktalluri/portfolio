export default function robots() {
  return {
    rules: [
      // Link-preview bots only fetch the page to render share cards
      {
        userAgent: ['LinkedInBot', 'Twitterbot', 'Slackbot-LinkExpanding', 'facebookexternalhit'],
        allow: '/',
      },
      // Block search engines and all other crawlers
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  }
}
