import { MetadataRoute } from 'next';
const buildUrl = (path?: string) => `http://localhost:3000${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents: any[] = []; // Mock data for now
  const categoryContents: any[] = []; // Mock data for now

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/news/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/members'),
      lastModified: now,
    },

    {
      url: buildUrl('/news'),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
}
