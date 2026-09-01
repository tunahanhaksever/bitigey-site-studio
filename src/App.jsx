import React, { useState } from 'react';
import { Navbar } from './components/Header/Navbar';
import { ActivitySidebar } from './components/Sidebar/ActivitySidebar';
import { BlocksPanel } from './components/Sidebar/BlocksPanel';
import { ImageStudioPanel } from './components/Sidebar/ImageStudioPanel';
import { ThemesPanel } from './components/Sidebar/ThemesPanel';
import { GeminiAiPanel } from './components/Sidebar/GeminiAiPanel';
import { VisualCanvas } from './components/Canvas/VisualCanvas';
import { ExportModal } from './components/Modals/ExportModal';
import { translations } from './locales/translations';
import { COLOR_THEMES, INITIAL_SECTIONS } from './data/defaultData';

export function App() {
  const [lang, setLang] = useState('tr'); // en, tr, de
  const [activeTab, setActiveTab] = useState('blocks'); // blocks, photos, themes, ai
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop, tablet, mobile
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]);
  const [sections, setSections] = useState(INITIAL_SECTIONS);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const t = translations[lang] || translations.en;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  // Yeni Blok Ekle
  const handleAddBlock = (type) => {
    let newSec = { id: `sec-${Date.now()}`, type };
    if (type === 'hero') {
      newSec = {
        ...newSec,
        title: 'YENİ LÜKS BAŞLIK',
        subtitle: 'Buraya etkileyici bir açıklama metni ekleyin.',
        ctaText: 'Keşfet',
        badge: 'YENİ BÖLÜM'
      };
    } else if (type === 'features') {
      newSec = {
        ...newSec,
        title: 'Özellikler & Hizmetler',
        subtitle: 'Sunduğunuz üst düzey avantajlar',
        cards: [
          { icon: 'Sparkles', title: 'Hızlı & Estetik', description: 'Modern tasarım standartları.' },
          { icon: 'BookOpen', title: 'Edebi Derinlik', description: 'Anlam yüklü içerikler.' },
          { icon: 'Flame', title: 'Özgür Üretim', description: 'Sınırsız yaratıcılık alanı.' }
        ]
      };
    } else if (type === 'gallery') {
      newSec = {
        ...newSec,
        title: 'Fotoğraf Galerisi',
        subtitle: 'Picsart stüdyosu ile renklendirilmiş kareler',
        images: [
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80'
        ]
      };
    } else if (type === 'pricing') {
      newSec = {
        ...newSec,
        title: 'Seçkin Üyelik & Yayın Paketleri',
        subtitle: 'İhtiyacınıza uygun esnek ve avantajlı planlar',
        plans: [
          { name: 'Başlangıç', price: 'Ücretsiz', period: 'Ömür boyu', features: ['Temel yayın erişimi', 'Dijital kütüphane', 'Topluluk desteği'], isPopular: false },
          { name: 'Bitigey Pro', price: '₺149', period: '/ay', features: ['Tüm dergi arşivleri', 'Sınırsız AI kullanımı', 'Özel yazar atölyeleri', 'Öncelikli destek'], isPopular: true },
          { name: 'Kurumsal VIP', price: '₺499', period: '/ay', features: ['Özel edebi danışmanlık', 'Basılı yayın gönderimi', 'VIP etkinlik davetleri', '7/24 Birebir destek'], isPopular: false }
        ]
      };
    } else if (type === 'cta') {
      newSec = {
        ...newSec,
        title: 'Büyük Dijital Dönüşüme Bugün Katılın',
        subtitle: 'Siz de modern çağın bağımsız edebi ve teknolojik hareketinde yerinizi alın.',
        buttonText: 'Hemen Başlayın',
        badge: 'SINIRLI KONTENJAN'
      };
    } else if (type === 'quote') {
      newSec = {
        ...newSec,
        quoteText: '"Gelecek, onu bugünden inşa edenlerin eseridir."',
        author: 'Tunahan Haksever',
        authorRole: 'Yazar & Sistem Mimarı'
      };
    } else if (type === 'contact') {
      newSec = {
        ...newSec,
        title: 'İletişim & Yayın Başvurusu',
        subtitle: 'Doğrudan bize ulaşın, projenizi birlikte hayata geçirelim',
        buttonText: 'Mesajı Gönder'
      };
    } else {
      newSec = {
        ...newSec,
        brandName: 'BİTİGEY',
        tagline: 'Dijital Edebiyat, Sanat ve Teknoloji Stüdyosu — Tunahan Haksever',
        copyright: '© 2026 Bitigey. Tüm hakları saklıdır.'
      };
    }

    setSections(prev => [...prev, newSec]);
    showToast('✓ Yeni lüks bölüm siteye eklendi!');
  };

  // Blok Güncelle
  const handleUpdateSection = (id, fields) => {
    setSections(prev => prev.map(s => s.id === id ? { ...s, ...fields } : s));
  };

  // Blok Sil
  const handleDeleteSection = (id) => {
    setSections(prev => prev.filter(s => s.id !== id));
    showToast('Bölüm silindi.');
  };

  // Blok Sıralamasını Değiştir
  const handleMoveSection = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= sections.length) return;
    const updated = [...sections];
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    setSections(updated);
  };

  // Image Studio'dan Görsel Uygulama
  const handleApplyImage = (imgSrc, filterStyle) => {
    setSections(prev => prev.map((s, idx) => {
      if (idx === 0 && s.type === 'hero') {
        return { ...s, image: imgSrc, imageFilter: filterStyle };
      }
      return s;
    }));
    showToast('✓ Düzenlenen görsel kapak alanına uygulandı!');
  };

  // Gemini'den Üretilen İçeriği Uygulama
  const handleApplyAiContent = (aiData) => {
    if (aiData.type === 'hero') {
      setSections(prev => prev.map(s => s.type === 'hero' ? { ...s, title: aiData.title, subtitle: aiData.subtitle } : s));
    } else if (aiData.type === 'quote') {
      setSections(prev => prev.map(s => s.type === 'quote' ? { ...s, quoteText: aiData.quoteText, author: aiData.author } : s));
    }
    showToast('✓ Yapay zeka metni siteye yerleştirildi!');
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#07090e] text-slate-100 overflow-hidden select-none font-sans">
      {/* 1. Üst Navbar */}
      <Navbar
        t={t}
        currentLang={lang}
        onChangeLang={setLang}
        deviceMode={deviceMode}
        onChangeDeviceMode={setDeviceMode}
        onOpenGemini={() => {
          setActiveTab('ai');
          window.open('https://gemini.google.com/', '_blank');
        }}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* 2. Ana Çalışma Alanı */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sol Dikey Aktivite Çubuğu */}
        <ActivitySidebar
          t={t}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Yan Panel İçeriği (Bloklar / Photoshop Görsel Studio / Temalar / Gemini AI) */}
        <div className="h-full flex shrink-0">
          {activeTab === 'blocks' && (
            <BlocksPanel t={t} onAddBlock={handleAddBlock} />
          )}

          {activeTab === 'photos' && (
            <ImageStudioPanel t={t} onApplyToActiveSection={handleApplyImage} />
          )}

          {activeTab === 'themes' && (
            <ThemesPanel
              t={t}
              activeTheme={activeTheme}
              onSelectTheme={(th) => {
                setActiveTheme(th);
                showToast(`✓ '${th.name}' teması uygulandı!`);
              }}
            />
          )}

          {activeTab === 'ai' && (
            <GeminiAiPanel
              t={t}
              onApplyAiContent={handleApplyAiContent}
            />
          )}
        </div>

        {/* Canlı Görsel Site Tuvali (Canvas) */}
        <VisualCanvas
          sections={sections}
          activeTheme={activeTheme}
          deviceMode={deviceMode}
          onUpdateSection={handleUpdateSection}
          onDeleteSection={handleDeleteSection}
          onMoveSection={handleMoveSection}
        />
      </div>

      {/* 3. Dışa Aktarma Modalı */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        sections={sections}
        activeTheme={activeTheme}
      />

      {/* Toast Bildirim Kutusu */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#131929] border border-amber-500/40 text-amber-200 px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 text-xs font-medium animate-fade-in">
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}

export default App;
