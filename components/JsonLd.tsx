export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://batuhanbecel.com'
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Batuhan Becel',
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: 'Retoucher',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://www.behance.net/batuhanbecel',
      'https://www.instagram.com/batuhanbecel_/',
      'https://www.linkedin.com/in/batuhanbecel/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    email: 'batuhanbecel@gmail.com',
    telephone: '+90 541 167 0898',
    knowsAbout: [
      'Photo Retouching',
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Video Editing',
      'Creative Design',
      'WordPress',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Batuhan Becel',
    url: siteUrl,
    description: 'Retoucher based in Istanbul, Türkiye.',
    author: {
      '@type': 'Person',
      name: 'Batuhan Becel',
    },
  }

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Portfolio',
    author: {
      '@type': 'Person',
      name: 'Batuhan Becel',
    },
    url: `${siteUrl}/portfolio`,
    description: 'A collection of professional retouching and creative design work.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  )
}
