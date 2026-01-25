export default function sitemap() {
  const baseUrl = 'https://YOUR-DOMAIN.com'; // Change this
  return [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/resume` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/contact` },
  ]
}