import React from 'react';
import { 
  Trash2, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  BookOpen, 
  Flame, 
  ArrowRight,
  Send,
  Image as ImageIcon
} from 'lucide-react';

export function VisualCanvas({
  sections,
  activeTheme,
  deviceMode,
  onUpdateSection,
  onDeleteSection,
  onMoveSection
}) {
  const getContainerWidth = () => {
    if (deviceMode === 'mobile') return 'w-[380px]';
    if (deviceMode === 'tablet') return 'w-[780px]';
    return 'w-full max-w-5xl';
  };

  const renderIcon = (iconName) => {
    if (iconName === 'BookOpen') return <BookOpen className="w-5 h-5" />;
    if (iconName === 'Flame') return <Flame className="w-5 h-5" />;
    return <Sparkles className="w-5 h-5" />;
  };

  return (
    <div className="flex-1 h-full bg-[#05070c] overflow-y-auto p-4 md:p-8 flex justify-center">
      <div
        className={`${getContainerWidth()} bg-[#090d16] border border-white/10 rounded-2xl shadow-2xl transition-all overflow-hidden flex flex-col`}
        style={{
          backgroundColor: activeTheme.bg,
          color: activeTheme.text,
          fontFamily: activeTheme.fontFamily || "'Inter', sans-serif"
        }}
      >
        {sections.map((sec, idx) => (
          <div key={sec.id} className="relative group border-b border-white/5 last:border-b-0">
            {/* Blok Kontrol Butonları (Hover durumunda görünür) */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-1 flex items-center space-x-1 z-20 transition shadow-xl">
              {idx > 0 && (
                <button
                  onClick={() => onMoveSection(idx, -1)}
                  className="p-1.5 hover:bg-white/10 text-slate-300 rounded-lg"
                  title="Yukarı Taşı"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              )}
              {idx < sections.length - 1 && (
                <button
                  onClick={() => onMoveSection(idx, 1)}
                  className="p-1.5 hover:bg-white/10 text-slate-300 rounded-lg"
                  title="Aşağı Taşı"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => onDeleteSection(sec.id)}
                className="p-1.5 hover:bg-rose-500/20 text-rose-400 rounded-lg"
                title="Bölümü Sil"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 1. HERO SECTION */}
            {sec.type === 'hero' && (
              <section className="px-6 py-16 md:py-24 text-center relative overflow-hidden flex flex-col items-center justify-center space-y-6">
                {sec.badge && (
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { badge: e.target.innerText })}
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest border border-amber-500/40 bg-amber-500/10 text-amber-300 cursor-text"
                  >
                    {sec.badge}
                  </span>
                )}

                <h1
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                  className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif-title max-w-3xl leading-tight cursor-text gold-gradient-text"
                >
                  {sec.title}
                </h1>

                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                  className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed cursor-text"
                >
                  {sec.subtitle}
                </p>

                <div className="pt-2 flex items-center space-x-3">
                  <button
                    className="px-6 py-3 rounded-full text-xs font-bold transition shadow-lg flex items-center space-x-2"
                    style={{
                      backgroundColor: activeTheme.primary,
                      color: '#000',
                      boxShadow: `0 10px 25px -5px ${activeTheme.primary}40`
                    }}
                  >
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => onUpdateSection(sec.id, { ctaText: e.target.innerText })}
                      className="cursor-text"
                    >
                      {sec.ctaText}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {sec.image && (
                  <div className="mt-8 w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <img
                      src={sec.image}
                      alt="Hero"
                      className="w-full h-64 md:h-96 object-cover"
                      style={{ filter: sec.imageFilter || 'none' }}
                    />
                  </div>
                )}
              </section>
            )}

            {/* 2. FEATURES SECTION */}
            {sec.type === 'features' && (
              <section className="px-6 py-16 space-y-10">
                <div className="text-center space-y-2">
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                    className="text-2xl md:text-3xl font-bold font-heading cursor-text"
                  >
                    {sec.title}
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                    className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto cursor-text"
                  >
                    {sec.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sec.cards.map((card, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-6 rounded-2xl luxury-card space-y-3"
                      style={{
                        backgroundColor: activeTheme.card,
                        borderColor: activeTheme.border
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${activeTheme.primary}20`,
                          color: activeTheme.primary
                        }}
                      >
                        {renderIcon(card.icon)}
                      </div>

                      <h3
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const updated = [...sec.cards];
                          updated[cIdx].title = e.target.innerText;
                          onUpdateSection(sec.id, { cards: updated });
                        }}
                        className="text-base font-bold cursor-text"
                      >
                        {card.title}
                      </h3>

                      <p
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const updated = [...sec.cards];
                          updated[cIdx].description = e.target.innerText;
                          onUpdateSection(sec.id, { cards: updated });
                        }}
                        className="text-xs text-slate-400 leading-relaxed cursor-text"
                      >
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. GALLERY SECTION */}
            {sec.type === 'gallery' && (
              <section className="px-6 py-16 space-y-8">
                <div className="text-center space-y-2">
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                    className="text-2xl md:text-3xl font-bold font-heading cursor-text"
                  >
                    {sec.title}
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                    className="text-xs md:text-sm text-slate-400 cursor-text"
                  >
                    {sec.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sec.images.map((img, iIdx) => (
                    <div key={iIdx} className="rounded-xl overflow-hidden border border-white/10 aspect-square luxury-card group/img">
                      <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover/img:scale-105 transition duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3.5 PRICING SECTION */}
            {sec.type === 'pricing' && (
              <section className="px-6 py-16 space-y-8">
                <div className="text-center space-y-2">
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                    className="text-2xl md:text-3xl font-bold font-heading cursor-text gold-gradient-text"
                  >
                    {sec.title}
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                    className="text-xs md:text-sm text-slate-400 cursor-text"
                  >
                    {sec.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(sec.plans || []).map((plan, pIdx) => (
                    <div
                      key={pIdx}
                      className={`p-6 rounded-2xl luxury-card space-y-4 relative flex flex-col justify-between ${plan.isPopular ? 'border-amber-500/60 shadow-2xl ring-1 ring-amber-500/40' : ''}`}
                      style={{
                        backgroundColor: activeTheme.card,
                        borderColor: plan.isPopular ? activeTheme.primary : activeTheme.border
                      }}
                    >
                      {plan.isPopular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-black shadow-lg">
                          EN ÇOK TERCİH EDİLEN
                        </span>
                      )}

                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-3xl font-extrabold text-amber-300">{plan.price}</span>
                          <span className="text-xs text-slate-400">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 py-3 border-t border-white/5 text-xs text-slate-300">
                        {(plan.features || []).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className="w-full py-2.5 rounded-xl font-bold text-xs transition shadow-lg"
                        style={{
                          backgroundColor: plan.isPopular ? activeTheme.primary : 'rgba(255,255,255,0.08)',
                          color: plan.isPopular ? '#000' : '#fff'
                        }}
                      >
                        Planı Seç
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3.6 CTA BANNER */}
            {sec.type === 'cta' && (
              <section className="px-6 py-16 text-center">
                <div
                  className="p-8 md:p-12 rounded-3xl space-y-6 max-w-4xl mx-auto relative overflow-hidden luxury-card"
                  style={{
                    background: `linear-gradient(135deg, ${activeTheme.surface}, ${activeTheme.card})`,
                    borderColor: activeTheme.primary
                  }}
                >
                  {sec.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest border border-amber-500/40 bg-amber-500/10 text-amber-300">
                      {sec.badge}
                    </span>
                  )}
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                    className="text-2xl md:text-4xl font-extrabold font-serif-title text-white cursor-text leading-tight"
                  >
                    {sec.title}
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                    className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto cursor-text"
                  >
                    {sec.subtitle}
                  </p>
                  <button
                    className="px-8 py-3 rounded-full font-bold text-xs inline-flex items-center space-x-2 transition shadow-xl hover:scale-105"
                    style={{ backgroundColor: activeTheme.primary, color: '#000' }}
                  >
                    <span>{sec.buttonText || 'Hemen Başlayın'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            )}

            {/* 4. QUOTE / MANIFESTO */}
            {sec.type === 'quote' && (
              <section className="px-6 py-16 text-center space-y-4 max-w-3xl mx-auto">
                <blockquote
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { quoteText: e.target.innerText })}
                  className="text-lg md:text-2xl font-serif-title italic leading-relaxed text-amber-200 cursor-text"
                >
                  {sec.quoteText}
                </blockquote>
                <div>
                  <h4
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { author: e.target.innerText })}
                    className="text-sm font-bold text-white cursor-text"
                  >
                    {sec.author}
                  </h4>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { authorRole: e.target.innerText })}
                    className="text-xs text-slate-400 cursor-text"
                  >
                    {sec.authorRole}
                  </p>
                </div>
              </section>
            )}

            {/* 5. CONTACT FORM */}
            {sec.type === 'contact' && (
              <section className="px-6 py-16 max-w-xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <h2
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { title: e.target.innerText })}
                    className="text-2xl font-bold font-heading cursor-text"
                  >
                    {sec.title}
                  </h2>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onUpdateSection(sec.id, { subtitle: e.target.innerText })}
                    className="text-xs text-slate-400 cursor-text"
                  >
                    {sec.subtitle}
                  </p>
                </div>

                <div className="space-y-3 luxury-card p-6" style={{ backgroundColor: activeTheme.card }}>
                  <input
                    type="email"
                    placeholder={sec.emailPlaceholder || 'E-posta adresiniz'}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                  <textarea
                    rows="3"
                    placeholder={sec.messagePlaceholder || 'Mesajınız...'}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
                  />
                  <button
                    className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition shadow-lg"
                    style={{ backgroundColor: activeTheme.primary, color: '#000' }}
                  >
                    <span>{sec.buttonText || 'Mesajı Gönder'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </section>
            )}

            {/* 6. FOOTER */}
            {sec.type === 'footer' && (
              <footer className="px-6 py-8 border-t border-white/10 text-center text-xs text-slate-400 space-y-2">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { brandName: e.target.innerText })}
                  className="font-serif-title font-bold text-base text-amber-300 cursor-text"
                >
                  {sec.brandName}
                </h3>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { tagline: e.target.innerText })}
                  className="cursor-text"
                >
                  {sec.tagline}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => onUpdateSection(sec.id, { copyright: e.target.innerText })}
                  className="text-[11px] text-slate-500 pt-2 cursor-text"
                >
                  {sec.copyright}
                </p>
              </footer>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
