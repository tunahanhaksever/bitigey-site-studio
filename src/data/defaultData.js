export const COLOR_THEMES = [
  {
    id: 'bitigey-gold',
    name: 'Bitigey Midnight Gold (Lüks Altın)',
    bg: '#07090e',
    surface: '#0e121d',
    card: '#131929',
    primary: '#f59e0b',
    primaryHover: '#d97706',
    accent: '#fde68a',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    border: 'rgba(245, 158, 11, 0.25)',
    fontFamily: "'Cinzel', serif"
  },
  {
    id: 'deep-crimson',
    name: 'Imperial Crimson (Kraliyet Bordosu)',
    bg: '#0a0507',
    surface: '#140a0e',
    card: '#1f0d15',
    primary: '#e11d48',
    primaryHover: '#be123c',
    accent: '#fda4af',
    text: '#fff1f2',
    textMuted: '#9f828a',
    border: 'rgba(225, 29, 72, 0.3)',
    fontFamily: "'Outfit', sans-serif"
  },
  {
    id: 'cyber-neon',
    name: 'Cyberpunk Aurora (Neon Cyan)',
    bg: '#050b14',
    surface: '#0a1424',
    card: '#0f1f38',
    primary: '#00f2fe',
    primaryHover: '#4facfe',
    accent: '#38bdf8',
    text: '#f0fdfa',
    textMuted: '#7dd3fc',
    border: 'rgba(0, 242, 254, 0.3)',
    fontFamily: "'Inter', sans-serif"
  },
  {
    id: 'emerald-luxury',
    name: 'Emerald Velvet (Zümrüt Yeşili)',
    bg: '#040d0a',
    surface: '#081a14',
    card: '#0d2820',
    primary: '#10b981',
    primaryHover: '#059669',
    accent: '#6ee7b7',
    text: '#f0fdf4',
    textMuted: '#86efac',
    border: 'rgba(16, 185, 129, 0.3)',
    fontFamily: "'Playfair Display', serif"
  },
  {
    id: 'minimal-nordic',
    name: 'Pure Nordic Minimal (Sade & Şık)',
    bg: '#0f172a',
    surface: '#1e293b',
    card: '#334155',
    primary: '#94a3b8',
    primaryHover: '#cbd5e1',
    accent: '#e2e8f0',
    text: '#ffffff',
    textMuted: '#94a3b8',
    border: 'rgba(255, 255, 255, 0.1)',
    fontFamily: "'Inter', sans-serif"
  }
];

export const INITIAL_SECTIONS = [
  {
    id: 'hero-1',
    type: 'hero',
    title: 'BİTİGEY DİJİTAL KÜLTÜR VE SANAT MANİFESTOSU',
    subtitle: 'Dijital edebiyatın yüzeysel tüketimine karşı derinlikli, estetik ve bağımsız bir alan. Modern çağın söz ustalarıyla geleceği yazıyoruz.',
    ctaText: 'Manifestoyu Oku & Katıl',
    ctaLink: '#manifesto',
    badge: '⚡ 2026 EDEBİYAT ÇAĞI',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    align: 'center'
  },
  {
    id: 'features-1',
    type: 'features',
    title: 'Neden Bitigey Ekosistemi?',
    subtitle: 'Geleneksel edebiyatın ruhunu son teknolojiyle buluşturan 3 temel değerimiz.',
    cards: [
      {
        icon: 'BookOpen',
        title: 'Özgür E-Dergicilik',
        description: 'Kög ve Odak Noktası gibi bağımsız dergilerle yeni nesil edebi üretim alanı.'
      },
      {
        icon: 'Sparkles',
        title: 'Yapay Zeka ve Dil Estetiği',
        description: 'En gelişmiş yapay zeka modelleriyle desteklenen modern edebi arşiv ve sözlük.'
      },
      {
        icon: 'Flame',
        title: 'Kolektif İmece Ruhu',
        description: 'Şairlerin, yazarların ve düşünürlerin bir araya geldiği sansürsüz ortak hafıza.'
      }
    ]
  },
  {
    id: 'gallery-1',
    type: 'gallery',
    title: 'Seçkin Eserler & Fotoğraf Galerisi',
    subtitle: 'Picsart ve Photoshop stüdyomuzla boyutlandırılmış ve renklendirilmiş sanatsal kareler.',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'quote-1',
    type: 'quote',
    quoteText: '"Söz bir kez taşa veya ekrana kazındığında, zamanın aşındıramayacağı bir anıta dönüşür."',
    author: 'Tunahan Haksever',
    authorRole: 'Bitigey Kurucusu & Yazar'
  },
  {
    id: 'contact-1',
    type: 'contact',
    title: 'Eserini Gönder veya İletişime Geç',
    subtitle: 'Yeni bir yazı, şiir ya da proje önerisi için doğrudan yayın kurulumuza ulaşın.',
    buttonText: 'Mesajı Gönder',
    emailPlaceholder: 'E-posta adresiniz',
    messagePlaceholder: 'Eseriniz veya mesajınız...'
  },
  {
    id: 'footer-1',
    type: 'footer',
    brandName: 'BİTİGEY',
    tagline: 'Dijital Edebiyat, Sanat ve Kültür Ekosistemi',
    copyright: '© 2026 Bitigey. Tüm hakları saklıdır. Mimari: Tunahan Haksever.'
  }
];
