import { projects } from '@/lib/projects'

export default function sitemap() {
  return [
    { url: 'https://shivang.space', lastModified: new Date() },
    ...projects.map((p) => ({
      url: `https://shivang.space/projects/${p.slug}`,
      lastModified: new Date(),
    })),
  ]
}
