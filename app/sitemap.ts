import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://diamondhost.tw',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
