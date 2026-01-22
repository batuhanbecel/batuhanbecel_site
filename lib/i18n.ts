export type Locale = 'en' | 'tr'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      portfolio: 'Portfolio',
    },
    hero: {
      greeting: 'Hello there, I am',
      available: 'Available for collaboration',
      contact: 'Contact',
      basedIn: 'based in Istanbul.',
      description: "I'm a {role}, with a 10+ year track record in the creative industry. I've worked on 100+ projects with clients worldwide.",
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About',
      subtitle: 'me',
    },
    experience: {
      title: 'Work',
      subtitle: 'experience',
    },
    education: {
      title: 'Education',
      subtitle: 'background',
    },
    skills: {
      title: 'Software',
      subtitle: 'proficiency',
      languages: 'Languages',
      hobbies: 'Hobbies & Interests',
    },
    portfolio: {
      title: 'Selected',
      subtitle: 'works',
      viewAll: 'View all projects',
      allWorks: 'All works',
      description: 'A complete collection of my retouching, design, and creative projects.',
      projects: 'projects',
      noImages: 'No images yet',
      addImages: 'Add images to display your work',
    },
    notFound: {
      title: 'Page Not Found',
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: 'Back to Home',
      goBack: 'Go Back',
    },
    common: {
      scroll: 'Scroll',
      backToHome: 'Back to home',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyim',
      education: 'Eğitim',
      skills: 'Yetenekler',
      portfolio: 'Portfolyo',
    },
    hero: {
      greeting: 'Merhaba, ben',
      available: 'İş birliğine açığım',
      contact: 'İletişim',
      basedIn: "İstanbul'da yaşıyorum.",
      description: "10+ yıllık yaratıcı sektör deneyimine sahip bir {role}'yım. Dünya çapında 100'den fazla projede çalıştım.",
      downloadCV: 'CV İndir',
    },
    about: {
      title: 'Hakkımda',
      subtitle: '',
    },
    experience: {
      title: 'İş',
      subtitle: 'deneyimi',
    },
    education: {
      title: 'Eğitim',
      subtitle: 'geçmişi',
    },
    skills: {
      title: 'Yazılım',
      subtitle: 'yetkinliği',
      languages: 'Diller',
      hobbies: 'Hobiler & İlgi Alanları',
    },
    portfolio: {
      title: 'Seçilmiş',
      subtitle: 'çalışmalar',
      viewAll: 'Tüm projeleri gör',
      allWorks: 'Tüm çalışmalar',
      description: 'Rötuş, tasarım ve yaratıcı projelerimin tam koleksiyonu.',
      projects: 'proje',
      noImages: 'Henüz görsel yok',
      addImages: 'Çalışmalarınızı göstermek için görsel ekleyin',
    },
    notFound: {
      title: 'Sayfa Bulunamadı',
      description: 'Aradığınız sayfa mevcut değil veya taşınmış.',
      backHome: 'Ana Sayfaya Dön',
      goBack: 'Geri Git',
    },
    common: {
      scroll: 'Kaydır',
      backToHome: 'Ana sayfaya dön',
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale]
}
